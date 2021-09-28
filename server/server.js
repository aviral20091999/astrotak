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
const port=process.env.PORT||3001
app.listen(port,()=>{console.log(`server is running on port ${port}`)})
