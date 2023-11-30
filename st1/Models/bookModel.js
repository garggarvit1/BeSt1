const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    title:{type:String},
    bookname:{type:String,required:true},
    description:{type:String,required:true},
    author:{type:String,required:true},
    genere:{type:String},
    publicationYear:{type:String},
    isbn:{type:String},
    image:{type:String,required:true},
    price:{type:Number,required:true},

});

module.exports=new mongoose.model("user",bookSchema);