console.log("content running")

let btn = null
document.addEventListener("mouseup",(e)=>{
    const selectedText = window.getSelection().toString()
    console.log(selectedText)

    if(e.target.id == "btn"){
        return
    }

    if(selectedText.length>15){
        createButton(selectedText)
    }
    
})

function createButton(selectedText){

    console.log("creating button")

    if(btn){
        btn.remove()
    }

    btn = document.createElement("button")

    btn.id = "btn"

    btn.style.backgroundColor = `black`

    btn.style.position = "fixed"

    btn.style.color = `white`

    btn.innerText = `Get text`

    btn.style.zIndex = 9999

    btn.style.top = '100px'

    btn.style.right = '40px'

    btn.addEventListener("click",()=>{
        console.log("button clicked")
        sendTextToBackground(selectedText)
    })

    document.body.appendChild(btn)
}

async function sendTextToBackground(text){

    console.log("clicked");

    const storage = await chrome.storage.local.get(["resume"])

    if(!storage.resume){
        alert("Upload Resume from content.js")
        return
    }
    chrome.runtime.sendMessage(
        {
            "type": "SELECTED_TEXT",
            "payload": {resume : storage.resume,jd : text}
        },
        (response)=>{
            btn.innerText = response

            setTimeout(()=>{
                btn.remove()
            },2000)
        }
    )
}