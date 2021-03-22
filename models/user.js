const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    profile: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    coupons: [{
        type: ObjectId,
        ref: "Coupons"
    }],
    dob: {
        type: String,
        require: true
    },
    reports: [{
        type: ObjectId,
        ref: "Reports"
    }],
    baseReports: [{
        type: ObjectId,
        ref: "BaseReports"
    }],
    karma: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model("User", userSchema);