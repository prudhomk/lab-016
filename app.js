import { correctLogin, login } from './local-storage.js';

const loginUser = document.querySelector('form');

loginUser.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(loginUser);
    const username = formData.get('username');
    const password = formData.get('password');
    // console.log(username, password);
    if (correctLogin(username, password)) {
        login(username);
        window.location = '../to-do-list/to-do.html';
    } else {
        alert('Incorrect Login Data!  Please try again.');
        window.location = '../nouser/index.html';
    }
});