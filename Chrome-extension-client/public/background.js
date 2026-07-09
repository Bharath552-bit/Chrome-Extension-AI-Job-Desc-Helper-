
console.log("background.js working")

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{

    console.log("got data")

    if(message.type == `SELECTED_TEXT`){
        console.log(message.payload,"text from content")

        callingApi(message.payload,sendResponse)

    }
})

async function callingApi(payload,sendResponse){
    
}