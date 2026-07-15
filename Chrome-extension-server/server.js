import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { askAi } from './contollers/ai/callingAi.js'
import { dataURLtoFile } from './utils/urlToFile.js'
dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.post("/check-ats",async (req,res)=>{
    try{

        const data = req.body

        const file = dataURLtoFile(data.resume.content,"resume.pdf")

        const result = await askAi(data.jd,file)
        console.log(result,"result from ai")

        res.status(201).json({message : "ok",data : result})
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

app.listen(process.env.PORT_NO,()=>{
    console.log("Server running")
})