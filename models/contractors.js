const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const contractorsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true,
    },
    bidsMade: [{
        type: ObjectId,
        ref: "Bids"
    }],
    address:{
        type: String,
        require: true
    },
    isVerified: {
        type: Boolean,
        require: true
    },
    profile: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Contractors", contractorsSchema);