const h1 = document.createElement("h1");

h1.textContent = "JavaScript made this!!";

h1.className = "header";

h1.style.color = "gold";

document.getElementById("header").appendChild(h1);

document.body.innerHTML += '<span class="name">Greg Doss</span> wrote the JavaScript!';

document.getElementById("subtitle").append("No");

const messages = document.getElementsByClassName("messages");
console.log(messages);

var messageReplace = [
    "you're great",
    "thanks!",
    "you're welcome",
    "you're great",
    "you're awesome!",
    "no, you're awesome!",
];

for (var i = 0; i < messages.length; i++) {
    // var newMessages = document.createElement("array");
    messages[i].textContent = "";
    // messageReplace.append(newMessages);
};

//messages.innerHTML += "<array>" + messageList[i] + "</array>"

//document.getElementById('clear-out').addEventListener('click', () => {
    //messages.textContent = '';
//});

//theme.classList.toggle("theme-two");
//document.body.addEventListener("change", theme-two);