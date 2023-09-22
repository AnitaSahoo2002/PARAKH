const mongoose=require("mongoose")
const questionschema=new mongoose.Schema({
   
    // questionId:{
    //     type:String,
    //      required:true,
    //     // unique:true,
    // },
    Answerkey:{
    type:String,
     required:true,
    },
    choosenAnswer:{
        type:String,
    },
    question:{
        type:String,
        required:true,
    },
    },{timestamps:true})
    const questionmodel=mongoose.model("Questionmodel",questionschema);

module.exports=questionmodel;