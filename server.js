require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const userRouter = require('./router/users.js')
const checkRouter = require('./router/check.js')

//const upLoadFile = require('./router/uploadfile.js')

/*
//const mongodb = require('mongodb')
//const  MongoClient = require('mongodb').MongoClient ;
MongoClient.connect(process.env.DATABASE,(err,db)=>{
   if(err) throw err
   else
   console.log(" connted ");
})
*/


app.use(express.static("public"));    

app.set('view engine', 'ejs');

//// middelwares
//app.use(bodyparser.json());
app.use('/',userRouter);
app.use('/',checkRouter);
//app.use('/',upLoadFile);



mongoose.connect(process.env.DATABASE,{useNewUrlParser: true })

mongoose.connection.on('connected',()=>{
  console.log("database connected ......");
});

mongoose.connection.on('error ',(err)=>{
  console.log("the error is " + err);
});



app.listen(process.env.PORT,()=>{

  console.log("server on port 8080")
})
