import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.post("check-ats",async (req,res)=>{
    try{
        const result = {
            ats : "60%",
            missingKeywords : ["python"],
            suggestion : "Add more details about project"
        }

        res.status(200).json({message : "ok",data : result})
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

app.listen(process.env.PORT_NO,()=>{
    console.log("Server sunning")
})