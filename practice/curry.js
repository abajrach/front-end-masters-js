// import _ from 'lodash';
const _ = require("lodash");

let dragon = (name, size, element) => 
    name + ' is a ' + 
    size + ' dragon that breathes ' + 
    element + '!';

dragon = _.curry(dragon);
let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny');

console.log(tinyDragon('lightning'));

// console.log(dragon('fluffykins', 'tiny', 'lightning'));

// let dragon =
//     name =>
//         size =>
//             element =>
//                 name + ' is a ' +
//                 size + ' dragon that breathes ' +
//                 element + '!'


// console.log(tinyDragon('lightning'));

var add = function (a) {
    return function(b) {
        return a + b;
    }
};

var addToFive = add(5);

console.log(addToFive(1));