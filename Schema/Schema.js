const express = require('express');
const graphql = require('graphql');
const _ = require('lodash');
const crypto = require('crypto')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// https://www.figma.com/file/4bAC5AKUM1VmxyAaRhiLrs/BETON-ER-Diagram?node-id=0%3A1

const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} = graphql

// dummy data
let users = [
    { id: "1", name: "Aajinkya", email: "a@gmail.com", password: "harrypotter123", address: "oshiwara", DOB: "12/03/2003" },
   { id: "2", name: "Pratit", email: "p@gmail.com", password: "bigronnie", address: "vakola", DOB: "09/01/2004" },
  {  id: "3", name: "Miheer", email: "m@gmail.com", password: "lewishamilton", address: "lokhandwala", DOB: "31/12/2000" },
  { id: "4", name: "George", email: "g@gmail.com", password: "merc", address: "london", DOB: "06/05/2006" },
  {id: "5", name: "Max", email: "x@gmail.com", password: "redbull", address: "haiti", DOB: "1/01/2008" },
  {id: '6', name: "Nick", email: "n@gmail.com", password: "talman", address: "miami", DOB: "30/09/202" }
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
    {id: "10", name: "scam200", amount: "200", validity: "20/12/2021" },
    {id: "9", name: "disc100", amount: "100", validity: "02/01/2021" },
    {id: "8", name: "sneak69", amount: "69", validity: "09/08/2021" },
    {id: "7", name: "report420", amount: "42", validity: "26/11/2021" },

] 

// let reports = [
//     {address: "address1", image:"google.com", location:"182.22.5"},
//{address: "address2", image:"google1.com", location:"183.12.6"},
// {address: "address3", image:"google2.com", location:"183.23.1"},
// {address: "address4", image:"google3.com", location:"152.72.4"},
// ]
    


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
    })
});

const AdminType = new GraphQLObjectType({
    name: "Admin",
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});

const Contractors = new GraphQLObjectType({
    name: "Contractor",
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        address: { type: GraphQLString },
        name: { type: GraphQLString }
    })
});




const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return _.find(users, (a)=>{
                    if(a.id == args['id']){
                        return a
                    }
                });
            }
        },
        admin: {
            type: AdminType,
            args: { id: { type:GraphQLID } },
            resolve(parent, args){
                return _.find(users, (a)=>{
                    if(a.id == args['id']){
                        return a
                    }
                });
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return users;
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
            async resolve(parent, args){
                if(!args.email || !args.name || !args.password || !args.dob || !args.address){
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                }
                let presentOnes = _.find(users, (a)=>{
                    if(a.email == args.email){
                        return true
                    }
                })
                if(presentOnes){
                    throw new Error("An account with the same email already exist! Try Logging in!");
                }else{
                    // hashing passwords
                    let hashedPwd = await bcrypt.hash(args.password, 15)
                    if(!hashedPwd){
                        throw new Error('Our servers seems to be a lil busy today. Try again later?')
                    }
                    let newUser = {
                        id: Math.random(),
                        email: args.email,
                        name: args.name,
                        address: args.address,
                        dob: args.dob,
                        password: hashedPwd
                    }
                    users.push(newUser);
                    console.log("Signup Successful: ", newUser)
                    return newUser;
                }

            }
        }, //add user mutation
        login: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args){
                if(!args.email || !args.password){
                    // console.log("error?")
                    throw new Error("Kindly provide all details");
                }
                let result = _.find(users, (a)=>{
                    if(a.email == args.email){
                        return a;
                    }
                })
                if(!result){
                    throw new Error("Yayzow! We can't find an account with that email. You gotta register first, you know ¯\_(ツ)_/¯");
                }
                // checking the password comparison
                let didMatch = await bcrypt.compare(args.password, result.password)
                if(!didMatch){
                    throw new Error("Invalid Email and Password combination :(")
                }
                return result;
            }
        }, //login mutation done
    }
})

// -------- Schema --------- //
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})