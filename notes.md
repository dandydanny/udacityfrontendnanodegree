
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

