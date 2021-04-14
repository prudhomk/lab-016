const USER = 'USER';
const LOGGEDIN = 'LOGGEDIN';

export function createUser(username, password) {
    const user = {
        username,
        password,
        todos: []
    };
    updateUser(user);
}

export function updateUser(user) {
    const stringyUser = JSON.stringify(USER);
    user = JSON.parse(stringyUser);

    return user;
}

export function getUser(user) {
    const stringyUser = localStorage.getItem(USER);

    user = JSON.parse(stringyUser);

    return user;
}

export function checkUser(username) {
    const storedUser = getUser();
    if (!storedUser) return false;

    return username === storedUser.username;
}

export function correctLogin(username, password) {
    const userInLocalStorage = getUser();

    if (!checkUser(username) || userInLocalStorage.password !== password) return false;

    return true;
}

export function login(username) {
    localStorage.setItem(LOGGEDIN, username);
}

export function logout() {
    localStorage.setItem(LOGGEDIN, '');
}

