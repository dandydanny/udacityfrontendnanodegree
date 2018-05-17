
8-2 Let and Const
-----------------

Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function.

Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

use let when you plan to reassign new values to a variable, and
use const when you don’t plan on reassigning new values to a variable.

using var in situations where you want to globally define variables, but otherwise don't use var

8-4 Template Literals
---------------------

const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}

Use backticks `

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

const myName = 'Daniel';
const greeting = `Hello, my name is ${myName}`;
console.log(greeting);

No need for \n for multi-line because template literals preserves new lines.

8-6 Destructuring
-----------------

From array:

const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z); // 10, 25, -34

const [x, , z] = point; // skips y

From object:

const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;
console.log(type, color, carat);


8-8 Object Literal Shorthand:
-----------------------------

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type, color, carat
};  

console.log(gemstone); // Prints: Object {type: "quartz", color: "rose", carat: 21.29}


Shortened Method Names:

Before:

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};

After:

let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};



8-10 Iteration
--------------

Iterable protocol

For... of loop

Data that is iterable, includes the data types String, Array, Map, and Set. Not Object data type (i.e. {}). Objects are not iterable, by default.

Biggest downside of a for loop is having to keep track of the **counter** and **exit condition**.

For loop:
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
```
For in loop
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```
Issue of using an index to access the values of the array
If you add any additional properties to the array's prototype, then those properties will also appear in the loop.



```
Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```


```
Prints:
0
1
2
3
4
5
6
7
8
9
function() {
 for (let i = 0; i < this.length; i++) {
  this[i] = this[i].toFixed(2);
 }
}
```

forEach() is actually an array method, so it can only be used exclusively with arrays. There is also no way to stop or break a forEach loop.


8-12 For...of loop
------------------

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```
```
Prints:
0
1
2
3
4
5
6
7
8
9
```


It’s good practice to use plural names for objects that are collections of values. That way, when you loop over the collection, you can use the singular version of the name when referencing individual values in the collection. For example, for (const button of buttons) {...}.



You can stop or break a for...of loop at anytime.

```
// Why is this first section used here?
Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};


const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
```
```
Prints:
1
3
5
7
9
```

The for...of loop will only loop over the values in the object.


8-14 Spread Operator
--------------------

The spread operator ( ... ) lets you expand, or spread, iterable objects into multiple elements.

```
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
```

Prints: Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

```
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
```

Prints: 2 3 5 7 11 13 17 19 23 29


**Previously, only concat() is available to combine multiple arrays**

```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
```

Prints: ["apples", "bananas", "pears", "corn", "potatoes", "carrots"]

**Using spread operator:**

```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits, ...vegetables];
console.log(produce);
```

Prints: [ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]


Rest parameter merge items in an array.
This following takes the values of the order array and assigns them to individual variables using destructuring. 
`total`, `subtotal`, and `tax` are assigned the first three values in the array.
`items` is assigned the _
rest_ of the values in the array (as an array).

```
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
```

Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]


**Variadic functions**

Variadic functions are functions that take an indefinite number of arguments.

```
sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);
```

`sum()` always return the total sum of the numbers.


**Argument Object**

The arguments object is an array-like object that is available as a local variable inside all functions. It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.

Implementation of our sum(). Notice how the arguments object could be used to handle the variable amount of numbers being passed to it.

```
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}
```

Issues:
1. sum() does not have parameters, but we know it can handle infinite params
2. Can be hard to understand (where did the args go?)






12-8 Setting the viewport
<metal name="viewport" content="width=device-width,initial-scale=1">



