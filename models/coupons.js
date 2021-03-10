const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const couponsSchema = new mongoose.Schema({
    name :{
        type: String,
        require:true,
    },
    amount :{
        type: String,
        require:true,
    },
    validity:{
        type: String,
        require: true
    },
    assigned: {
        type: Boolean,
        require: true
    },
    advertiserID: {
        type: ObjectId,
        ref: "Advertisers"
    },
    userID: {
        type: String || ObjectId,
        ref: "User"        
    }
});

module.exports = mongoose.model("Coupons", couponsSchema);