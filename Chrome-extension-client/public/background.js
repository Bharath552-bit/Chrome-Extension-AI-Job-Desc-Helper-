
console.log("background.js working")

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{

    if(message.type == `SELECTED_TEXT`){
        console.log(message.payload,"text from content")

        callingApi(message.payload,sendResponse)

    }
})

async function callingApi(payload,sendResponse){
    try{
        console.log("calling ai")
        const aiResponse = await fetch("http://localhost:4000/check-ats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({jd : payload.jd,resume : payload.resume})
        });

        const result = await aiResponse.json()
        
        const feedback = JSON.parse(result.data)
    }catch(err){
        console.log(err.message)
    }
}