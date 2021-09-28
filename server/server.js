require("dotenv").config();
const express=require('express')
const db=require("./db/index.js")
var cors = require('cors');

const app=express()
app.use(cors());
app.get("/api/v1/getOffers",async (req,res)=>{
    const offers=await db.query("select * from offers")
    console.log(offers.rows);
    res.status(200).json({
        status:"success",
        data:offers.rows,
    })
})
app.get("/api/v1/getHoroscopes",async (req,res)=>{
    const offers=await db.query("select * from horoscopes")
    console.log(offers.rows);
    res.status(200).json({
        status:"success",
        data:offers.rows,
    })
})
app.get("/api/v1/getReports",async (req,res)=>{
    const offers=await db.query("select * from reports")
    console.log(offers.rows);
    res.status(200).json({
        status:"success",
        data:offers.rows,
    })
})
app.get("/api/v1/getQuestions",async (req,res)=>{
    const offers=await db.query("select * from questions")
    console.log(offers.rows);
    res.status(200).json({
        status:"success",
        data:offers.rows,
    })
})
app.get("/api/v1/getReviews",async (req,res)=>{
    const offers=await db.query("select * from reviews")
    console.log(offers.rows);
    res.status(200).json({
        status:"success",
        data:offers.rows,
    })
})
app.get("/api/v1/getAstrologerDetails",async (req,res)=>{
    const offers=await db.query("select * from astrologers")
    console.log(offers.rows);
    res.status(200).json({
        status:"success",
        data:offers.rows,
    })
})
const port=process.env.PORT||3001
app.listen(port,()=>{console.log(`server is running on port ${port}`)})
