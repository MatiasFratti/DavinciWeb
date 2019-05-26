const mongoose = require('mongoose');
const {Schema} = mongoose;

const opacitySchema = new Schema({
    opacity: String
 
});

module.exports = mongoose.model('opacity',opacitySchema);