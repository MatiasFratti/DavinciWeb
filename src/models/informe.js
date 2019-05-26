const mongoose = require('mongoose');
const {Schema} = mongoose;

const informeSchema = new Schema({
    visitas:Number,
    fecha:Date,
    ip:String
 
});

module.exports = mongoose.model('informe',informeSchema);