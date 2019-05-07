#### let vs var

*`let` is preferred because it is block-scoped. `var` is available outside of the block and is hoisted as well*

#### Rest Parameters

*Rest parameters have to come at the end of the parameter list*

```javascript
function sendCars(day, ...carIds) {
    carIds.forEach(id => console.log('id :', id));
}

sendCars('Monday', 1, 4, 5, 6);
```

#### Destructuring array

````javascript
let carIds = [100, 200, 300];
let car1, car2, theRest;
[car1, car2, ...theRest] = carIds;
// [, car2, ...theRest] = carIds;	// car1 will be skipped. car2 = 200, theRest=[300]
console.log(car1, car2, theRest);	// theRest is an array (spread operator makes array)
````

#### Destructuring objects

```javascript
let car = { id: 5000, style: 'convertible' };
let { id, style } = car;
// let id, style;				  // If variables are defined before, they need to be surrounded 
// ({ id, style } = car); // in parenthesis
console.log('id, style :', id, style);
```

#### Spread Operator

*Spread operator is the opposite of rest operator. It “spreads” an iterable (arrays, strings) to individual item*

```javascript
function startCars(car1, car2, car3, ...rest) {
    // console.log(car1, car2, car3);
    console.log('rest :', rest);
}
var cars = [100, 200, 300, 500, 600, 700];
startCars(...cars);	// prints out 500, 600, 700
```

#### typeof

```javascript
console.log('typeof(1); :', typeof(1)); // number
console.log('typeof(true) :', typeof(true)); // boolean
console.log(typeof('Hello')); // string
console.log(typeof( function() {})); // function
console.log(typeof{}); // object
console.log(typeof(null)); // object
console.log(typeof(undefined)); // undefined
console.log(typeof(NaN)); // number
```

#### IIFE (Immediately Invoked Function Expression)

```javascript
let app = (function() {
    let carId = 123;
    console.log('Hello world');
    return {};
})();

console.log('app :', app);
```

#### Closure

````javascript
let app = (function() {
    let carId = 123;
    let getId = function() {
        return carId;
    };
    return {
        getId: getId    // `getId` is a function
    };
})();

console.log( app.getId() );	// 123
````

#### `Call` and `Apply`

`this` keyword holds the reference to the context of the function. `Call` and `Apply` can be used to change the context of the function. `Apply` is like `Call` but you can pass arguments.

```javascript
let o = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};

let newCar = { carId: 456 };
console.log(o.getId.apply(newCar, ['ID: ']));   // ID: 456
```

