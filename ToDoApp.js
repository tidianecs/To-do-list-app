//I use the npm install prompt-sync bc i don't want use the readline command of node JS
const prompt = require('prompt-sync')();
//setup of the main functionality of our to do list app
function showTodo(list){
    for (let toDo of list){
        console.log(toDo)
    }
}
function addTodo(todo, list){
    return list.push(todo)
}
function delTodo(todo, list){
    const index  = list.indexOf(todo)
    if (index > -1){
        list.splice(index, 1)
        return list
    }
}
function addMarkDoneTodo(doneTodo){
    let markDone = []
    markDone.push(doneTodo)
    console.log("That's what you did")
    for (let asDone of markDone){
        console.log(asDone)
    }
}
//Setup a todoList but i'm gonna change it for the user will put his own stuffs inside
let toDoList = ["Homework", "Clean the dishes", "Gym"]
console.log("Welcome to To Do List 2025!")
showTodo(toDoList)
//The main part of the program
console.log("What do you want ?\n1. Add a To Do  2. Delete a To Do\n3. Show the Todo List  4.Show the Mark as done")
let choose = parseInt(prompt())
if (choose == 1){
    let add_todo = prompt("=> ")
    addTodo(add_todo, toDoList)
    showTodo(toDoList)
}else if (choose == 2){
    showTodo(toDoList)
    let del_todo = prompt("Wich one do you want to remove ? => ")
    delTodo(del_todo, toDoList)
    showTodo(toDoList)
}else if (choose == 3){
    showTodo(toDoList)
}else if (choose == 4){
    showTodo(toDoList)
    let doneOne = prompt("Which one do you done ? => ")
    addMarkDoneTodo(doneOne)
}

