
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

