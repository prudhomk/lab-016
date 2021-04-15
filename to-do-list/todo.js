import { getUser, updateUser } from '../local-storage.js';

const todoList = document.querySelector('form');

export function completeTodo(todoMessage) {
    const user = getUser();
    const matchingTodo = user.todos.find((todo) => 
        todoMessage === todo.todo);
    matchingTodo.completed = true;
    updateUser(user);
}

function addTodo(todo) {
    const newTodo = {
        todo,
        completed: false
    };
    const user = getUser();
    user.todos.push(newTodo);
    updateUser(user);
}

function renderLi(todo) {
    const li = document.createElement('li');
    li.textContent = todo.todo;
    
    if (todo.completed) {
        li.style.textDecoration = 'line-through';
    }
    li.addEventListener('click', () => {
        completeTodo(todo.todo);
        renderTodos();
    });
    return li;
}

function renderTodos() {
    const user = getUser();
    const ul = document.querySelector('ul');
    ul.textContent = '';
    
    user.todos.forEach(todo => {
        const li = renderLi(todo); 
        ul.append(li);   
    });
    
}    

todoList.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(todoList);
    const todo = formData.get('todo');
    addTodo(todo);
    renderTodos();
    todoList.reset();
});

