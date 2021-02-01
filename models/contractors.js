const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const contractorsSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true,
    },
    noProjects:{
        type: Number,
        require: true
    },
    address:{
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Contractors", contractorsSchema);