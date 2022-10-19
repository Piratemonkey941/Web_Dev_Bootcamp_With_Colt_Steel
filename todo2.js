
let input = prompt('what would you like to do?');

const todos = ['Collect Eggs', 'Feed Chickens'];

while (input !== 'quit' && input !== 'q'){
    if (input === 'list') {
            console.log('***********')
            for(let i = 0; i < todos.length; i++){
                console.log(`${i}: ${todos[i]}`);
            }
            console.log('***********')
        }
        else if (input === 'new') {
            const newTodo = prompt ('What is new todo?');
            todos.push(newTodo);
            console.log(`${newTodo} Added to List`)
        }
        else if (input === 'delete') {
            const index = parseInt(prompt ('Enter index to delete:'));
            if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`ok, deleted ${deleted[0]}`);
            }
            else {
                console.log('unknown index')
            }
        }

    input = prompt('what would you like to do?')
}

console.log('OK QUIT APP!')

// const index = parseInt (indexStr);