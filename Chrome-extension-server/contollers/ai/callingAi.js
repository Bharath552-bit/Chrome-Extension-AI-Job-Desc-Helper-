import Groq from 'groq-sdk'
import dotenv from 'dotenv'
import { Prompt } from '../../utils/prompt.js';
dotenv.config()

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function askAi(JOB_DESCRIPTION,RESUME){
    try{
        console.log("calling ai")
        const response = await groq.chat.completions.create({
            model: "meta-llama/llama-4-scout-17b-16e-instruct",
            messages: [{
                role : "system",
                content : Prompt(JOB_DESCRIPTION,RESUME)
            }],
            temperature: 0.2,
            response_format: {
                type: "json_object"
            }
        });

        return response.choices[0].message.content

    }catch(err){
        return Promise.reject(err)
    }
}

export {askAi}