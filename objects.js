document.getElementById("add").addEventListener("click", addElement);

{
  
var string = window.localStorage.getItem("savedTasks");
var savedItems=JSON.parse(string);

var taskList = [].concat(savedItems).filter(x => !!x);

var entry = document.getElementById("text");

}


function store() {

  window.localStorage.setItem("savedTasks", JSON.stringify(taskList));

}

function retrieve() {
 
  if (!savedItems) {
    document.getElementById("array").innerHTML = savedItems;
  }
  
  else {
    document.getElementById("array").innerHTML = "No Saved Tasks";
  }

}

function addElement() {

  if (taskList.includes(entry.innerHTML)) {
    alert("Entry already exists");
    return;
  }

  if (entry.innerHTML=="") {
    alert("Task entry required");
    return;
  }

  taskList.push(entry.innerText);
  
  document.getElementById("array").innerHTML += `<li idx='${taskList.length-1}'>  ${entry.innerHTML}  &nbsp <button id='remove' onclick='removeElement()'> X </button></li><br>`;

  store();
}

function removeElement() {
  
  var btn = event.target;
  var index = parseInt(btn.parentElement.getAttribute("idx", 10));
  
  taskList.splice(index, 1);

  var newList = taskList.map((entry, i) => {
    return `<li idx='${i}'>  ${entry}  &nbsp <button id='remove' onclick='removeElement()'> X </button></li><br>`
  });

  
  document.getElementById("array").innerHTML=newList.join('');

  store();
}

function loadList() {

  var newList = taskList.map((entry, i) => {
    return `<li idx='${i}'>  ${entry}  &nbsp <button id='remove' onclick='removeElement()'> X </button></li><br>`
  });

  
  document.getElementById("array").innerHTML=newList.join('');

}