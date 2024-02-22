const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();


app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}));

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{

    const port= process.env.PORT || 8000;
    
    app.listen(port, ()=>{
        console.log("app is running "+ port);
    })
    
})
.catch((er)=>{
    console.log("Connection error");
    console.log(er);
})


app.get("/",(req,res)=>{
    res.status(201).json({message:"Connected To Backend"});
})