const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride =require('method-override');
const session = require('express-session');
const routes = require('./routes/index'); 
const Formidable = require('express-form-data');





//initialized
const app = express();

//connect to database
const mongoose = require('./database');
// setting
app.set('port',process.env.PORT || 3200);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    // defaultLayout:'main',
    // layoutsDir: path.join(app.get('views'),'layout'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');
//middlewares
// app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'davinci',
    resave:true,
    saveUninitialized:true
}));
app.use(Formidable.parse({keepExtensions: true}));
//Global variable

//routes
app.use(routes);
//static files
app.use(express.static(path.join(__dirname,'public')));
//init server
app.listen(app.get('port'),()=>{
    console.log('servidor encendido',app.get('port'));
});