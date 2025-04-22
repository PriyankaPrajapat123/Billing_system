const express = require("express")
const mongoose= require('mongoose')
const cors = require("cors")
const userModal = require('./models/user')

const app = express();
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/Billing_System");


app.post('/register',(req,res)=>{
    const { name, email, password } = req.body;

    res.status(201).json({ message: req.body });
})

app.listen(5000,()=>{
    console.log("server is running")
})