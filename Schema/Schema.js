const express = require('express');
const graphql = require('graphql');
const _ = require('lodash');

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

// -------- Schema --------- //
module.exports = new GraphQLSchema({
    query: RootQuery
})