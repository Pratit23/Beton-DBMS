const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const tenderSchema = new mongoose.Schema({
    address: {
        type: String,
        require: true
    },
    endDate: {
        type: String,
        require: true
    },
    source: {
        type: String,
        require: true
    },
    destination: {
        type: String,
        require: true,
    },
    baseReports: [{
        type: ObjectId,
        ref: "BaseReports"
    }],
    bids: [{
        type: ObjectId,
        ref: "Bids"
    }],
    bidsBy: [{
        type: ObjectId,
        ref: "User"
    }],
    baseReports: [{
        type: ObjectId,
        ref: "BaseReports"
    }],
    isAssigned: {
        type: Boolean,
        require: true
    },
    isCompleted: {
        type: Boolean,
        require: true
    },
    amount: {
        type: String,
        require: true
    },
    contractorId: {
        type: String,
        ref: "Users",
        require: true
    },
    nameOfWork: {
        type: String,
        require: true
    },
    encoded: [{
        lat: Number,
        lng: Number
    }]
});

module.exports = mongoose.model("Tenders", tenderSchema);