const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


// public static path
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("Welcome to saksham web")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to saksham about web")
})

app.get("/weather",(req,res)=>{
    res.send("Welcome to saksham weather web")
})

app.get("*",(req,res)=>{
    res.send("404 page not found")
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})