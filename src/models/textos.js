const mongoose = require('mongoose');
const {Schema} = mongoose;

const textosSchema = new Schema({

    text: { type:String, required:true },
    description:{ type:String, required:true},
    code:{type:Number}   
});

module.exports = mongoose.model('textos',textosSchema);