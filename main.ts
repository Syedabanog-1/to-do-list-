#! /usr/bin/env node
import inquirer from "inquirer"

let todos: string[] = [""];
let loopCondition = true;

/*while(loopCondition) {
    const answer: {
        toDo: string,
        addMore: boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "toDo",
            message: " What do u want to add in your tODO list"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more toDo?",
            default: false
        }
    ])}
    

console.log(`answer.toDo , answer.addMore`);*/

while (loopCondition) {
    let answer = await inquirer.prompt ([
      {
        name: "select",
        type: "list",
        message: "select an operation",
        choices: ["Add","Update","View","Delete","Exit"]
      }  
    ]);
    if (answer.select === "Add") {
        let addTodo = await inquirer.prompt(
            {
                name: "todo",
                type: "input",
                message: " Add item in the list",
               validate: function (input){
                    if (input.trim() == ""){
                        return " Please must enter item"
                    }
                    return true;
                }

        })
        if (addTodo.todo.trim() !== "") {
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
       }
    
        if(answer.select === "Update") {
            let updateTodo = await inquirer.prompt(
                {
                    name: "todo",
                    type: "list",
                    message: "Update item in the list",
                    choices: todos.map( item => item)
                })
                let addTodo = await inquirer.prompt(
                    {
                        name: "todo",
                        type: "input",
                        message: " Add item in the list",
        })

        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo,addTodo.todo];
        todos.forEach(todo => console.log(todo))
    }
    }
    if (answer.swelect === "Vie")
        {
            console.log(" ***** To-Do List *****");
            todos.forEach(todo => console.log(todo))

        }
        if (answer.select === "Delete")
            {
                let deleteTodo = await inquirer.prompt(
                    {
                        name: "todo",
                        type: "list",
                        message: " Delete item in the list",
                        choices: todos.map(item => item)
                    }
                )
                let newTodo = todos.filter(val => val !== deleteTodo.todo);
                todos = [ ...newTodo];
                todos.forEach(todo => console.log(todo))
            } if (answer.select === "Exit")
                {
                 console.log("Exiting Program...");
                    loopCondition = false;
                }
            }

            





