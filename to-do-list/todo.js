import { getUser, updateUser, logout } from '../local-storage.js';

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
        parade();
        renderTodos();
    });
    return li;
}

export function renderTodos() {
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

const button = document.querySelector('button');

button.addEventListener('click', () => {
    window.location = '../index.html';
    logout();
});

renderTodos();

function parade() {
    var myCanvas = document.createElement('canvas');
    

    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });
    myConfetti();
    myConfetti({
        particleCount: 100,
        spread: 160
        // any other options from the global
        // confetti function
    });
    // do this for 30 seconds
    var duration = 2 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}