const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const baseReportsSchema = new mongoose.Schema({
    location:{
        type:String,
        require:true
    },
    userID:{
        type:String,
        require:true,
        ref:'User'
    },
    image :{
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
    reportedAt: {
        type: String,
        require: true
    },
    reportedOn: {
        type: String,
        require: true
    },
    similar: [{
        type: ObjectId,
        require: true,
        ref: "Reports"
    }],
});

module.exports = mongoose.model("BaseReports", baseReportsSchema);