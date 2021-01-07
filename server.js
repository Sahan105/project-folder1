 const express = require('express');
 const path = require('path');
 const app= express();
 const ejs = require('ejs');
 const expressLayout = require('express-ejs-layouts');
 const router = require('./Routes/web');
  const mongoose = require('mongoose');

//  database connection
 const url ='mongodb://localhost/foodKa';
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}) 
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("database connected...")
}).catch(err =>{
    console.log('connection feild');
})
//static file import
app.use(express.static(__dirname + '/resources'));

// set the template engine
app.use(expressLayout);
app.set('views',path.join (__dirname + '/resources/views'));
app.set('view engine', 'ejs');
//  routes
app.use('/',router);
app.use('/cart',router);
app.use('/login',router);
app.use('/register',router);


const PORT=process.env.PORT || 8081

app.listen(PORT, () => {
     console.log(`Server started on ${PORT}`);
 });
