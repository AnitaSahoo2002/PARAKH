const user=require("../models/user");
const fs=require("fs");
const path=require("path");
const questionfile=path.join(__dirname,"../questions.json");
const session = require('express-session');
const QuestionModel=require("../models/questionmodel");


 // Specify the directory where your EJS templates are located


//console.log("Checking file path:", questionfile);
// async function takequiz(req,res){
//     if (!fs.existsSync(questionfile)) {
        
//         return res.status(404).json({ error: 'Questions file not found' });
//     }
//     fs.readFile(questionfile, 'utf8', (err, data) => {
//         if (err) {
//             console.log('Error reading questions file:', err);
//             return res.status(500).json({ error: 'Error reading questions file' });
//         }
//     const quest=JSON.parse(data);
    
    // const random=Math.floor(Math.random()*quest.length);
    // if (!req.session.question) {
    //     req.session.question = {};
    // }
    // req.session.question.Key = quest[random].AnswerKey;
    // req.session.question.questionid = quest[random].originalQuestionID;
    
//     QuestionModel.create(quest[random])
//     .then(()=>{
//         console.log("questions inserted successfully")
//     })
//     .catch((err)=>{
//         console.log("error inserting questions");
//     })
   
//     //console.log(quest[random].AnswerKey);
//     res.render("quiz",{question:quest[random]});
//    })
// }
// async function submitanswer(req,res){
//     const userAnswer = req.body.answer; // Get the user's answer from the form
//     const questionid = req.body.questionID; // Get the correct answer for the current question

    // Check if the user's answer is correct
   // const isCorrect = userAnswer === correctAnswer;

    // Update the user's score (you need to have a way to track the score, e.g., using sessions)
    //   if (isCorrect) {
    //      req.session.score = (req.session.score || 0) + 1;
    //  }
    // try{
    //     const correctAnswer=await QuestionModel.findOne({questionid}).select("Answerkey");
    //     const isCorrect = userAnswer === correctAnswer;
    //     const nextQuestionIndex =questionid + 1;
    //     if (nextQuestionIndex < 12) {
    //         //req.session.question = question[nextQuestionIndex];
    //        // req.session.question.questionid = nextQuestionIndex;
    //         const nextquestion=quest[nextQuestionIndex];
    //         //req.session.question.Key=nextquestion.AnswerKey;
    //         res.render("quiz",{question:nextquestion}); // Redirect to the next question
    //     } else {
    //         // Display the quiz results
    //          res.render('results', { score: req.session.score });
    //         //res.send("test finished")
    //     }
    // }
    // catch(err){
    //     // console.log("error i retrieving correct answer")
    //     // return res.status(500).json({err:"internal server error"});
    // }

    // Determine the next question (you need to have a way to track the current question index)
    // const currentQuestionIndex = req.session.question.questionid;
   
    // Redirect to the next question or display the quiz results when all questions are answered
    // if (nextQuestionIndex < 12) {
    //     //req.session.question = question[nextQuestionIndex];
    //     req.session.question.questionid = nextQuestionIndex;
    //     const nextquestion=quest[nextQuestionIndex];
    //     req.session.question,Key=nextquestion.AnswerKey;
    //     res.render("quiz",{question:nextquestion}); // Redirect to the next question
    // } else {
    //     // Display the quiz results
    //      res.render('results', { score: req.session.score });
    //     //res.send("test finished")
    // }
// }
async function takequiz(req,res){
   // const questionid=await QuestionModel.findOne({questionid}).questionID;
   
    if (!fs.existsSync(questionfile)) {
        
        return res.status(404).json({ error: 'Questions file not found' });
    }
    fs.readFile(questionfile, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading questions file:', err);
            return res.status(500).json({ error: 'Error reading questions file' });
        }
    const quest=JSON.parse(data);
    const random=Math.floor(Math.random()*quest.length);
    //  QuestionModel.create({
    //     QuestionId:quest[random].originalQuestionID,
    //     AnswerKey:quest[random].AnswerKey,
    //     question:quest[random].question,
    //     choosenAnswer:"m",

    // })
     return res.render("quiz",{question:quest[random]});
})
//return res.render("quiz",{question:quest[random]});
    }

async function submitanswer(req,res){
    const Question=req.body.question;
    const useranswer=req.body.answer;
    let questionid=req.body.questionId;
    const correctans=req.body.AnswerKey;
    // try{
        // const correctans=await QuestionModel.findOne({questionid}).AnswerKey;
        // if(useranswer===correctans){
        //     console.log("correct answer")
        // }
        // while(questionid!=13){
            // fs.readFile(questionfile, 'utf8', async(err, data) => {
            //     if (err) {
            //         console.log('Error reading questions file:', err);
            //         return res.status(500).json({ error: 'Error reading questions file' });
            //     }
            // const quest=JSON.parse(data);
            // // const currentQuestion=quest[questionid];
            
            if(useranswer===correctans){
                console.log("correct answer")
            }
           
            //  await QuestionModel.create({
            //    // QuestionId:questionid,
            //     AnswerKey:correctans,
            //     question:Question,
            //     choosenAnswer:useranswer,
        
            // })
            
            
            
            if(questionid<24){
                questionid=questionid+1;
                return res.render("quiz",{question:quest[questionid]});
            }
            else{
                return res.json({message:"congrats"})
            }
             
         
        //return res.render("quiz",{question:quest[questionid]});
// }

// catch(err){
//     console.log("error i retrieving correct answer")
//     return res.status(500).json({err:"internal server error"});
// }
}

module.exports={
    takequiz,
    submitanswer
}