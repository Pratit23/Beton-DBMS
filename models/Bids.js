const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const bidSchema = new mongoose.Schema({
    bidedAt: {
        type: String,
        require: true
    },
    bidedOn: {
        type: String,
        require: true,
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

});

module.exports = mongoose.model("Bids", bidSchema);