// Your first task is to use pure JavaScript to insert a header to the top of this page
document.getElementById("header").style.textAlign = "center"
document.getElementById("header").style.fontSize = "40px"
let header = document.getElementById("header")
header.textContent = "JavaScript made this!!"
let topHeader = document.querySelector("header#header")
topHeader.innerHTML += "</br><span id='firstSpan'>[Michael] </span><span id='secondSpan'>made this JavaScript</span>"
document.getElementById("firstSpan").style.color = "tan"
document.getElementById("firstSpan").style.fontSize = "20px"
document.getElementById("secondSpan").style.fontSize = "20px"

// Bronze level
// Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
// Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.
let conversation = document.querySelectorAll("div.messages > div")
console.log(conversation)
// This changes the text by editing the text content of the div (with class "messages") as an array
conversation[0].textContent = "Hey man, I'm having a barbecue for the 4th of July, want to come over?"
conversation[1].textContent = "Sure, that sounds awesome! What time?"
conversation[2].textContent = "Does 5 sound good?"
conversation[3].textContent = "Sounds great, I'll bring the fireworks!"
//This clears the 'conversation'
let clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearMessages)
function clearMessages(){
    let messages = document.querySelector("div.messages")
    messages.innerHTML = ""
}
// Silver Level

// Gold Level
let messages = document.querySelector("div.messages")

function sendMessage(event){
        event.preventDefault();
        var addMessage = document.createElement("div");
        addMessage.setAttribute("class", "message right");
        messages.append(addMessage)
        userMessage = document.getElementById("input").value
        addMessage.append(userMessage)
        document.getElementById("input") = ""
    }

var form = document.querySelector("[name='message']");
form.addEventListener("submit", sendMessage)
