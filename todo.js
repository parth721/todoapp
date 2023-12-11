function addtask(){
    let text = document.getElementById("insertedTask").value; //retrive the string
    let container = document.getElementById("taskList"); //get the ul element inside which we will add the li element
    let newItem = document.createElement("li"); //create a new li element
    newItem.appendChild(document.createTextNode(text)); //add the text to the li element

    const remove = document.createElement("button");
    remove.innerHTML = "Delete";
    remove.onclick = function(){ removetask(newItem) };

    newItem.appendChild(remove);
    container.appendChild(newItem); //add the li element to the ul element
}

function removetask(newItem){
    let container = document.getElementById("taskList");
    container.removeChild(newItem);
}