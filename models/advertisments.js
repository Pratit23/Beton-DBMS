const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const couponsSchema = new mongoose.Schema({
    id:{
        type: String,
        require:true
    },
    title :{
        type: String,
        require:true,
    },
    link :{
        type: String,
        require:true,
    },
    screentime:{
        type: Number,
        require: true
    },
    when: {
        type: String,
        require: true
    },
    advertiserID: {
        type: ObjectId,
        ref: "Advertisers"
    },
    outreach: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model("Advertisments", couponsSchema);