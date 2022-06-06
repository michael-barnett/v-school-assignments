function getData(){
    axios.get("https://api.vschool.io/mikebarnett/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}



// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    clearList()
    
    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        div.setAttribute("id", `${data[i]._id}`)
        if (data[i].completed === true && !data[i].imgUrl){
            div.innerHTML = `<input type="checkbox" name="complete" id="checkbox" checked/><div class="innerContainer" id=><h1>${data[i].title} </h1><h4>${data[i].description}</h4><h4>${data[i].price}</h4></div><button name="deleteButton" id=deleteButton>Delete</button>`;
            document.getElementById('todo-list').appendChild(div)
        }
        if (data[i].completed === false && !data[i].imgUrl){
            div.innerHTML = `<input type="checkbox" name="complete" id="checkbox"><div class="innerContainer" id=><h1>${data[i].title} </h1><h4>${data[i].description}</h4><h4>${data[i].price}</h4></div><button name="deleteButton" id=deleteButton>Delete</button>`;
            document.getElementById('todo-list').appendChild(div)
        }
        if (data[i].completed === true && data[i].imgUrl){
            div.innerHTML = `<input type="checkbox" name="complete" id="checkbox" checked/><div class="innerContainer" id=><h1>${data[i].title} </h1><h4>${data[i].description}</h4><h4>${data[i].price}</h4><img src=${data[i].imgUrl} height="50px" width="50px"></div><button name="deleteButton" id=deleteButton>Delete</button>`;
            document.getElementById('todo-list').appendChild(div)
        }
        if (data[i].completed === false && data[i].imgUrl){
            div.innerHTML = `<input type="checkbox" name="complete" id="checkbox"><div class="innerContainer" id=><h1>${data[i].title} </h1><h4>${data[i].description}</h4><h4>${data[i].price}</h4><img src=${data[i].imgUrl} height="50px" width="50px"></div><button name="deleteButton" id=deleteButton>Delete</button>`;
            document.getElementById('todo-list').appendChild(div)
        }
    }
}
function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.image.value,
    }
    
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.image.value = ""
    
    axios.post("https://api.vschool.io/mikebarnett/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})

// DELETE BUTTON FOR DELETE REQUEST

document.addEventListener('click', function(e){
    if(e.target.name === "deleteButton"){
        axios.delete(`https://api.vschool.io/mikebarnett/todo/${e.target.parentElement.id}`);
        setTimeout(getData, 100)
    }
    if(e.target.checked === true){
        axios.put(`https://api.vschool.io/mikebarnett/todo/${e.target.parentElement.id}`, {completed: true})
    }
    if(e.target.checked === false){
        axios.put(`https://api.vschool.io/mikebarnett/todo/${e.target.parentElement.id}`, {completed: false})
    }
})