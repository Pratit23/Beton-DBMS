const express = require('express');
const graphql = require('graphql');
const _ = require('lodash');
const crypto = require('crypto')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SEC } = require('../keys/keys');
const geolib = require('geolib');
const User = require('../models/user')
const Admin = require('../models/admin')
const Advertisers = require('../models/advertisers')
const Coupon = require('../models/coupons')
const Advertisement = require('../models/advertisments')
const Report = require('../models/reports')
const BaseReports = require('../models/baseReports');

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
    { id: "50", company: "gencoin", password: "pass123", category: "cryptocurrency", email: "gencoin@hotmail.com", website: "youtube.com" },
    { id: "51", company: "yahoo", password: "pass1234", category: "information", email: "yahoo@hotmail.com", website: "youtube.com" },
    { id: "52", company: "google", password: "pass12345", category: "search-engine", email: "google@hotmail.com", website: "youtube.com" },
    { id: "53", company: "tesla", password: "pass12345", category: "automobile", email: "tesla@hotmail.com", website: "youtube.com" },
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
                    let test = Report.findById(y)
                    temp.push(test)
                })
                return temp
            }
        },
        baseReports: {
            type: new GraphQLList(BaseReportsType),
            resolve(parent, args) {
                let temp = []
                parent.baseReports.forEach(y => {
                    let test = BaseReports.findById(y)
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
                    let test = Coupon.findById(y);
                    temp.push(test)
                })
                return temp
            }
        },
        level: { type: GraphQLString }
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
    name: "Advertisers",
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        company: { type: GraphQLString },
        website: { type: GraphQLString },
        category: { type: GraphQLString },
        token: { type: GraphQLString },
        coupons: {
            type: new GraphQLList(CouponsType),
            resolve(parent, args) {
                let temp = []
                parent.coupons.forEach(y => {
                    let test = Coupon.findById(y);
                    temp.push(test)
                })
                return temp
            }
        },
        advertisments: {
            type: new GraphQLList(AdvertisementType),
            resolve(parent, args) {
                let temp = []
                parent.coupons.forEach(y => {
                    let test = Advertisement.findById(y);
                    temp.push(test)
                })
                return temp
            }

        }
    })
});


const BaseReportsType = new GraphQLObjectType({
    name: "BaseReports",
    fields: () => ({
        id: { type: GraphQLID },
        image: { type: GraphQLString },
        address: { type: GraphQLString },
        location: { type: GraphQLString },
        reportedAt: { type: GraphQLString }, // date
        reportedOn: { type: GraphQLString }, // time
        userID: {
            type: UserType,
            resolve(parent, args) {
                //// change this. Fetch from MongoDB
                return User.findById(parent.userID)
            }
        },
        resolved: { type: GraphQLBoolean },
        noOfReports: { type: GraphQLInt },
        similar: {
            type: GraphQLList(ReportsType),
            resolve(parent, args) {
                let temp = [];
                parent.similar.forEach(s => {
                    let test = Report.findById(s)
                    temp.push(test);
                })
                return temp;
            }
        }
    })
})

const ReportsType = new GraphQLObjectType({
    name: "Reports",
    fields: () => ({
        id: { type: GraphQLID },
        image: { type: GraphQLString },
        address: { type: GraphQLString },
        location: { type: GraphQLString },
        reportedAt: { type: GraphQLString }, // date
        reportedOn: { type: GraphQLString }, // time
        userID: {
            type: UserType,
            resolve(parent, args) {
                //// change this. Fetch from MongoDB
                return User.findById(parent.userID)
            }
        },
        baseParent: {
            type: BaseReportsType,
            resolve(parent, args) {
                return BaseReports.findById(parent.baseParent)
            }
        }
    })
})

const CouponsType = new GraphQLObjectType({
    name: "Coupons",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        amount: { type: GraphQLString },
        validity: { type: GraphQLString },
        assigned: { type: GraphQLBoolean },
        advertiserID: {
            type: AdvertisersType,
            resolve(parent, args) {
                return Advertisers.findById(parent.advertiserID)
            }
        },
        userID: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userID)
            }
        },
    })
})

const AdvertisementType = new GraphQLObjectType({
    name: "Advertisement",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString }, // title
        link: { type: GraphQLString }, //url
        screentime: { type: GraphQLString }, //count total screen time?
        when: { type: GraphQLBoolean }, //date and time
        advertiserID: {
            type: AdvertisersType,
            resolve(parent, args) {
                return Advertisers.findById(parent.advertiserID)
            }
        },
        outreach: { type: GraphQLInt },  // to how many users it is shown to
    })
})







const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(users, (a) => {
                //     if (a.id == args['id']) {
                //         return a
                //     }
                // });
                return User.findById(args['id'])
            }
        },
        admin: {
            type: AdminType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(users, (a) => {
                //     if (a.id == args['id']) {
                //         return a
                //     }
                // });
                return Admin.findById(args['id'])
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find();
            }
        },
        allReports: {
            type: new GraphQLList(ReportsType),
            resolve(parent, args) {
                return Report.find()
            }
        },
        admins: {
            type: new GraphQLList(AdminType),
            resolve(parent, args) {
                return Admin.find()
            }
        },
        allAdvertisers: {
            type: new GraphQLList(AdvertisersType),
            resolve(parent, args) {
                return Advertisers.find()
            }
        },
        allCoupons: {
            type: new GraphQLList(CouponsType),
            resolve(parent, args) {
                return Coupon.find()
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
        },
        getNearestCoordinate: {
            type: BaseReportsType,
            args: {
                latitude: { type: GraphQLString },
                longitude: { type: GraphQLString },
            },
            async resolve(parent, args) {
                let main = {
                    latitude: Number(args['latitude']),
                    longitude: Number(args['longitude'])
                }
                // one sec brb

                //findNearest(point, arrayOfPoints)
                let allCoords = await BaseReports.find();
                console.log(allCoords);
                let cleanedCoords = allCoords.map(c => {
                    temp = c.location.split(" ")
                    return { latitude: temp[0], longitude: temp[1] }
                })
                let res = geolib.findNearest(main, cleanedCoords);
                res = _.find(allCoords, (a) => {
                    if (a.location == `${res.latitude} ${res.longitude}`) return true
                })
                console.log("Result", res);
                return res;
            }
        },
        existingBaseCoordinate: {
            type: BaseReportsType || GraphQLBoolean,
            args: {
                latitude: { type: GraphQLString },
                longitude: { type: GraphQLString },
            },
            async resolve(parent, args) {
                let main = {
                    latitude: Number(args['latitude']),
                    longitude: Number(args['longitude'])
                }
                console.log("args", main)

                //findNearest(point, arrayOfPoints)
                let allCoords = await BaseReports.find();
                console.log(allCoords);
                if (allCoords.length == 0) {
                    return false
                }
                let cleanedCoords = allCoords.map(c => {
                    temp = c.location.split(" ")
                    return { latitude: temp[0], longitude: temp[1] }
                })

                // get the lat and long of the nearest coordinate
                let res = geolib.findNearest(main, cleanedCoords);
                res = {
                    latitude: Number(res['latitude']),
                    longitude: Number(res['longitude'])
                }
                // checking distance of this nearest coordinate with our coordinate
                let disanceBet = geolib.getDistance(main, res)
                console.log("Distance:", disanceBet)
                if (disanceBet > 1000) {
                    return false
                } else {
                    res = _.find(allCoords, (a) => {
                        if (a.location == `${res.latitude} ${res.longitude}`) return true
                    })
                    console.log("ress", res)
                    return res
                }
            }
        },
        allBaseReports: {
            type: new GraphQLList(BaseReportsType),
            resolve(parent, args) {
                return BaseReports.find();
            }
        },
        decrypt: {
            type: UserType,
            args: {
                token: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                if(args.token == "") return null;
                let res = jwt.verify(args.token, JWT_SEC);
                return User.findById(res._id);
            }
        },
        decryptAdvertiser: {
            type: AdvertisersType,
            args: {
                token: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                let res = jwt.verify(args.token, JWT_SEC);
                return Advertisers.findById(res._id);
            }
        },
        findUsingZipCode: {
            type: new GraphQLList(BaseReportsType),
            args: { zip: { type: GraphQLString } },
            async resolve(parent, args){
                console.log(args.zip)
                var regEx = new RegExp(args.zip, 'gi');

                let res = await BaseReports.find({ "address": regEx }).exec();
                console.log(res)
                return res
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

        // TODO: this is Advertiser signup
        addAdvertiser: {
            type: AdvertisersType,
            args: {
                password: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                company: { type: new GraphQLNonNull(GraphQLString) },
                website: { type: new GraphQLNonNull(GraphQLString) },
                category: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {
                if (!args.email || !args.company || !args.password || !args.website || !args.category) {
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                }
                return await Advertisers.findOne({ email: args.email }).then(async (res) => {
                    console.log(args)
                    if (res) {
                        throw new Error("An account with the same email already exist! Try Logging in!");
                    } else {
                        // hashing passwords
                        let hashedPwd = await bcrypt.hash(args.password, 15)
                        if (!hashedPwd) {
                            throw new Error('Our servers seems to be a lil busy today. Try again later?')
                        }
                        let newUser = new Advertisers({
                            email: args.email,
                            company: args.company,
                            website: args.website,
                            category: args.category,
                            password: hashedPwd,
                            coupons: [],
                            advertisments: []
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
        }, // * Advertiser signup done

        // * Advertiser login
        loginAdvertiser: {
            type: AdvertisersType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args) {
                if (!args.email || !args.password) {
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                }
                return await Advertisers.findOne({ email: args.email }).then(async (res) => {
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
        }, // * Advertiser login done
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
        }, //* login mutation done
        // * Add an advertisment
        addAdvertisment: {
            type: AdvertisementType,
            args: {
                title: { type: GraphQLString },
                link: { type: GraphQLString },
                screentime: { type: GraphQLString },
                when: { type: GraphQLString },
                advertiserID: { type: GraphQLID },
                outreach: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                let newAdvertisment = new Advertisement({
                    title: args.title,
                    link: args.link,
                    screentime: 0,
                    when: args.when,
                    advertiserID: args.advertiserID,
                    outreach: 0
                });

                let results = await newAdvertisment.save();

                // ? Saving this record in the advertisers record too
                await Advertisers.findByIdAndUpdate(args.advertiserID, {
                    $push: { "advertisments": results._id }
                })
                console.log(results);
                if (!results) {
                    throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                }
                return results
            }
        }, //* add an advertisment done

        // * add a new coupon
        addCoupon: {
            type: CouponsType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                amount: { type: new GraphQLNonNull(GraphQLString) },
                validity: { type: new GraphQLNonNull(GraphQLString) },
                assigned: { type: new GraphQLNonNull(GraphQLBoolean) },
                advertiserID: { type: new GraphQLNonNull(GraphQLID) },
            },
            async resolve(parent, args) {
                let newCoupon = new Coupon({
                    name: args.name,
                    amount: args.amount,
                    validity: args.validity,
                    assigned: args.assigned,
                    advertiserID: args.advertiserID,
                    userID: ""
                });
                let results = newCoupon.save();

                // ? Saving this record in the advertisers record too
                await Advertisers.findByIdAndUpdate(args.advertiserID, {
                    $push: { "coupons": results._id }
                })
                console.log(results);
                if (!results) {
                    throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                }
                return results
            }
        },
        addReport: {
            type: ReportsType,
            args: {
                image: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) },
                location: { type: new GraphQLNonNull(GraphQLString) },
                reportedAt: { type: new GraphQLNonNull(GraphQLString) },
                reportedOn: { type: new GraphQLNonNull(GraphQLString) },
                userID: { type: new GraphQLNonNull(GraphQLID) },
                baseParent: { type: new GraphQLNonNull(GraphQLID) }, // do analysing part on front end and get the base parent id.
                level: { type: new GraphQLNonNull(GraphQLString) } // can be beginner(1), intermediate(5), pro(10)
            },
            async resolve(parent, args) {
                if (!args.image || !args.address || !args.location || !args.userID || !args.baseParent || !args.reportedAt || !args.reportedOn) {
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                } else {
                    console.log("ARgs", args);
                    let newReport = new Report({
                        image: args.image,
                        address: args.address,
                        location: args.location,
                        userID: args.userID,
                        baseParent: args.baseParent,
                        reportedAt: args.reportedAt,
                        reportedOn: args.reportedOn
                    })
                    // saving to db
                    let results = await newReport.save();
                    let points = 0;
                    if (String(args.level).toLowerCase() == "beginner") {
                        points = 1
                    } else if (String(args.level).toLowerCase() == "intermediate") {
                        points = 5;
                    } else {
                        points = 10;
                    }

                    // adding to the base reports data
                    await BaseReports.findByIdAndUpdate(
                        results.baseParent,
                        {
                            $push: { "similar": results._id },
                            $inc: { "noOfReports": points }
                        }
                    );

                    // adding to users data
                    await User.findByIdAndUpdate(args.userID, {
                        $push: { "reports": results._id }
                    })
                    if (!results) {
                        throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                    }
                    return results
                }
            }
        }, //depending mutation done
        addBaseReport: {
            type: BaseReportsType,
            args: {
                image: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) },
                location: { type: new GraphQLNonNull(GraphQLString) },
                reportedAt: { type: new GraphQLNonNull(GraphQLString) },
                reportedOn: { type: new GraphQLNonNull(GraphQLString) },
                userID: { type: new GraphQLNonNull(GraphQLID) },
                noOfReports: { type: GraphQLNonNull(GraphQLInt) },
            },
            async resolve(parent, args) {
                if (!args.image || !args.address || !args.location || !args.userID || !args.reportedAt || !args.reportedOn || !args.noOfReports) {
                    console.log("Args", args)
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                } else {
                    let newReport = new BaseReports({
                        image: args.image,
                        address: args.address,
                        location: args.location,
                        userID: args.userID,
                        baseParent: args.baseParent,
                        reportedAt: args.reportedAt,
                        reportedOn: args.reportedOn,
                        noOfReports: args.noOfReports,
                        resolved: false,
                        similar: []
                    })
                    // saving to db
                    let results = await newReport.save();
                    console.log(results);

                    // adding to users data
                    await User.findByIdAndUpdate(args.userID, {
                        $push: { "baseReports": results._id }
                    })
                    if (!results) {
                        throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                    }
                    return results
                }
            }
        }
    }
})

// -------- Schema --------- //
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})