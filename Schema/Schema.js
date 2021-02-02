const express = require('express');
const graphql = require('graphql');
const _ = require('lodash');
const crypto = require('crypto')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SEC } = require('../keys/keys');
const geolib = require('geolib');
const User = require('../models/user')
const Report = require('../models/reports')

// https://www.figma.com/file/4bAC5AKUM1VmxyAaRhiLrs/BETON-ER-Diagram?node-id=0%3A1

const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = graphql

// dummy data
let users = [
    { id: "1", name: "Aajinkya", email: "a@gmail.com", password: "harrypotter123", address: "oshiwara", DOB: "12/03/2003", reports: [], coupons: ['9'] },
    { id: "2", name: "Pratit", email: "p@gmail.com", password: "bigronnie", address: "vakola", DOB: "09/01/2004", reports: ["20", "117"], coupons: ['10'] },
    { id: "3", name: "Miheer", email: "m@gmail.com", password: "lewishamilton", address: "lokhandwala", DOB: "31/12/2000", reports: ["18"], coupons: ['7'] },
    { id: "4", name: "George", email: "g@gmail.com", password: "merc", address: "london", DOB: "06/05/2006", reports: ["19"], coupons: [] },
    { id: "5", name: "Max", email: "x@gmail.com", password: "redbull", address: "haiti", DOB: "1/01/2008", reports: [], coupons: [] },
    { id: '6', name: "Nick", email: "n@gmail.com", password: "talman", address: "miami", DOB: "30/09/202", reports: ["17"], coupons: ['8'] }
]

let admin = [
    { id: "11", email: "test1@admin.com", password: "test123" },
    { id: "12", email: "test2@admin.com", password: "test543" },
    { id: "13", email: "test3@admin.com", password: "test420" },
    { id: "14", email: "test4@admin.com", password: "test690" },
    { id: "15", email: "test5@admin.com", password: "test300" },
    { id: "16", email: "test6@admin.com", password: "test900" },
    { id: "17", email: "test7@admin.com", password: "test455" },
]

let coupons = [
    { id: "10", name: "scam200", amount: "200", validity: "20/12/2021", advertiserID: "51", userID: "2" },
    { id: "9", name: "disc100", amount: "100", validity: "02/01/2021", advertiserID: "50", userID: "1" },
    { id: "8", name: "sneak69", amount: "69", validity: "09/08/2021", advertiserID: "51", userID: "6" },
    { id: "7", name: "report420", amount: "42", validity: "26/11/2021", advertiserID: "53", userID: "3" },
]

let reports = [
    { id: "20", address: "address1", image: "google.com", location: "16.02018665976193 73.61578878715383", resolved: true, userID: "2" },
    { id: "19", address: "address2", image: "google1.com", location: "16.031417006622743 73.59549923245102", resolved: false, userID: "4" },
    { id: "18", address: "address3", image: "google2.com", location: "15.999 73.675", resolved: false, userID: "3" },
    { id: "17", address: "address4", image: "google3.com", location: "15.998 73.669", resolved: true, userID: "6" },
    { id: "117", address: "address4", image: "youtube.com", location: "15.994 73.665", resolved: true, userID: "2" },
]

let advertisers = [
    { id: "50", company: "gencoin", password: "pass123", category: "cryptocurrency", email: "gencoin@hotmail.com", name: "user123", website: "youtube.com" },
    { id: "51", company: "yahoo", password: "pass1234", category: "information", email: "yahoo@hotmail.com", name: "user12345", website: "youtube.com" },
    { id: "52", company: "google", password: "pass12345", category: "search-engine", email: "google@hotmail.com", name: "user123456", website: "youtube.com" },
    { id: "53", company: "tesla", password: "pass12345", category: "automobile", email: "tesla@hotmail.com", name: "user123457", website: "youtube.com" },
]





// data types
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        address: { type: GraphQLString },
        dob: { type: GraphQLString },
        token: { type: GraphQLString },
        reports: {
            type: new GraphQLList(ReportsType),
            resolve(parent, args) {
                let temp = []
                parent.reports.forEach(y => {
                    let test = _.find(reports, r => r.id === y)
                    temp.push(test)
                })
                return temp
            }
        },
        coupons: {
            type: new GraphQLList(CouponsType),
            resolve(parent, args) {
                let temp = []
                parent.coupons.forEach(y => {
                    let test = _.find(coupons, r => r.id === y)
                    temp.push(test)
                })
                return temp
            }
        }
    })
});

const AdminType = new GraphQLObjectType({
    name: "Admin",
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});

const ContractorsType = new GraphQLObjectType({
    name: "Contractor",
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        address: { type: GraphQLString },
        name: { type: GraphQLString }
    })
});

const AdvertisersType = new GraphQLObjectType({
    name: "Contractor",
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        company: { type: GraphQLString },
        name: { type: GraphQLString },
        website: { type: GraphQLString },
        category: { type: GraphQLString },
    })
});

const ReportsType = new GraphQLObjectType({
    name: "Reports",
    fields: () => ({
        id: { type: GraphQLID },
        image: { type: GraphQLString },
        address: { type: GraphQLString },
        location: { type: GraphQLString },
        userID: {
            type: UserType,
            resolve(parent, args) {
                return _.find(users, a => a.id === parent.userID)
            }
        },
        resolved: { type: GraphQLBoolean },
        noOfReports: { type: GraphQLInt }
    })
})

const CouponsType = new GraphQLObjectType({
    name: "Coupons",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        amount: { type: GraphQLString },
        validity: { type: GraphQLString },
        advertiserID: {
            type: AdvertisersType,
            resolve(parent, args) {
                return _.find(advertisers, a => a.id === parent.advertiserID)
            }
        },
        userID: {
            type: UserType,
            resolve(parent, args) {
                return _.find(users, a => a.id === parent.userID)
            }
        },
    })
})








const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(users, (a) => {
                    if (a.id == args['id']) {
                        return a
                    }
                });
            }
        },
        admin: {
            type: AdminType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(users, (a) => {
                    if (a.id == args['id']) {
                        return a
                    }
                });
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return users;
            }
        },
        allReports: {
            type: new GraphQLList(ReportsType),
            resolve(parent, args) {
                return reports
            }
        },
        admins: {
            type: new GraphQLList(AdminType),
            resolve(parent, args) {
                return admin
            }
        },
        advertisers: {
            type: new GraphQLList(AdvertisersType),
            resolve(parent, args) {
                return advertisers
            }
        },
        coupons: {
            type: new GraphQLList(CouponsType),
            resolve(parent, args) {
                return coupons
            }
        },
        getReportsNearMe: {
            type: new GraphQLList(ReportsType),
            args: {
                latitude: { type: GraphQLString },
                longitude: { type: GraphQLString },
            },
            resolve(parent, args) {
                let main = {
                    latitude: Number(args['latitude']),
                    longitude: Number(args['longitude'])
                }
                let data = reports.filter(r => {
                    let coords = r.location.split(" ");
                    let tempPoint = {
                        latitude: Number(coords[0]),
                        longitude: Number(coords[1])
                    }
                    let disanceBet = geolib.getDistance(main, tempPoint)
                    console.log("Distance:", disanceBet)
                    if (disanceBet > 5000) {
                        return false
                    } else {
                        return true
                    }
                })

                return data;
            }
        }
    }
})

// mutation
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // too add a new User -- sign up
        addUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                dob: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {
                if (!args.email || !args.name || !args.password || !args.dob || !args.address) {
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                }
                return await User.findOne({ email: args.email }).then(async (res) => {
                    if (res) {
                        throw new Error("An account with the same email already exist! Try Logging in!");
                    } else {
                        // hashing passwords
                        let hashedPwd = await bcrypt.hash(args.password, 15)
                        if (!hashedPwd) {
                            throw new Error('Our servers seems to be a lil busy today. Try again later?')
                        }
                        let newUser = new User({
                            email: args.email,
                            name: args.name,
                            address: args.address,
                            dob: args.dob,
                            password: hashedPwd,
                            coupons: [],
                            reports: []
                        })
                        // saving to db
                        let results = await newUser.save();
                        console.log(results);
                        if (!results) {
                            throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                        }
                        return results
                    }
                })

            }
        }, //add user mutation
        login: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args) {
                if (!args.email || !args.password) {
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                }
                return await User.findOne({ email: args.email }).then(async (res) => {
                    if (!res) {
                        throw new Error("Yayzow! We can't find an account with that email. You gotta register first, you know ¯\_(ツ)_/¯");
                    }
                    // checking the password comparison
                    let didMatch = await bcrypt.compare(args.password, res.password)
                    if (!didMatch) {
                        throw new Error("Invalid Email and Password combination :(")
                    }
                    const token = jwt.sign({ _id: res._id }, JWT_SEC);
                    res['token'] = token;
                    return res;
                })
            }
        }, //login mutation done
        addReport: {
            type: ReportsType,
            args: {
                image: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) },
                location: { type: new GraphQLNonNull(GraphQLString) },
                userID: { type: new GraphQLNonNull(GraphQLID) },
                resolved: { type: new GraphQLNonNull(GraphQLBoolean) },
                noOfReports: { type: new GraphQLNonNull(GraphQLInt) }
            },
            async resolve(parent, args) {
                if (!args.image || !args.address || !args.location || !args.userID || args.resolved || args.noOfReports) {
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                } else {
                    let newReport = new Report({
                        image: args.image,
                        address: args.address,
                        location: args.location,
                        userID: args.userID,
                        resolved: args.resolved,
                        noOfReports: args.noOfReports
                    })
                    // saving to db
                    let results = await newReport.save();
                    console.log(results);
                    if (!results) {
                        throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                    }
                    return results
                }
            }
        },
    }
})

// -------- Schema --------- //
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})