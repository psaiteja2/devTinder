const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.send("hello teja");   CDATASection
})

app.listen(3000,()=>{
    console.log("hello server");
})
