// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createUser, updateUser, getUser, checkUser, correctLogin, } from '../local-storage.js';
import { renderTodos } from '../to-do-list/todo.js';

const test = QUnit.test;

test('create user test', (expect) => {
    //Arrange
    // Set up your arguments and 

    const expected = {
        username: 'test',
        password: 'god',
        todos: []
    };

    createUser('test', 'god');

    const actual = JSON.parse(localStorage.getItem('USER'));

    //Act 
    // Call the function you're testing and set the result to a const
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('get user test', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = {
        username: 'test',
        password: 'god',
        todos: []
    };

    localStorage.setItem('USER', JSON.stringify(expected));

    //Act
    // Call the function you're testing and set the result to a const
    const actual = getUser();
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('check user test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    //Act
    // Call the function you're testing and set the result to a const
    const actual = checkUser();
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('correct login', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //takes username and password. if local storage password is equal to password parameter

    const expected = {
        username: 'abcd',
        password: '1234',
        todos: []
    };

    localStorage.setItem('USER', JSON.stringify(expected));

    //Act
    // Call the function you're testing and set the result to a const
    const actual = correctLogin('abcd', '1234');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, true);
});

test('correct login', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const actual = renderTodos({
        todo: 1,
        completed: false
    });

    //Act
    // Call the function you're testing and set the result to a const

    const expected = `<ul><li>1</li></ul>`;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});