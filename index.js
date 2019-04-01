// console.log("Hello World!");
// console.error('This is an error');
// console.warn('This is an Warning');

// Variables
// Var Globally scoped and mostly not used anymore
// Let replace var and is not globally scoped and can have reasigned value
// const is a constant and can't have reassigned value

// Datatypes
// Stings 
const name = 'John';
// Number
const age = 30;
// Boolean 
const isCool = true;
// 
const rating = 4.8;
// null 
const x = null;
// undefined
const y = undefined;
let z;

// console.log(typeof x);

// Concatination Before es6
// console.log("My name is " + name + " and i am " + age);
// Concatination After es6
// console.log(`My name is ${name} and i am ${age}`);
// Or we could make it a variable and then console log it
const introduction = (`My name is ${name} and i am ${age}`);

// console.log(introduction);

// Properties and Methods
const s = 'Hello World:';
// Properties dont have () if it does its a method
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split());
// To split by letter
// console.log(s.split(''));
// To create an array
const t = 'technology, computer, it, code';

// console.log(t.split(', '));

// Arrays variables that hold multiple values
// The first and older way to create arrays
const array1 = new Array(1, 2, 3, 4, 5, 6, 7);
// console.log(array1);
// Arrays allow to have mulptiple datatypes
const array2 = [null, 1, true, 3, 4, 'apples', 6.5, 7];
// console.log(array2);

// Accessing, adding, and manupulating different components of an array
const fruits = ['apples', 'oranges', 'pears'];
// When you know the exact number
fruits[3] = 'grapes';
// To add to the end
fruits.push('mangos');
// To add to the begining 
fruits.unshift('pawpaw');
// to remove last one
fruits.pop();
// to check if something is an array
// console.log(Array.isArray('hello'));
// to get index of a certain value
// console.log(fruits.indexOf('grapes'));

// console.log(fruits);

// object literal are key value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    years: 22,
    hobbies: ['violin', 'learning', 'codding'],
    address: {
        streen: 'Zhivova 3',
        city: 'Ternopil',
        country: 'Ukraine'
    }
}
// console.log(person);

// Get a specific value
// console.log(person.firstName);

// Get more than one value
// console.log(person.firstName, person.lastName);
// Get from an array
// console.log(person.hobbies[1]);

// console.log(person.address.country);

// Using destructuring to pull content and use in a varuable 
const {
    firstName,
    lastName
} = person;
// console.log(lastName);

// Pull enbeded objects
const {
    years,
    address: {
        city
    }
} = person;

// console.log(city);

// Add Properties
person.email = "johndoe@gmial.com";


// Arrays of objects

const todos = [{
        id: 1,
        text: 'Bath',
        isConpleted: true
    },
    {
        id: 2,
        text: 'Dress',
        isConpleted: true
    },
    {
        id: 3,
        text: 'Sleep',
        isConpleted: false
    }
];

// console.log(todos);

// console.log(todos[1].text);

const learning = [{
        id: 1,
        text: 'Watch video',
        isConpleted: true
    },
    {
        id: 2,
        text: 'Write Code',
        isConpleted: true
    },
    {
        id: 3,
        text: 'Read Book',
        isConpleted: false
    }
];

// To convert it to json 
const learningJSON = JSON.stringify(learning);
// console.log(learningJSON);

// Loops

// for

for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log(`for loop number: ${i}`);

};

// while
let i = 0;
while (i < 10) {
    console.log(i);
    console.log(`for loop number: ${i}`);
    i++;
};

// Loop through an array

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
};

// A for of loop

for (let todo of todos) {
    console.log(todo);
    console.log(todo.id);
    console.log(todo.text);



}