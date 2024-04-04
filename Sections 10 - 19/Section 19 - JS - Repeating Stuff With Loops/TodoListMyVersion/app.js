const todoList = []
let user = prompt("What would you like to do?")
while(true) {
    if (user == "quit") {
        break;
    }
    else if (user == "new"){
        newTodo = prompt("Enter new todo:")
        todoList.push(newTodo)
        console.log(`${newTodo} added to the list!`)
    }
    else if (user == "list") {
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
    }
    else if (user == "delete") {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }

    user = prompt("What would you like to do?")
}