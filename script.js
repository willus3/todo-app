// 1. Select DOM elements
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// 2. Event listeners
todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    //1. Prevent form from submitting (refreshing the page)
    event.preventDefault();

    //Bug fix
    if (todoInput.value === "") {
        return;
    }

    //2. Create todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //3. Create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //4. Create check mark button
    const completedButton = document.createElement('button');
    completedButton.innerText = 'OK';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //5. Create trash button
    const trashButton = document.createElement('button');
    trashButton.innerText = 'DEL';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //6. Append to list
    todoList.appendChild(todoDiv);

    //7. Clear input value
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;

    //Delete TODO
    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        todo.remove();
    }
    // CHECK MARK
    if (item.classList.contains("complete-btn")) {
        console.log("Green button clicked!"); // <--- THE SPY
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo); // <--- Print the whole element to see if class changes
    }
}
