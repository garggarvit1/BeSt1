const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bookRoute=require('./Routes/booksRoutes')
const uri="mongodb+srv://garggarvit12:garg1234@cluster0.7bembvg.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri).then(()=>{
    console.log("database connect");})
    .catch((error)=>{
        console.log(error);
    })

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello");
});
app.use('/api/',bookRoute);

app.listen(3000,()=>{
    console.log("server started successfully");
});