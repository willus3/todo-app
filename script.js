// 1. Select DOM elements
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// 2. Event listeners
todoButton.addEventListener('click', function() {
    console.log('I am working!');
    console.log(todoInput.value);
});