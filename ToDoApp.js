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
//The main part of the program
let toDoList = []
console.log("Welcome to To Do List 2025!")
showTodo(toDoList)
console.log("What do you want ?\n1. Add a To Do  2. Delete a To Do\n3. Show the Todo List  4.Show the Mark as done")
let choose = parseInt(prompt())
if (choose == 1){
    let confirmAddTodo = 0 //Make the while condition for ask the user if he want to add more than one task inside his to do list
    while (confirmAddTodo == 0){
        let add_todo = prompt("=> ")
        addTodo(add_todo, toDoList)
        showTodo(toDoList)
        let reAddTodo = prompt("Only this one ?(y/n) => ")
        if (reAddTodo == "y"){
            break
        }else if (reAddTodo == "n"){
            confirmAddTodo = 0
        }
    }
}else if (choose == 2){
    let confirmDelTodo = 0
    while(confirmDelTodo == 0){ //Make the while condition for ask the user if he want to delete more than one task inside his to do list but i don't do the case where there is no task in the list for tell the user it's impossible
        showTodo(toDoList)
        let del_todo = prompt("Wich one do you want to remove ? => ")
        delTodo(del_todo, toDoList)
        showTodo(toDoList)
        let reDelTodo = prompt("Only this one ?(y/n) => ")
        if (reDelTodo == "y"){
            break
        }else if (reDelTodo == "n"){
            confirmDelTodo = 0
        }
    }
}else if (choose == 3){
    showTodo(toDoList)
}else if (choose == 4){
    let confirmDoneTodo = 0 //Make the while condition for ask the user if he want to mark as done more than one task inside his to do list
    while(confirmDoneTodo == 0){
        showTodo(toDoList)
        let doneOne = prompt("Which one do you done ? => ")
        addMarkDoneTodo(doneOne)
        let reMarkTodo = prompt("Only this one ?(y/n) => ")
        if (reMarkTodo == "y"){
            break
        }else if (reMarkTodo == "n"){
            confirmDoneTodo = 0
        }
    }
}
/*I need to make a while loop that let the user to repeat all the programm*/