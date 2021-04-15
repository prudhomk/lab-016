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

    const stringyUser = JSON.stringify(user);
    // user = JSON.parse(stringyUser); maybe?

    localStorage.setItem(USER, stringyUser);  //maybe?

}

export function getUser() {

    const stringyUser = localStorage.getItem(USER);

    const parsedUser = JSON.parse(stringyUser);

    return parsedUser;
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

