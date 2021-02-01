const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true,
    },
    name:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    Coupons:[{
        type: ObjectId,
        ref: "Group"
    }],
    DOB:{
        type: String,
        require: true
    },
    Reports:[{
        type: ObjectId,
        ref: "Group"
    }],
});

module.exports = mongoose.model("User", userSchema);