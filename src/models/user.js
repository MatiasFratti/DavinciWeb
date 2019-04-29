const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    
    name: { type:String, requiered:true},
    password: { type:String, requiered:true},
    date: {type:Date}
});

module.exports = mongoose.model('user',userSchema);