const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const reportsSchema = new mongoose.Schema({
    location:{
        type:String,
        require:true
    },
    imageLink :{
        type:String,
        require:true,
    },
    address:{
        type: String,
        require: true
    },
    resolved:{
        type: Boolean,
        require: true
    },
    noOfReports:{
        type: Number,
        require: true
    },
});

module.exports = mongoose.model("Reports", reportsSchema);