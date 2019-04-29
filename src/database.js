const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/DavinciWeb',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false

})
.then(db=>console.log('data base conected'))
.catch(err=>console.log(err));