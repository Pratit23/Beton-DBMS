const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const FeedbackReports = new mongoose.Schema({
    location: {
        type: String,
        require: true
    },
    userID: {
        type: String,
        require: true,
        ref: 'User'
    },
    image: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true
    },
    noOfReports: {
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
});

module.exports = mongoose.model("FeedbackReports", FeedbackReports);