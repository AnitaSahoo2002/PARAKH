const express=require("express");
const app=express();
const PORT=8050;
const mongoose = require('mongoose');
const quizrouter=require("./routes/user");
const path=require("path");
const ejs = require('ejs');
const session = require('express-session');




//Connecting to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/PARAKH")
.then(() => {
    console.log("mongodb connected");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});  
//Middlewares
app.use(express.json());// to parse the file
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: 'your-secret-key', // Change this to a strong, random secret
    resave: false,
    saveUninitialized: true,
}));
//routes
 app.use("/",quizrouter)
 app.get("/",(req,res)=>{
    res.send("hi")
 })
app.listen(PORT,()=>{
    console.log(`Server Connected at http://localhost:${PORT}`);
})
 