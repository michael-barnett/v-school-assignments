// const axios = require('axios');

// axios.get('https://api.vschool.io/mikebarnett/todo')
//     .then(response => {
//         const h1 = document.createElement('h1')
//         h1.textContent = response.data[0].title
//         document.body.appendChild(h1);
//         console.log(response.data)
//     })
//     .catch(error => console.log(error))
const todoForm = document.todoform

todoForm.addEventListener('submit', function(event){
    event.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    axios.post("https://api.vschool.io/mikebarnett/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

})