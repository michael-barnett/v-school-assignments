
var form = document.getElementById("add-todo")
var list = document.getElementById("list")

// This function creates the list items
function addItem(e){
    e.preventDefault();
    makeLi = document.createElement("li")
    makeListText = document.createElement("div")
    makeDelete = document.createElement("button")
    makeDelete.setAttribute("name", "delButton")
    makeDelete.textContent = "X"
    makeEdit = document.createElement("button")
    makeEdit.setAttribute("id", "editButton")
    makeEdit.textContent = "edit"
    makeLi.setAttribute("id", "newList")
    var inputValue = document.getElementById("title").value
    makeListText.textContent = inputValue
    list.append(makeLi)
    makeLi.append(makeListText)
    makeLi.append(makeDelete)
    makeLi.append(makeEdit)
}

form.addEventListener("submit", addItem)

// This adds an event listener to the whole document that checks if the name is delButton
// and then removes its parent element if so.
document.addEventListener('click', function(e){
    if(e.target.name=="delButton"){
     e.target.parentElement.remove();
    }
  })
