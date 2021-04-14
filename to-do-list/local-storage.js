const USER = 'USER';


function createUser(username, password) {
    const user = { username, password, todos:[] };

    const stringyUser = JSON.stringify(user);
    
    localStorage.setItem(USER, stringyUser);


}