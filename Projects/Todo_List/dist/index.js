"use strict";
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let todos = [];
let idCounter = 0;
// Function to render todos to the DOM
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.className = todo.completed ? 'completed' : '';
        // Toggle completed on click
        li.addEventListener('click', () => {
            toggleTodo(todo.id);
        });
        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent toggl on remove click
            removeTodo(todo.id);
        });
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}
// Add a new todo
function addTodo(text) {
    if (text.trim() === '')
        return;
    const newTodo = {
        id: idCounter++,
        text: text,
        completed: false,
    };
    todos.push(newTodo);
    renderTodos();
    todoInput.value = '';
}
// Toggle completed status
function toggleTodo(id) {
    todos = todos.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo);
    renderTodos();
}
function removeTodo(id) {
    todos = todos.filter(todo => todo.id != id);
    renderTodos();
}
// Event listener for add button
addBtn.addEventListener('click', () => {
    addTodo(todoInput.value);
});
// optional :allow adding tod with enter key
todoInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addTodo(todoInput.value);
    }
});
// Inital render
renderTodos();
