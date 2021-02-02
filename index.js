const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./Schema/Schema');
const { URI } = require('./keys/dev')

const app = express();

app.use(cors());
app.use( bodyParser.json());

// having options to connect to the db
options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}

// connecting to the db
mongoose.connect(URI, options);

// adding event listeners
mongoose.connection.once('connected', ()=>{
    console.log("Connected to the Database!");
}).on('error', ()=>{
    console.log("Error connecting to the Database!");
});


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