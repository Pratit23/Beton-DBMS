const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const couponsSchema = new mongoose.Schema({
    couponId:{
        type:String,
        require:true
    },
    amount :{
        type:Number,
        require:true,
    },
    validity:{
        type: Number,
        require: true
    },
    advertiser:[{
        type: ObjectId,
        ref: "advertiser"
    }],
});

module.exports = mongoose.model("Coupons", couponsSchema);