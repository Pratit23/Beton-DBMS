const _ = require('lodash');
// const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./Schema/Schema');

const app = express();

app.use(cors());
app.use( bodyParser.json());

// graphql route
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));


// listening on port
PORT = process.env.PORT || 1000;
const server = app.listen(PORT, ()=>{
    console.log("Listening to requests on port", PORT);
});