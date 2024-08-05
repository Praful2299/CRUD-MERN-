const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const PORT=process.env.PORT;
const stuRoute=require('./Routes/studentRoutes');
const cors=require('cors');
const bodyParser = require('body-parser')
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crud").then(()=>{
    console.log("Database Connected!")
})


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/students",stuRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on PORT-${PORT}`)
})