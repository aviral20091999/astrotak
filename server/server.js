require("dotenv").config();
const express=require('express')

const app=express()

app.get("/api/v1/getOffers",(req,res)=>{
    res.status(200).json({
        status:"success",
        data:{
            offer:["offer1","offer2"]
        }
    })
})
const port=process.env.PORT||3001
app.listen(port,()=>{console.log(`server is running on port ${port}`)})
