const express = require('express');
const graphql = require('graphql');
const _ = require('lodash');
const crypto = require('crypto')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SEC, ADMINPASS } = require('../keys/keys');
const geolib = require('geolib');
const User = require('../models/user')
const Admin = require('../models/admin')
const Advertisers = require('../models/advertisers')
const Tenders = require('../models/Tenders')
const Contractors = require('../models/contractors')
const Bids = require('../models/Bids')
const Coupon = require('../models/coupons')
const Advertisement = require('../models/advertisments')
const FeedbackReport = require('../models/FeedbackReport')
const AccReport = require('../models/AccReport')
const Report = require('../models/reports')
const BaseReports = require('../models/baseReports');
const Polyutil = require('polyline-encoded');
const { resolve } = require('path');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
// https://www.figma.com/file/4bAC5AKUM1VmxyAaRhiLrs/BETON-ER-Diagram?node-id=0%3A1

const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLFloat,
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
        profile: { type: GraphQLString },
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
        karma: { type: GraphQLInt }
    })
});

const AdminType = new GraphQLObjectType({
    name: "Admin",
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});

const TendersType = new GraphQLObjectType({
    name: "Tenders",
    fields: () => ({
        id: { type: GraphQLID },
        address: { type: GraphQLString },
        source: { type: GraphQLString },
        destination: { type: GraphQLString },
        baseReports: {
            type: new GraphQLList(BaseReportsType),
            async resolve(parent, args) {
                return await BaseReports.find({
                    _id: {
                        $in: parent.baseReports
                    }
                })
            }
        },
        isAssigned: { type: GraphQLBoolean },
        isCompleted: { type: GraphQLBoolean },
        contractorId: {
            type: ContractorsType || GraphQLString,
            async resolve(parent, args) {
                if (parent.contractorId == "") return;
                return await Contractors.findById(parent.contractorId)
            }
        },
        amount: { type: GraphQLString },
        endDate: { type: GraphQLString },
        bids: {
            type: new GraphQLList(BidsType),
            async resolve(parent, args) {
                return await Bids.find({
                    _id: {
                        $in: parent.bids
                    }
                })
            }
        },
        bidsBy: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                return User.find({
                    _id: {
                        $in: parent.bidsBy
                    }
                })
            }
        },
        nameOfWork: { type: GraphQLString },
        encoded: {
            type: new GraphQLList(encCoords),
            async resolve(parent, args) {
                return parent.encoded;
            }
        }
    })
});

const encCoords = new GraphQLObjectType({
    name: "encCoords",
    fields: () => ({
        lat: { type: GraphQLFloat },
        lng: { type: GraphQLFloat },
    })
})
const encCoordsInput = new GraphQLInputObjectType({
    name: "encCoordsInput",
    fields: () => ({
        lat: { type: GraphQLFloat },
        lng: { type: GraphQLFloat },
    })
})

const BidsType = new GraphQLObjectType({
    name: "Bids",
    fields: () => ({
        id: { type: GraphQLID },
        amount: { type: GraphQLString },
        contractorId: {
            type: ContractorsType,
            async resolve(parent, args) {
                return await Contractors.findById(parent.contractorId)
            }
        },
        bidedAt: { type: GraphQLString },   // time
        bidedOn: { type: GraphQLString },   // date
        tenderId: {
            type: TendersType,
            async resolve(parent, args) {
                return await Tenders.findById(parent.tenderId);
            }
        }
    })
})

const ContractorsType = new GraphQLObjectType({
    name: "Contractor",
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        address: { type: GraphQLString },
        name: { type: GraphQLString },
        isVerified: { type: GraphQLBoolean },
        bidsMade: {
            type: new GraphQLList(BidsType),
            async resolve(parent, args) {
                return await Bids.find({
                    _id: {
                        $in: parent.bidsMade
                    }
                })
            }
        },
        token: { type: GraphQLString },
        profile: { type: GraphQLString }
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
            async resolve(parent, args) {
                return await Coupon.find({
                    _id: {
                        $in: parent.coupons
                    }
                })
            }
        },
        isVerified: { type: GraphQLBoolean },
        advertisments: {
            type: new GraphQLList(AdvertisementType),
            async resolve(parent, args) {
                // let temp = []
                // parent.advertisments.forEach(y => {
                //     let test = Advertisement.findById(y);
                //     temp.push(test)
                // })
                // return temp
                return await Advertisement.find({
                    _id: {
                        $in: parent.advertisments
                    }
                })
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
const FeedbackReportType = new GraphQLObjectType({
    name: "FeedbackReport",
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
        noOfReports: { type: GraphQLInt }
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
});


const InputAccReport = new GraphQLInputObjectType({
    name: "InputAccReport",
    fields: () => ({
        location: { type: GraphQLString },
        userID: { type: GraphQLID },
        reportedAt: { type: GraphQLString },
        reportedOn: { type: GraphQLString },
    })
})


const CouponsInput = new GraphQLInputObjectType({
    name: "CouponsInput",
    fields: () => ({
        name: { type: GraphQLString },
        amount: { type: GraphQLString },
        validity: { type: GraphQLString }
    })
});

const LocationObject = new GraphQLObjectType({
    name: "Location",
    fields: () => ({
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString }
    })
})


const AccReports = new GraphQLObjectType({
    name: "AccReports",
    fields: () => ({
        id: { type: GraphQLID },
        location: { type: GraphQLString },
        userID: {
            type: UserType,
            async resolve(parent, args) {
                return await User.findById(parent.userID);
            }
        },
        reportedAt: { type: GraphQLString }, // date
        reportedOn: { type: GraphQLString }  // time
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
            type: UserType || GraphQLString,
            resolve(parent, args) {
                if (parent.userID == "") return "-";
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
        image: { type: GraphQLString }, //image url
        screentime: { type: GraphQLInt }, //count total screen time?
        when: { type: GraphQLString }, //date and time
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
        allContractors: {
            type: new GraphQLList(ContractorsType),
            resolve(parent, args) {
                return Contractors.find()
            }
        },
        allCoupons: {
            type: new GraphQLList(CouponsType),
            resolve(parent, args) {
                return Coupon.find()
            }
        },
        allAccReports: {
            type: new GraphQLList(AccReports),
            async resolve(parent, args) {
                return await AccReport.find();
            }
        },
        // getReportsNearMe: {
        //     type: new GraphQLList(ReportsType),
        //     args: {
        //         latitude: { type: GraphQLString },
        //         longitude: { type: GraphQLString },
        //     },
        //     resolve(parent, args) {
        //         let main = {
        //             latitude: Number(args['latitude']),
        //             longitude: Number(args['longitude'])
        //         }
        //         let data = reports.filter(r => {
        //             let coords = r.location.split(" ");
        //             let tempPoint = {
        //                 latitude: Number(coords[0]),
        //                 longitude: Number(coords[1])
        //             }
        //             let disanceBet = geolib.getDistance(main, tempPoint)
        //             console.log("Distance:", disanceBet)
        //             if (disanceBet > 5000) {
        //                 return false
        //             } else {
        //                 return true
        //             }
        //         })
        //         return data;
        //     }
        // },
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
                let allCoords = await BaseReports.find({ "resolved": false });
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
                if (args.token == "" || args.token == "undefined") return null;
                console.log(args.token)
                let res = jwt.verify(args.token, JWT_SEC);
                return User.findById(res._id);
            }
        },
        allMyReports: {
            type: new GraphQLList(ReportsType || BaseReportsType),
            args: {
                token: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args) {
                if (!args.token) return [];
                let res = jwt.verify(args.token, JWT_SEC);
                let user = User.findById(res._id);
                let id = (await user)._id;
                let temp1 = await Report.find({ "userID": id });
                let temp2 = await BaseReports.find({ "userID": id });
                return [...temp1, ...temp2];
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
                if (args.token == "") return null;
                let res = jwt.verify(args.token, JWT_SEC);
                return Advertisers.findById(res._id);
            }
        },
        decryptContractor: {
            type: ContractorsType,
            args: {
                token: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                if (args.token == "") return null;
                let res = jwt.verify(args.token, JWT_SEC);
                return Contractors.findById(res._id);
            }
        },
        findUsingZipCode: {
            type: new GraphQLList(BaseReportsType),
            args: { zip: { type: GraphQLString } },
            async resolve(parent, args) {
                console.log(args.zip)
                var regEx = new RegExp(args.zip, 'gi');

                let res = await BaseReports.find({ "address": regEx }).exec();
                console.log(res)
                return res
            }
        },
        allMyAds: {
            type: new GraphQLList(AdvertisementType),
            args: { token: { type: GraphQLString } },
            async resolve(parent, args) {
                if (args.token == "") return null;
                let res = jwt.verify(args.token, JWT_SEC);
                return await Advertisement.find({ "advertiserID": res._id });
            }
        },
        isOnLine: {
            type: new GraphQLList(LocationObject),
            args: {
                // location: { type: GraphQLString },
                encoded: { type: new GraphQLList(GraphQLString) }
            },
            async resolve(parent, args) {
                var noOfPotholes = 0
                console.log(args)
                var enc = args.encoded.map((e, key) => {
                    // console.log("E: ", e, typeof (e))
                    return Polyutil.decode(e)
                })

                console.log("Enc1", enc)
                enc = enc.map(e => {
                    var objs = e.map(function (x) {
                        return {
                            latitude: x[0],
                            longitude: x[1]
                        };
                    }); 3
                    return objs
                })
                enc = [].concat.apply([], enc);
                console.log("Enc", enc)
                // return true;
                var res = await BaseReports.find();
                console.log(res)
                let allResults = [];
                res.forEach(r => {
                    let temp = {
                        latitude: Number(r.location.split(" ")[0]),
                        longitude: Number(r.location.split(" ")[1])
                    }
                    console.log("temp", temp)
                    let awaiting = geolib.findNearest(temp, enc);
                    let temp_awaiting = {
                        latitude: Number(awaiting['latitude']),
                        longitude: Number(awaiting['longitude'])
                    }
                    console.log("temp-awiting", temp_awaiting)
                    // checking distance of this nearest coordinate with our coordinate
                    let disanceBet = geolib.getDistance(temp, temp_awaiting)
                    console.log("Distance:", disanceBet)
                    if (disanceBet < 200) {
                        console.log("The pothole is on the path")
                        allResults.push(temp_awaiting);
                    } else {
                        console.log("Pothole not on the path")
                    }
                })
                return allResults
            }
        },
        isOnLinev2: {
            type: new GraphQLList(GraphQLString),
            args: {
                // location: { type: GraphQLString },
                encoded: { type: new GraphQLList(GraphQLString) }
            },
            async resolve(parent, args) {
                var noOfPotholes = 0
                console.log(args)
                var enc = args.encoded.map((e, key) => {
                    // console.log("E: ", e, typeof (e))
                    return Polyutil.decode(e)
                })

                console.log("Enc1", enc)
                enc = enc.map(e => {
                    var objs = e.map(function (x) {
                        return {
                            latitude: x[0],
                            longitude: x[1]
                        };
                    }); 3
                    return objs
                })
                enc = [].concat.apply([], enc);
                console.log("Enc", enc)
                // return true;
                var res = await BaseReports.find();
                console.log(res)
                let allResults = [];
                res.forEach(r => {
                    let temp = {
                        latitude: Number(r.location.split(" ")[0]),
                        longitude: Number(r.location.split(" ")[1])
                    }
                    console.log("temp", temp)
                    let awaiting = geolib.findNearest(temp, enc);
                    let temp_awaiting = {
                        latitude: Number(awaiting['latitude']),
                        longitude: Number(awaiting['longitude'])
                    }
                    console.log("temp-awiting", temp_awaiting)
                    // checking distance of this nearest coordinate with our coordinate
                    let disanceBet = geolib.getDistance(temp, temp_awaiting)
                    console.log("Distance:", disanceBet)
                    if (disanceBet < 200) {
                        console.log("The pothole is on the path")
                        allResults.push(r._id);
                    } else {
                        console.log("Pothole not on the path")
                    }
                })
                return allResults
            }
        },
        getRandomAd: {
            type: AdvertisementType,
            async resolve(parent, args) {
                let res = await Advertisement.aggregate([{
                    $sample: { size: 1 }
                }])
                res[0]["id"] = res[0]["_id"];
                return res[0];
            }
        },
        allFeedbackReports: {
            type: new GraphQLList(FeedbackReportType),
            async resolve(parent, args) {
                return await FeedbackReport.find();
            }
        },
        getSpecificReport: {
            type: BaseReportsType,
            args: {
                id: { type: GraphQLString }
            },
            async resolve(parent, args) {
                console.log(args.id);
                return await BaseReports.findById(args.id);
            }
        },
        allTenders: {
            type: new GraphQLList(TendersType),
            async resolve(parent, args) {
                return await Tenders.find();
            }
        },
        getSpecificTender: {
            type: TendersType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            async resolve(parent, args) {
                return await Tenders.findById(args.id);
            }
        },
        availableTenders: {
            type: new GraphQLList(TendersType),
            args: {
                id: { type: GraphQLID }
            },
            async resolve(parent, args) {
                if (args.id == "") return null;
                let res = jwt.verify(args.id, JWT_SEC);
                return await Tenders.find({ "isAssigned": false, "bidsBy": { $nin: [res._id] } });
            }
        },
        myTenders: {
            type: new GraphQLList(TendersType),
            args: {
                id: { type: GraphQLID }
            },
            async resolve(parent, args) {
                if (args.id == "") return null;
                let res = jwt.verify(args.id, JWT_SEC);
                return await Tenders.find({ "contractorId": res._id, "isCompleted": false });
            }
        },
        quotedTenders: {
            type: new GraphQLList(TendersType),
            args: {
                id: { type: GraphQLID }
            },
            async resolve(parent, args) {
                if (args.id == "") return null;
                let res = jwt.verify(args.id, JWT_SEC);
                return await Tenders.find({ "isAssigned": false, "bidsBy": { $in: [res._id] } });
            }
        },
        pastTenders: {
            type: new GraphQLList(TendersType),
            args: {
                id: { type: GraphQLID }
            },
            async resolve(parent, args) {
                if (args.id == "") return null;
                let res = jwt.verify(args.id, JWT_SEC);
                return await Tenders.find({ "isAssigned": true, "contractorId": res._id, "isCompleted": true });
            }
        },

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
                profile: { type: GraphQLString },
                password: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                dob: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {
                if (!args.email || !args.name || !args.password || !args.dob || !args.address || !args.profile) {
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
                            reports: [],
                            karma: 1,
                            profile: args.profile
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
        adminLogin: {
            type: GraphQLString,
            args: {
                password: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {
                if (!args.email || !args.password) {
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                }
                if (args.email == "admin@beton.com") {
                    if (ADMINPASS == args.password) {
                        const token = jwt.sign({ _id: ADMINPASS }, JWT_SEC);
                        return token;
                    } else {
                        throw new Error("Invalid email and password combination!");
                    }

                }
            }
        },
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
                            advertisments: [],
                            isVerified: false
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
                    let isVerified = res.isVerified;
                    if (isVerified == true) {
                        const token = jwt.sign({ _id: res._id }, JWT_SEC);
                        res['token'] = token;
                        return res;
                    } else {
                        return;
                    }
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
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                link: { type: GraphQLString },
                image: { type: GraphQLString },
                when: { type: GraphQLString },
                advertiserID: { type: GraphQLID },
            },
            async resolve(parent, args) {
                console.log(args)
                if (!args.title || !args.link || !args.image || !args.when || !args.advertiserID) {
                    throw new Error("Kindly provide all details");
                }
                let newAdvertisment = new Advertisement({
                    title: args.title,
                    link: args.link,
                    image: args.image,
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

        // * add contractor
        addContractor: {
            type: ContractorsType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
                address: { type: GraphQLString },
                name: { type: GraphQLString },
                profile: { type: GraphQLString },
            },
            async resolve(parent, args) {
                if (!args.email || !args.password || !args.name || !args.address || !args.profile) {
                    throw new Error("Kindly provide all details");
                }
                // hashing passwords
                let hashedPwd = await bcrypt.hash(args.password, 15)
                if (!hashedPwd) {
                    throw new Error('Our servers seems to be a lil busy today. Try again later?')
                }
                let newContractor = new Contractors({
                    email: args.email,
                    password: hashedPwd,
                    address: args.address,
                    name: args.name,
                    bidsMade: [],
                    isVerified: false,
                    profile: args.profile
                });
                let results = await newContractor.save();
                console.log(results);
                if (!results) {
                    throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                }
                return results
            }
        }, // * add contractor done
        // * login contractor
        loginContractor: {
            type: ContractorsType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            async resolve(parent, args) {
                if (!args.email || !args.password) {
                    throw new Error("Kindly provide all details");
                }
                return await Contractors.findOne({ email: args.email }).then(async (res) => {
                    if (!res) {
                        throw new Error("Yayzow! We can't find an account with that email. You gotta register first, you know ¯\_(ツ)_/¯");
                    }
                    // checking the password comparison
                    let didMatch = await bcrypt.compare(args.password, res.password)
                    if (!didMatch) {
                        throw new Error("Invalid Email and Password combination :(")
                    }
                    let isVerified = res.isVerified;
                    if (isVerified == true) {
                        const token = jwt.sign({ _id: res._id }, JWT_SEC);
                        res['token'] = token;
                        return res;
                    } else {
                        return;
                    }
                })
            }
        }, // * login contractor done
        toggleActivation: {
            type: GraphQLBoolean,
            args: {
                id: { type: GraphQLID },
                type: { type: GraphQLString }
            },
            async resolve(parent, args) {
                // console.log(args);
                if (args.type == "advertiser") {
                    let result = await Advertisers.findById(args.id);
                    let fin = await Advertisers.findByIdAndUpdate(args.id, {
                        "isVerified": !result["isVerified"]
                    })
                    if (!fin) {
                        return false;
                    }
                    return true;
                } else {
                    let result = await Contractors.findById(args.id);
                    let fin = await Contractors.findByIdAndUpdate(args.id, {
                        "isVerified": !result["isVerified"]
                    })
                    if (!fin) {
                        return false;
                    }
                    return true;
                }
            }
        },
        // * add a new coupon
        addCoupon: {
            type: GraphQLBoolean,
            args: {
                advertiserID: { type: new GraphQLNonNull(GraphQLID) },
                coupons: { type: new GraphQLList(CouponsInput) }
            },
            async resolve(parent, args) {
                // ? Looping through all coupons
                if (args.coupons.length !== 0) {
                    let coco = [];
                    args.coupons.forEach(async (c) => {
                        if (!c.name || !c.amount || !c.validity || c.name == "" || c.amount == "" || c.validity == "") {
                            // * do nothing lmao
                        } else {
                            let temp = {
                                insertOne: {
                                    "document": {
                                        name: c.name,
                                        amount: c.amount,
                                        validity: c.validity,
                                        assigned: false,
                                        advertiserID: args.advertiserID,
                                        userID: []
                                    }
                                }
                            }
                            coco.push(temp);
                        }
                    })
                    // * pushing all the items to the db
                    let res = await Coupon.bulkWrite(coco);
                    console.log("resulty boahhh", res);
                    let ids = Object.values(res.insertedIds);
                    if (!res) {
                        // throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                        return false
                    }
                    // ? Saving this record in the advertisers record too
                    let results = await Advertisers.findByIdAndUpdate(args.advertiserID, {
                        $push: { "coupons": ids }
                    })
                    console.log(results);
                    if (!results) {
                        return false
                        // throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                    }
                    return true;
                }
            }
        },
        // * adding AccReport
        AddAccReport: {
            type: GraphQLBoolean,
            args: {
                coords: { type: new GraphQLList(InputAccReport) }
            },
            async resolve(parent, args) {
                if (args.coords == []) return false;
                let newItems = args.coords.map(c => {
                    let temp = {
                        insertOne: {
                            "document": {
                                ...c
                            }
                        }
                    }
                    return temp;
                });
                let result = await AccReport.bulkWrite(newItems);
                console.log("resulty boahhh", result);
                if (!result) {
                    // throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                    return false;
                }
                return true;
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
                karma: { type: new GraphQLNonNull(GraphQLInt) } // can be beginner(1), intermediate(5), pro(10)
            },
            async resolve(parent, args) {
                if (!args.image || !args.address || !args.location || !args.userID || !args.baseParent || !args.reportedAt || !args.reportedOn) {
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                } else {
                    console.log("ARgs", args);
                    let basey = await BaseReports.findById(args.baseParent);
                    if (basey['userID'] == args.userID && basey['resolved'] == false) {
                        throw new Error("Uh oh! You can't report twice in an area")
                    }
                    let decision = false;
                    console.log(basey)
                    basey['similar'].forEach(async function (b, ind) {
                        let temp = await Report.findById(b);
                        console.log("tt", temp);
                        console.log(String(temp['userID']))
                        console.log(String(args.userID))
                        console.log(String(temp['userID']).localeCompare(String(args.userID)) == 0)
                        if (String(temp['userID']).localeCompare(String(args.userID)) == 0) {
                            decision = true;
                        }
                        if (ind == basey['similar'].length - 1) {
                            if (decision == true) {
                                throw new Error("Uh oh! You can't report twice in an area");
                            } else {
                                console.log("Diecece", decision);
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
                                // ? <25 - Beginner
                                // ? <65 - Intermediate
                                // ? >65 - Pro
                                if (args.karma <= 25) {
                                    points = 1
                                } else if (args.karma <= 65) {
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
                                    $push: { "reports": results._id },
                                    $inc: { "karma": 1 }
                                })
                                if (!results) {
                                    throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                                }
                                return results
                            }
                        }
                    });
                }
            }
        }, // *depending mutation done
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
                        $push: { "baseReports": results._id },
                        $inc: { "karma": 1 }
                    })
                    if (!results) {
                        throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                    }
                    return results
                }
            }
        }, // * addBaseReport done
        addFeedbackReport: {
            type: FeedbackReportType,
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
                    let newReport = new FeedbackReport({
                        image: args.image,
                        address: args.address,
                        location: args.location,
                        userID: args.userID,
                        baseParent: args.baseParent,
                        reportedAt: args.reportedAt,
                        reportedOn: args.reportedOn,
                        noOfReports: args.noOfReports,
                    })
                    // saving to db
                    let results = await newReport.save();
                    console.log(results);

                    // adding to users data
                    if (!results) {
                        throw new Error('Uh-oh! This wasn\'t meant to happen.Make sure your internet connection is strong.')
                    }
                    return results
                }
            }
        }, // * addFeedbackReport done
        deleteThisAdd: {
            type: GraphQLBoolean,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                advertiserID: { type: new GraphQLNonNull(GraphQLID) }
            },
            async resolve(parent, args) {
                // remove ad from Advertiser
                console.log("args", args)
                let update = await Advertisers.findByIdAndUpdate(args.advertiserID, {
                    $pull: {
                        "advertisments": args.id
                    }
                });
                let res = await Advertisement.findByIdAndDelete(args.id);
                if (res) {
                    return true;
                }
                return false;
            }
        }, // * delete add done
        updateAdd: {
            type: AdvertisementType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                screentime: { type: new GraphQLNonNull(GraphQLInt) },
            },
            async resolve(parent, args) {
                return await Advertisement.findByIdAndUpdate(args.id, {
                    $inc: { "outreach": 1, "screentime": args.screentime }
                });
            }
        }, // * update add done here
        // * add tender
        addTender: {
            type: TendersType,
            args: {
                address: { type: GraphQLString },
                source: { type: GraphQLString },
                destination: { type: GraphQLString },
                baseReports: { type: new GraphQLList(GraphQLID) },
                amount: { type: GraphQLString },
                nameOfWork: { type: GraphQLString },
                endDate: { type: GraphQLString },
                encoded: { type: new GraphQLList(encCoordsInput) }
            },
            async resolve(parent, args) {
                console.log("Args: ", args)
                if (!args.address || !args.source || !args.destination || !args.baseReports || !args.amount || !args.nameOfWork || !args.encoded) {
                    throw new Error("Kindly provide all details");
                }
                let obj = new Tenders({
                    address: args.address,
                    source: args.source,
                    destination: args.destination,
                    amount: args.amount,
                    nameOfWork: args.nameOfWork,
                    isAssigned: false,
                    isCompleted: false,
                    contractorId: "",
                    bids: [],
                    baseReports: args.baseReports,
                    bidsBy: [],
                    encoded: args.encoded,
                    endDate: args.endDate
                });
                let fin = await obj.save();
                if (!fin) {
                    throw new Error("Something unexpected happened!")
                }
                return fin;
            }
        }, // * add tender done
        // !assign tender
        assignTender: {
            type: TendersType,
            args: {
                tid: { type: new GraphQLNonNull(GraphQLID) },
                cid: { type: new GraphQLNonNull(GraphQLID) },
            },
            async resolve(parent, args) {
                return await Tenders.findByIdAndUpdate(args.tid, {
                    "isAssigned": true,
                    "contractorId": args.cid
                });
            }
        }, //! assgin tender done
        addBids: {
            type: BidsType,
            args: {
                amount: { type: GraphQLString },
                bidedAt: { type: GraphQLString },   // time
                bidedOn: { type: GraphQLString },   // date
                contractorId: { type: GraphQLID },
                tenderId: { type: GraphQLID },
            },
            async resolve(parent, args) {
                if (!args.amount || !args.bidedAt || !args.bidedOn || !args.contractorId || !args.tenderId) {
                    throw new Error("Kindly provide all details!")
                }
                let BidObj = new Bids({
                    amount: args.amount,
                    bidedAt: args.bidedAT,
                    bidedOn: args.bidedOn,
                    contractorId: args.contractorId,
                    tenderId: args.tenderId
                });
                // saving bid
                let res = await BidObj.save();
                if (!res) {
                    throw new Error("Something unexpected happen!")
                }

                // updating contractor
                let ressy = await Contractors.findByIdAndUpdate(args.contractorId, {
                    $push: { "bidsMade": res._id }
                })

                // adding to tender's array
                let res2 = await Tenders.findByIdAndUpdate(args.tenderId, {
                    $push: { "bids": res._id, "bidsBy": args.contractorId }
                });
                if (!res2) {
                    throw new Error("Something unexpected happen!")
                }
                return res;
            }
        }, // ! add bids done!
        completeTender: {
            type: GraphQLBoolean,
            args: {
                tid: { type: new GraphQLNonNull(GraphQLID) },
                contri: { type: new GraphQLList(GraphQLID) }
            },
            async resolve(parent, args) {
                let res = await Tenders.findByIdAndUpdate(args.tid, {
                    "isCompleted": true
                });
                console.log("yes res", res);
                let baby = await BaseReports.updateMany({
                    _id: {
                        $in: res.baseReports
                    }
                }, {
                    "resolved": true
                });
                console.log("basey baby", baby)
                let error = []
                return await args.contri.forEach(async (c, index) => {
                    let coup = await Coupon.findOneAndUpdate({ "assigned": false }, {
                        "assigned": true,
                        "userID": c
                    }).then(async (yea) => {
                        console.log("id", yea._id);
                        let user = await User.findByIdAndUpdate(c, {
                            $push: {
                                "coupons": yea._id
                            }
                        }).then((uu) => {
                            console.log("user:", uu._id);
                            console.log(uu);
                            console.log(!uu);
                            if (!uu) {
                                console.log("here")
                                error.push(index)
                            }
                        })
                    });
                    if (index == args.contri.length - 1) {
                        console.log("in last. showing error", error)
                        console.log("chal ja yaar", error.length)
                        console.log(error.length == 0)
                        if (error.length == 0) {
                            return true;
                        } else {
                            throw new Error("Oopsie. Something went wrong. Please try again later.")
                        }
                    }
                })
                // args.contri.forEach(async (c, index) => {
                //     console.log(c);
                //     let res = await User.findById(c);
                //     console.log("suerrr", res);
                // })
            }
        }, // !complete tender done
        refreshCoupon: {
            type: GraphQLBoolean,
            async resolve(parent, args) {
                let res = await Coupon.updateMany({
                    "assigned": false,
                    $set: {
                        "userID": []
                    }
                })
                console.log(res);
                if (!res) {
                    return false;
                }
                return true;
            }
        }
    }
})


// -------- Schema --------- //
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})