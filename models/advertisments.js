const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const couponsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    screentime: {
        type: Number, // * milliseconds
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
        type: Number, // * incremental 1
        require: true
    }
});

module.exports = mongoose.model("Advertisments", couponsSchema);