import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import route from "./route/userRouter.js";
import cors from 'cors';
import bodyParser from "body-parser";
const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

const PORT= process.env.PORT || 3000
const URL=process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
console.log("DB Connected");
}).catch(error=>console.log(error));

app.use('/api',route);

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})

