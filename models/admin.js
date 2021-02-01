const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true,
    },
});

module.exports = mongoose.model("Admin", adminSchema);