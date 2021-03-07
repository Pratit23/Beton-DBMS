const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const accReport = new mongoose.Schema({
    location:{
        type:String,
        require:true
    },
    userID:{
        type: ObjectId,
        require:true,
        ref:'User'
    },
    reportedAt: {
        type: String,
        require: true
    },
    reportedOn: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("AccReport", accReport);