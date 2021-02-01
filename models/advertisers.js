const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const advertiserSchema = new mongoose.Schema({
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
    category:{
        type: String,
        require: true
    },
    website:[{
        type: String,
        require: true
    }],
    company:{
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Advertisers", advertiserSchema);