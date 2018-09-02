
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

An array-like object that is available as a local variable inside all functions. It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.

Implementation of our sum(). 
Notice how the arguments object could be used to handle the variable amount of numbers being passed to it.

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

Fortunately, with the addition of the rest parameter, you can rewrite the sum() function to read more clearly.

```
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```

This version of the sum() function is both more concise and is easier to read. Also, notice the for...in loop has been replaced with the new for...of loop.




** Quiz 8-16 **

```
function average(...nums) {
    // When no arguments are provided, return 0
    if (nums.length === 0){
      return 0;
    }

    let average = 0;
    let total = 0;

    // Add up all arguments
    for (const num of nums ){
        total += num;
    }

    // Calculate average
    average = total / nums.length;

    return average;
}
```

// Look up `const num in nums`, vs `const num of nums`


9-* Shell Workshop
------------------


`curl -o danny.txt -L 'https://dandydanny.org'`
`-L` Open (and follow redirects)
`-o` saves received data

`curl -L https://tinyurl.com/zeyq9vc | grep fish | wc -l` or
`curl -L https://tinyurl.com/zeyq9vc | grep -c fish`
Get dictionary, search and output for the word fish, then word count each resultant line

`echo $LOGNAME`
Displays current logged-on username

Can configure custom bash prompts using $PS1 variable

Default: `echo $PS1`
`\h:\W \u\$` displays `Sagan:~ danny$`
`http://bashrcgenerator.com/` - useful for configuring $PS1 variable

`alias ll='ls -lAhGF'` set alias
`alias` by itself will return all active aliases

Resources:
`https://www.bash.academy/`
`http://www.tldp.org/LDP/Bash-Beginners-Guide/html/`
`http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html`
`https://regexr.com/`


Git
---

Setup VSCode as Git's default editor:
`git config --global core.editor "code --wait"`

With Sublime:
`git config --global core.editor "'/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl' -n -w"`

With Atom:
`git config --global core.editor "atom --wait"`


12-2 Navigating Git Log
-----------------------

* to scroll down, press
  * j or ↓ to move down one line at a time
  * d to move by half the page screen
  * f to move by a whole page screen
* to scroll up, press
  * k or ↑ to move _up_ one line at a time
  * u to move by half the page screen
  * b to move by a whole page screen
  * press q to quit out of the log (returns to the regular command prompt)

`git log --oneline`

This command:

* lists one commit per line
* shows the first 7 characters of the commit's SHA
* shows the commit's message

`git log --stat`

This command:

* displays the file(s) that have been modified
* displays the number of lines that have been added/removed
* displays a summary line with the total number of modified files and lines that have been added/removed















19 The Document Object Model
----------------------------

Whenever the browser encounter angle brackets `<` `>` it emits `StartTag` HTML token. 
Work done by tokenizer, and tokens are consumed and turned into node objects. 

StartTag token that are embedded in another StartTag-EndTag token signal the parent-child relationship.

 * HTML is received
 * HTML tags are converted to tokens
tokens are converted to Nodes
 * Nodes are converted to the DOM


Tokens:
* DOCTYPE
* start tag
* end tag
* comment
* character
* end-of-file

This list of tokens then goes through the tree construction stage. 
The output of this stage is a tree-like structure - this is the DOM.

> a tree structure that captures the content and properties of the HTML and all the relationships between the nodes

> the DOM is the full, parsed representation of the HTML

DOM is a model (representation) of the relationships and attributes of the HTML document that was received.

Document Object Model <--> Object Model of the Document

DOM can be accessed using a special object provided by the browser: `document`

The document object is provided by the browser and is a representation of the HTML document. This object is not provided by the JavaScript language.

`document` object is not part of JavaScript, but is expected to already exist and be freely accessible to JavaScript code.

**Recap**

The DOM stands for "Document Object Model" and is a tree-like structure that is a representation of the HTML document, the relationship between elements, and contains the content and properties of the elements.

The DOM is *not*:

* part of the JavaScript language

The DOM is:

* constructed from the browser
* is globally accessible by JavaScript code using the `document` object

 `document` object is an object; it has key/value pairs.

DOM method:
`document.getElementById()`

Does not need a hash mark prepended to ID, since it already knew to expect ID:

```
// Select the element by the ID "footer"
document.getElementById('footer');
```

Can assign to variable and use value later:
`const footer = document.getElementById('footer');`

Recap:
* it is called on the document object
* it returns a single item

Resource:
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

Select multiple DOM elements (notice the 's' in Elements):
* `getElementsByClassName('highlight-spanned')`
* `getElementsByTagName('p')`

They return an array-like thing called `HTMLCollection` of found elements.

```
// select all elements that have the class "accent-color"
document.getElementsByClassName('accent-color');

// select all "span" elements
document.getElementsByTagName('span');
```

19-6 The Node Interface
-----------------------

Order of operation on how the DOM is constructed (first to last)
* CHaracters
* Tags
* Tokens
* Nodes
* DOM

Node = Class, blueprint, interface, with properties and methods
node = object, stuff built from the blueprint

interface = blueprint
properties = data
methods = functionality

Ex:
```
const bodyEl = document.body
bodyEl.baseURI
//returns URI of current page
```

Element Interface is a blueprint for creating elements
it is a descendent of the Node Interface.
Element Interface inherits all of the Node Interface's properties and methods.
This means that any element (lowercase "e"!) that was created from the Element Interface is also a descendent from the Node Interface...which means the element (lowercase "e"!) is also a node (lowercase "n"!).

In Chrome DevTools, `$0` is the current selected element.
```
$0.hasAttribute('class')
// returns true if element has class attribute  
$0.className
// returns the class name of the element, such as "highlight-spanned"
```

Element interface also has a .getElementsByClassName() method
The Element Interface inherits from the Node Interface, not the Document Interface
The Element Interface has its own `.getElementsByClassName()` that does the exact same thing as the one on the `document` object.

Can use the `document` object to select an element, then you can call `.getElementsByClassName()` on that element to receive a list of elements with the class name that are descendents of that specific element

```
// selects the DOM element with an ID of "sidebar"
const sidebarElement = document.getElementById('sidebar');

// searches within the "sidebar" element for any elements with a class of "sub-heading" 
const subHeadingList = sidebarElement.getElementsByClassName('sub-heading');
```

Both of Node and Element interfaces have properties and methods. 
Element Interface inherits all of the properties and methods from the Node interface.

These DOM methods to select by ID, class, or tag are similar:

* .document.getElementById()
* .document.getElementsByClassName()
* .document.getElementsByTagName()

`.querySelector()` combines all three, based on the argument supplied:

```
// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');
```

⚠️ `.querySelector()` Returns A Single Element - if there are multiple ones found, it'd return the *first* one.


Find the first paragraph element that also has a class of callout
```
document.querySelector('p.callout');
```
Find the first paragraph element that has a sub-element with a class of callout
```
document.querySelector('p .callout');
```


`.querySelectorAll()` return a NodeList of all elements with a certain class or all of one type of element
```
// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');
```

Find all paragraph elements that are descendents of elements that have the class: articles
```
document.querySelectorAll('.articles p')
```

NodeList is not an array, so we can't use `.map`, but NodeList provides `.forEach` method.
For browser that doesn't support `.forEach`, can iterate using for loop.

```
const listOfElements = document.querySelectorAll('h2');

for (let i = 0, i < listOfElements, i++){
  console.log('i is ' + i);
  console.log(listOfElements[i]);
}
```

```
const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}
```

`console.dir(object);` displays JS objects.



20 Creating Content with Javascript
-----------------------------------

* .innerHTML - get and set HTML content in element
* .textContent - get and set text content in element
* .innerText - get visible text content in element

Every element inherits properties and methods from the Element Interface.
This means that every element has an `.innerHTML` property, represents the markup of the element's content.

Can:
* get an element's (and all of its descendants!) HTML content
* set an element's HTML content

`.innerHTML` is a property on an element.
`.innerHTML` returns a `DOMString`.

The `.innerHTML` property sets or returns the HTML content _inside_ the selected element (i.e. between the tags).

There's also the rarely used `.outerHTML` property. `.outerHTML` represents the HTML element itself, *as well as its children*.

```
const innerResults = document.querySelector('#pick-me').innerHTML; console.log(innerResults);
// logs the string: "Greetings To All!"

const outerResults = document.querySelector('#pick-me').outerHTML; console.log(outerResults);
// logs the string: "Greetings To All!"
```

`.innerHTML` will get/set an element's *HTML* content.
 If we just want the text content, we can use `.textContent`

The `.textContent` property will:

* set the text content of an element and all its descendants
* return the text content of an element and all its descendants

```
nanodegreeCard.textContent
// returns "New! Data foundations Nanodegree...
nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";
// replaces text in DOM
```

If given string with HTML tags, `.textContent` will make it show up as text.
If needing to insert HTML tags, use `.innerHTML`

```
myElement.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors';
// tag shows up as text

myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors'; 
// tag rendered
```

`.textContent` sets/gets the text content of an element.

`.innerText,` returns visible text as shown, abiding by CSS rules, if applied (display: none, captilization, etc)

20-3 Adding new page content
----------------------------

`.createElement()` method is a method on the document object:

```
// creates and returns a <span> element
document.createElement('span');

// creates and returns an <h3> element
document.createElement('h3');
```

```
const container = document.creatElement('span');
container // returns <span></span>

container.textContent = ", right now!"

container // returns <span>, right now!</span>, but does not yet show on page
```


using document.createElement() to create an element didn't actually add that newly created element anywhere on the page

Creating an element...just creates it. It doesn't add it to the DOM

Since the element isn't added to the DOM, it doesn't appear in the page (DOM is the parsed representation of the page)

.appendChild() method to append (add to the end) an element to the page

to use the .appendChild() method, it needs to be called on another element, not the document object

```
// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);
```

`.appendChild()` methodmust be called on an existing element. You can't call this on the `document` object.

Just like you created new elements with the `.createElement()` method, you can also create new text nodes using the `.createTextNode()` method.

* creates an paragraph element
* creates a text node
* appends the text node to the paragraph
* appends the paragraph to the tag

```
js const myPara = document.createElement('p'); 
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph); document.body.appendChild(myPara);
```

`.textContent` property: the code below will provide the exact same result:

```
js const myPara = document.createElement('p');
myPara.textContent = 'I am the text for the paragraph!'; 
document.body.appendChild(myPara); `
```

Therefore, instead of creating a new text node and appending it to an element, it's faster and easier to just update the element's text with the `.textContent` property.


```
const mainHeading = document.querySelector('#main-heading');
const otherHeading = document.querySelector('#other-heading');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
// mainHeading has 3 exclaimation marks
otherHeading.appendChild(excitedText);
// mainHeading's exclaimation mark disappears, and otherHeading now has 3 exclaimation marks
```
The `.appendChild()` method will move an element from its current position to the new position.

By definition, the `.appendChild()` method will add an element as the last child of the parent element. It's impossible to put it as the first child or anywhere else...it has to be the last child.

`.insertAdjacentHTML()` gives flexibility on where to add the child element. Two arguments:

* the location of the HTML
* the HTML text that is going to be inserted

First argument is location:

* `beforebegin` – inserts the HTML text as a previous sibling 
* `afterbegin` – inserts the HTML text as the first child 
* `beforeend` – inserts the HTML text as the last child 
* `afterend` – inserts the HTML text as a following sibling

```
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->
```

```
const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
```

**Add New Page Content Recap**

* `createElement()` to create new elements
* `appendChild()` to add a child element to a parent element as its last child
* `createTextNode()` to create a text node
* `insertAdjacentHTML()` to put HTML text anywhere around an element

Some important things to note are:

* if an element already exists in the DOM and this element is passed to `.appendChild()`, the `.appendChild()` method will move it rather than duplicating it
* an element's `.textContent` property is used more often than creating a text node with the `.createTextNode()` method
* the `.insertAdjacentHTML()` method's second argument has to be text, you can't pass an element

20-4 Remove Page Content
------------------------

`.removeChild()` - opposite of the `.appendChild()` method; requires: a parent element & the child element that will be removed.
```
<parent-element>.removeChild(<child-to-remove>);
```
Both require access to parent to function.  

However, we don't actually need to have the parent element because there is a workaround.

Just like the `.firstElementChild` property can be called on a parent element to access its first element, every element also has a `parentElement` property that refers to its parent.

If we have access to the child element that we're about to add or remove, you can use the `parentElement` property to "move focus" to the element's parent. Then we can call `.removeChild()` (or `.appendChild()`) on that referenced parent element.

```
const mainHeading = document.querySelector('h1');

mainHeading.parentElement.removeChild(mainHeading);
```

`remove()` can be called directly on the element to delete.

```
const mainHeading = document.querySelector('h1');

mainHeading.remove();
```

20-5 Style Page Content with Javascript
---------------------------------------

CSS specificity, from least specific to most specific:
* rules in a style sheet
* rules in `<style>` tag
* rules in a tag's style attribute

The closer the style rule is to an element, the more specific it is.

```
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'red';
```

When using the .style property, you can only modify one CSS style at a time.

Use the `.style.cssText` property to set multiple CSS styles at once

```
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
```

Notice that when using the `.style.cssText` property, you write the CSS styles just as you would in a stylesheet; so you write `font-size` rather than `fontSize`. This is different than using the individual .style.<property> way.








12-8 Setting the viewport
<metal name="viewport" content="width=device-width,initial-scale=1">

12-10 Max-width
Catch-all to dis-allow media overflowing beyond container:

img, embed, object, video {
  max-width: 100%;
}



13-13 Complex media queries

//Decision based on if width between 500 and 600 px
@media screen and (min-width: 500px) and (max-width: 600px) {
  .yes {
    opacity: 1;
  }
  .no {
    opacity: 0;
  }
}

14-9 Hamburger Menu

//JS used to toggle .open class

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

//CSS

nav {
  width: 300px;
  position: absolute;
  /* This trasform moves the drawer off canvas. */
  -webkit-transform: translate(-300px, 0);
  transform: translate(-300px, 0);
  /* Optionally, we animate the drawer. */
  transition: transform 0.3s ease;
}
nav.open {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}

//Stop even propagation
e.stopPropagation()

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#Example_5:_Event_Propagation

//CSS catch-all so embedded contents don't overflow container:img,
video,
object,
embed {
    max-width: 100%;
}



