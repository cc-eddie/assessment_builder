["html"]

****

There are a few major errors in the HTML below. Please circle those errors and write a short description of the error.

```
<!DOCTYPE>
<head>
<html>
	<title>My Document!<title>
</head>
<body>
	<img src="image.jpg">
		<p>This is a paragraph</p>
	</img>

	<div>
		<link href="http://google.com">Link to Google</link>
	</div>
</body>
</html>
```

****

```
<!DOCTYPE html>
<head>
<html>
<head>
	<title>My Document!<title>
</head>
<body>
	<img src="./image.jpg">
		<p>This is a paragraph</p>
	</img>

	<div>
		<link href="http://google.com">Link to Google</link>
	</div>
</body>
</html>
```

----

["html"]

****

Below is a snippet from a valid HTML page. What will display on the page?

```
<p>Hello <!-- World --> There</p>
<!-- <p>How are you?</p> -->
<p>I am awesome!</p>
```

```
<!-- <p>Hello World</p> -->
<p>How are you <!-- you?</p>
<p>I am --> so awesome?</p>
```

****


Hello There
I am awesome!


How are you so awesome?

----

["html", "css"]

****

Below is a snippet from a valid HTML page. Circle all of the elements which would be matched by the CSS selector ".complete"

```
<div class="complete">
	<span class="not_complete">Item One</span>
	<span class="not_complete">Item Two</span>
</div>
<div class="not_complete">
	<span class="complete">Item Three</span>
	<span class="not_complete">Item Four</span>
</div>
```

****


```
<div class="complete">                              <-
	<span class="not_complete">Item One</span>       <-
	<span class="not_complete">Item Two</span>      <-
</div>                                              
<div class="not_complete">
	<span class="complete">Item Three</span>        <- 
	<span class="not_complete">Item Four</span>
</div>
```

----

["css"]

****

Briefly describe each of the following CSS Selectors. Provide an example of an element that each selector would match.

`.complete`	


`#submit`


`h2`							


`h4.complete`


`#top:hover`							


`a[target="_blank"]`

****


`.complete` - class selector for 'complete' `<div class='complete'> Hello </div>`

`#submit`  - id selector for 'submit' `<div id='submit'> World </div>`

`h2` - tag selector for h2 `<h2> Hello World </h2>`

`h4.complete` - class selector for 'complete' on 'h4' tags `<h4 class='complete'> Completed <h4>`

`#top:hover` - id selector for 'top' while the cursor hovers over the element `<div id='top'> Hover me </div>`

----

["filepaths", "os"]

****

What is the difference between an absolute and a relative path. Give an example of each.

****


an absolute path provides the entire path from the root of the computer.

`/User/username/Desktop/`

a relative path provides a path in relation to the current file.

`../../Desktop/workspace`

----

["html", "css", "filepaths"]

****

Give the expected absolute path of mystyle.css. Assume that this link tag is found in the HTML file located at http://codecraftschool.com/home/about/hello.html

`<link rel="stylesheet" href="../../css/style/mystyle.css">`

****


`http://codecraftschool.com/css/style/mystyle.css`

----

["html", "css"]

****

What is a stacking context (hint: z-index). Give two examples of rules which start a new stacking context.

****


Stacking content is what happens when two elements share the same x,y coordinates on a page. 
The z-index is what determines what elemnent is displayed in front of the rest.
The lower the z-index the farther back that element is. 
z-index is also determined by the order that the elements are placed in the html. Elements that come later in the html file will, by default, appear on top of elements earlier in the file.

----

["hardware"]

****

Sort the following hardware interfaces from fastest (#1) to slowest (#8) for the CPU to access data from (assuming that your computer is in Boulder, CO)

[ ] Spinning Hard Drive Disk (HDD)

[ ] CPU L1 Cache

[ ] Solid State Drive (SSD)

[ ] Internet Server in California

[ ] CPU L2 Cache

[ ] Random Access Memory (RAM)

[ ] Internet Server in Hong Kong

[ ] Optical Media (DVD ROM)

****


[4] Spinning Hard Drive Disk (HDD)

[5] CPU L1 Cache

[3] Solid State Drive (SSD)

[7] Internet Server in California

[6] CPU L2 Cache

[1] Random Access Memory (RAM)

[8] Internet Server in Hong Kong

[2] Optical Media (DVD ROM)

----

["html", "css", "js", "http", "rest", "ajax"]

****

What do the following abbreviations stand for?

HTML

CSS

DOM

JS

HTTP

REST

CRUD

AJAX

****


HTML - HyperText Markup Language

CSS - Cascading Style Sheet

DOM - Document Object Model

JS - Javascript

HTTP - HyperText Transfer Protocol

REST - Representational state transfer

CRUD - Create Read Update Delete

AJAX - Asyncronous Javascript and XML

----

["javascript", "loops"]

****

What value is logged to console?

```
<script type="text/javascript">
var i = 3;
while (i < 10){
	i = i + 2;
}
console.log(i);
</script>
```

****


11

----

["javascript", "loops"]

****

What value is logged to console?

```
<script type="text/javascript">
var i = 0, a = [];
while ( i < 10 ) {
	a[i] = i * i;
	i = i + 1;
}
console.log(a[4]);
</script>
```

****


16

----

["http"]

****

What happens when a user instructs their web browser to fetch http://codecraftschool.com?

****


1. Browser extracts domain name from URL

2. Browser queries DNS for the IP of the URL

3. The browser sends a HTTP request to the web server

4. The server responds with a permanent redirect

5. ohe browse  follows the redirect

6. The server ‘handles’ the request

7. The server sends back a HTML response

8. The browser begins rendering the HTML

9. The browser sends requests for objects embedded in HTML

10. The browser sends further asynchronous (AJAX) requests

----

["bootstrap"]

****

What is Bootstrap?

****


Bootstrap is a free and open-source front-end web framework for designing websites and web applications. Library of css classes and ids.

----

["bootstrap", "css", "html"]

****

What would you tell the following poor soul on StackOverflow?

![Broken Bootstrap](./img/Bootstrap_Not_Working.png)

****


You have forgotten to include Bootstrap in your html file. Either bring in the CDN or include it locally.

----

["javascript", "variables"]

****

What will the following code log to console?

```
var a = 3;
var b = a;
var c = b + 1;
console.log(a, b, c);
```

****


3 3 4

----

["javascript", "conditionals"]

****

What will the following code log to console?

```
var a = 10;
if (a < 5) {
	console.log("Hello!");
} else if (a < 10) {
	console.log("Hi there!");
} else if (a < 20) {
	console.log("Howdy!");
} else if (a < 30) {
	console.log("Ahoy!");
} else {
	console.log("Whazzup!");
}
```

****


Howdy!

----

["javascript", "variables", "conditionals"]

****

What will the following code log to console?

```
var a = 10;
var b = 20;
if (a <= 10 && b < 30) {
	console.log("Goodbye!");
}
if (a < 20 || b < 30) {
	console.log("Sayonara!");
}
```

****


Goodbye!

Sayonara!

----

["javascript", "functions"]

****

What will the following code log to console?

```
function funcA() { console.log("AAA"); }
function funcB() { console.log("BBB"); }
setTimeout(funcA, 1000);
setTimeout(funcB, 500);
```

**** 


BBB

AAA

----

["javascript", "loops"]

****

What will the following code log to console?
What would be logged if line "B" came before line "A"?

```
var i = 0;
while (i < 10) {
	i = i + 1; // Line A
	console.log(i); // Line B
}
```

****


```
1    0
2    1
3    2
4    3
5    4
6    5
7    6
8    7
9    8
10   9
```

----

["javascript", "strings", "functions"]

****

What will the following code log to console?

```
function getInnerData (str) {
	return str.substring(2, str.length - 2);
}
function getData (str) {
	if (str[0] == "{") {
		str = getInnerData(str);
}
return str.split(":")[1];
}
console.log(getData("{{Container:Mason Jar}}"))
```

****


Mason Jar

----

["binary"]

****

Write out the following decimal numbers in binary
Example: 26 = 00011010

`88`

`9`

****


1011000

1001

----

["html", "javascript"]

****

What has to happen in order for the following code to log "Yes!" to the console?

```
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
</head>
<body>
	<button id="affirm">Affirm</button>

	<script>
		document.getElementById("affirm").onclick = function() {
			console.log("Yes!");
		}
	</script>
</body>
</html>
```

****


The button needs to be clicked

----

["javascript", "functions"]

****

What will the following code log to console?

```
function createSayFunction(greeting) {
	return function(name) {
		console.log(greeting + " " + name);
  }
}
var say = createSayFunction("Hello");
var tell = createSayFunction("Sup,");
say("User");
tell("User");
```

****


Hello, User

Sup, User

----

["arrays", "javascript"]

****


Write a function called findRange which takes an unsorted array as a parameter and returns the range of that array. The range is the difference between the smallest and largest number.

```
Examples:

findRange([3, 7, 3, 9, 12, 14, 2, 10]);
//range is (14 - 2) which means this returns 12

findRange([1,1,1,2,2,3,4]);
//returns 3

findRange([10, -10, 0, 0, 0]);
//returns 20
```

****


```
function findRange(arr) {
  var maxVal = -Infinity;
  var minVal = Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i]
    }
    if (arr[i] > maxVal) {
      maxVal = arr[i]
    }
  }

  return maxVal - minVal;
}
```

----

["javascript", "functions", "math"]

****

What will the following code log to console?

```
var x = 3;
function addTwo(y) {
	return y + 2;
}
addTwo(x);
console.log(x);
```

****


5

----

["javascript", "functions", "math"]

****

What will the following code log to console?

```
function addTwo(o) {
	o.a += 2;
}
var obj = {
	a : 3
};
addTwo(obj);
console.log(obj.a);
```

****


5

----

["javascript", "loops", "arrays"]

****

What will the following code log to console?

```
var myArray = [3,4,5,6];
for (var i = 0; i < myArray.length; i++){
	myArray[i] = myArray[i] + 3;
}
console.log(myArray);
```

****


[6, 7, 8, 9]

----

["javascript", "types"]

****

Give an example of each of the following types.

String

Number

Object

Array

Function

RegExp

****


String - "hello world"

Number - 42

Object - { age : 6, breed : collie, weight : 40lbs }

Array - [0,0,0,0,0]

Function - function add(x,y){return x+y}

RegExp - /hello/

----

["javascript", "arrays", "loops"]

****

What will the following code log to console?

```
var myArray = [];
var i;
while (myArray.length < 3) {
	myArray.push("");
	for (i = 0; i < myArray.length; i++) {
		myArray[myArray.length - 1] += "!";
  }
}
console.log(myArray);
```

****


! !! !!!

----

["javascript", "functions", "objects"]

****

What will the following code log to console?

```
var clock = {
	hours: 10,
	minutes: 30,
	sayTime: function() {
		console.log(this.hours + ":" + this.minutes);
  }
}
clock.sayTime();
```

****


10:30

----

["javascript", "comparison", "operators"]

****

Please evaluate whether each of the following bolded statements are true or false.

1.

```
var a = 3;
var b = 3;
a == b;
```

2.
 
```
var a = {};
var b = a;
a === b;
```

3.
 
```
var a = true;
var b = false;
a && !b;
```

4.

```
var a;
!!a;
```

5.

```
var a = 1;
var b = "1";
a == b;
```

6.

```
var a = 6;
var b = 6.0;
a === b;
```

7.

```
var a = false;
var b = false;
a || !b;
```

8.

```
var a = "";
!a;
```

****


1. true
2. true
3. true
4. true
5. true
6. true
7. true
8. true

----

["http"]

****

What is the difference between a GET and a POST request?

****


A GET request asks the server for data
A POST request sends data to the server

----

["javascript", "functions", "callbacks"]

****

What will the following code log to console?

```
function doWork(workToDo, callback) {
	console.log(workToDo);
	if (callback) {
    callback();
  }
}
doWork("Programming", function() {
	doWork("Coding", function() {
		doWork("Sleeping");
  });
});
```

****


Programming
Coding
Sleeping

----

["javascript", "objects", "loops"]

****

 What will the following code log to console?

```
var players = [
{	
		x : 10,
		y : 20,
		name : "Babbage"
},
{
		x : 10,
		y : 30,
		name : "Ada"
}
];
for (var i = 0; i < players.length; i++) {
	if (players[i].y > 20) {
		console.log("Winner: " + players[i].name);
}
}
```

****


Winner: Ada

----

["javascript", "regex"]

****

 Please evaluate whether each of the following bolded statements are true or false.

a.

```
var pattern = /a*b/;
**pattern.test(“aaaaaab”);**
```

b.

```
var pattern = /[abc].[abc]/;
**pattern.test(“cab”);**
```

c.

```
var pattern = /[abc].[abc]/;
**pattern.test(“aa”);**
```

e.

```
var pattern = /[0-9]*-?[0-9]+-[0-9]+/;
**pattern.test(“867-5309”);**
```

****


a. true

b. true

c. false

d. true


----

["javascript", "comparisons", "objects"]

****

Evaluate whether the following bolded expressions evaluate to true or false

```
var paul = {};
var leto = {};
**paul === leto;**
```

```
var shai = {};
var hulud = shai;
shai.length = 4;
**hulud.length == 4;**
```

****


true

true

----

["javascript", "strings", "arrays"]

****

What will the following code log to console?

```
var sentence = "Oh no! A giant sandworm!"
var words = sentence.split(" ");
console.log(words[4]);
```

****


sandworm!

----

["javascript", "OOP", "arrays", "new"]

****

What will the following code log to console?

```
function Character(name) {
	this.name = name;
};
var chars = [
  new Character("Paul Atreides"),
  new Character("Vladimir Harkonnen"),
  new Character("Leto Atreides")
]
console.log(chars[2].name);
```

****


Leto Atreides

----

["javascript", "loops"]

****

What will the following code log to console?

```
var a = ["a","b","c"];
for (var i in a) {
  console.log(i);
}
```

****


will print the indices of the array

0

1

2

----

["javascript", "arrays", "loops"]

****

What will the following code log to console?

```
var names = ["Paul", "Leto", "Vladimir"];
for (var name in names) {
	console.log(names[name]);
}
```

****


Paul

Leto

Vladimir


----

["javascript", "functions", "loops"]

****

Complete the inside of the for loop. The expected output is 0, 1, 4, 9, 16

```
function square( num ) {
	return Math.pow(num, 2);
}

for (var i = 0; i < 5; i ++ ) {

	console.log( ____________________________ );	
}
```

****


square(i)


----

["javascript", "scoping", "functions"]

****

Circle the code which accesses a variable from a "higher" or "outer" scope.

```
var outer = function ( a ) {
	var result;
	var inner = function ( b ) {
		return b * a;
	}
	result = inner(a);
	return result;
}
var answer = outer(5) + outer(4);
```

****


```
var outer = function ( a ) {
	var result;
  /**/
	var inner = function ( b ) {    <-
		return b * a;                 <-
	}                               <-
  /**/
	result = inner(a);
	return result;
}
var answer = outer(5) + outer(4);
```


----

["javascript", "objects", "functions"]

****

What will the following code log to console?

```
var obj = {
	foo: 5,
	bar: 7
};

function updateFoo ( thing ) {
	thing.foo = 3;
}
updateFoo(obj);

```

****


3

----

["javascript", "objects", "functions"]

****

What will the following code log to console?

```
var obj = {
	foo: 5,
	bar: 7
};
function updateBar ( val ) {
	val = 3;
}
updateBar(obj.bar);
console.log(obj.bar);
```

****


7

----

["javascript", "functions", "OOP"]

****

What will the following code log to console?

```
function CarryAll (capacity) {
this.capacity = capacity;
	this.fill = function (amt) {
		this.capacity -= amt;
	};
}

var carrierOne = new CarryAll(100);
carrierOne.fill(50);
carrierOne.fill(25);
console.log(carrierOne.capacity);
```

****


25

----

["javascript", "OOP", "prototype"]

****

a. What will the following code log to console?

```
function WormTooth(length) {
	this.length = length;
}
WormTooth.prototype = {
	getDamage : function() {
		return this.length * 3;
}
}

function crysKnife(fixed, length) {
	WormTooth.call(this, length)
	this.fixed = fixed;
	this.getDamage = function() {
		if (this.fixed) {
			return this.length * 10;
} else {
			return WormTooth.prototype.getDamage.call(this)
		}
}
}
crysKnife.prototype = WormTooth.prototype;

var weapon = new crysKnife(true, 10);
console.log(weapon.getDamage());

var offhand = new crysKnife(false, 4);
console.log(offhand.getDamage());
```

b. Draw the prototype chain for crysKnife and Weapon. (Hint: Remember that everything's prototype is Object.prototype). Feel free to use the back of this sheet if you need more room.

****


a.

100

12

b. 

[ student will submit a drawing ]

----

["javascript", "express", "node", "http"]

****

Below is the source code for an express server. Several of the following questions will refer to this code. Assume that this code is in the file "server.js" and is running, using the command "node server.js". Also assume that express and body-parser have been installed correctly.

What does the section of code marked //Q4 do?

What will my web browser display if I visit http://localhost:1997/requirement

What will my web browser display if I visit http://localhost:1997 via the URL bar

```
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var wizard = "voldemort";

app.use(bodyParser.json()); //Q4
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", function (req, res) {
	res.send("Yer a wizard, " + wizard);
});
app.post("/", function (req, res) {
	if(req.body.newuser.toLowerCase() != "voldemort") {
	wizard = req.body.newuser;
}
	res.redirect("/");
});
app.use(function (req, res, next) {
	res.status(404);
	res.send("Nothing to see here");
});
app.listen(1997, function () {
	console.log("Serving magic on Port 1997");
});
```

Write an HTML form which would allow a visitor to change the "wizard" variable

```
<form action="		         	" method="        ">




</form>
```

What will the browser display after submitting the form in the previous question?

****


What does the section of code marked //Q4 do?

have the server parse the request body as json

What will my web browser display if I visit http://localhost:1997/requirement

Nathing to see here

What will my web browser display if I visit http://localhost:1997 via the URL bar

Yer a wizard, voldemort


----

["javascript", "arrays", "objects", "loops"]

****

Given the following array of books, write a function, getBookByISBN(isbn) to return just the book with any given ISBN. Return null if no book with that ID exists in the array. Assume that the array will grow in the future, and this function needs to work for any number of books.

```
var books = [
	{
		isbn: "1858945674",
		title: "Magical Beasts and Where to Find Them"
  },
  {
		isbn: "1440336660",
		title: "Magical Drafts and Potions"
  },
  {
		isbn: "1440333157",
		title: "Intermediate Transfiguration"
  }
];
```

```
//testing - both should be true
getBookByISBN("1440336660").title == "Magical Drafts and Potions";
getBookByISBN("0000000000") == null;
```

****


```
function getBookByISBN(bookArr, isbn) {
  for(var i = 0; i < bookArr.length; i++) {
    if (bookArr[i].isbn === isbn) {
      return bookArr[i];
    }
  }
}

function getBookByISBN(bookArr, isbn) {
  for(var i in bookArr) {
    if (bookArr[i].isbn === isbn) {
      return bookArr[i];
    }
  }
}

```

----

["javascript", "express", "http", "node"]

****

Assume the following route is added to the web app from page one. 

```
app.post("/clear", function(req, res) {
	if (req.query.confirm == true &&
req.body.newuser == undefined
) {
		user = "voldemort";	
	}
res.redirect("/");
}
```

Briefly explain each of the following parts in this route:

`post`

`"/clear"`

`req, res`

`req.query`

`req.body`

`res.redirect`

****


`post`
run the Express 'post' function on the given parameters

`"/clear"`
the url path to be posted to

`req, res`
the request and response objects that contain information about the post

`req.query`
a property of the request

`req.body`
the main property of the request that holds data that has been passed from the front end

`res.redirect`
redirect the user to the given url path. 

----

["javascript", "node", "fs"]

****

Assuming that "creatures.json" exists, is readable, and contains valid JSON data, why will the following code always console.log "undefined"? How can we fix this so that we log all of the creatures to console?

```
var fs = require("fs");
var creatures;

fs.readFile("creatures.json", function(err, data) {
	if (err) {
		console.log("No creatures found");
		creatures = {};
		return;
	}
	creatures = JSON.parse(data);
});

console.log(creatures);
```

****


This will always log undefined because the creatures variable is set within the callback function. By the time that the console.log is called, creatures has not yet been set.

To fix this you can move the console.log inside of the callback function immediately after creatures has been set.

You could also turn fs.readFile into a Promise function and call the console.log in the .then() of the promise call

----

["react"]

****

When using `react`, what is the difference between `state` and `props`? When would you use one or the other?

**** 


props are at a higher scope than the state, sharing data between components.

The state stores data for the current component, only manipulating it for that component, not sharing the data

----

["SQL"]

****

TODO

Consider the following MYSQL Tables

![MYSQL Table](./img/SQLTable.png)

What will the result of the following queries be?

a.
SELECT username FROM users WHERE hire_date > "1981-01-01"

b.
SELECT username, elf_name FROM users LEFT JOIN house_elves ON house_elves.owner_id = users.id

----

["MVC"]

****

 Draw a simple diagram of "Model", "View", "Controller", and "User". Briefly explain how the four parts interconnect. Feel free to use the back of this sheet of paper.

****


[ student will submit a drawing ]

----

["javascript", "node", "fs"]

****

Consider the following node.js code:

```
var fs = require('fs');
fs.writeFile("../intro.txt", "Yer' a wizard", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Harry");
});
console.log("Hagrid");
```

a. In what order will "Hagrid" and "Harry" be logged to console?

b. If we run this program in /home/albusd/students/, what is the absolute path of the file that will be created?

c. Mark the place in the code where you would put logic which you only want to run after the file has been written.

****


a.

Hagrid

Harry

b.

/home/albusd/intro.txt

c.

where the console.log("Harry") is currently

----

["javascript", "node", "express"]

****

Consider the following node.js code. Assume express was installed correctly.

```
(function() {
	var express = require("express"); // Q 1
	var app = express();
	function respond(req, res) {
		res.write("Accio Web Request!");
	}
	app.get("/", respond); // Q 2
	var server = app.listen(10030); // Q 3
})();
```

There is an error in this code which causes the application to work incorrectly. What is it?

Assuming we have fixed the error, briefly explain the purpose of the lines marked with bold comments.

	Q1:

	Q2:

	Q3:

****


There is an error in this code which causes the application to work incorrectly. What is it?

the response is written, but not sent. res.end or res.send have not been called

Assuming we have fixed the error, briefly explain the purpose of the lines marked with bold comments.

	Q1: bring the express library into our current program for use

	Q2: when the server recieves a GET request to the root location, run the response function

	Q3: tells the server to listen on port 10030

----

["javascript", "node", "express", "body-parser"]

****

Consider the following node.js code. Assume express and body-parser were installed correctly.

```
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
function respond(req, res) {
	console.log("params: ", req.params);
	console.log("query: ", req.query);
	console.log("body: ", req.body);
	res.send("alohomora");
}
app.get("/", respond);
app.post("/", respond);
app.get("/wand/:core/:length", respond);
var server = app.listen(8080);
```

What will the server log to console in response to the following queries?

a.

params:  {}

query:  { length: '10', core: 'unicorn' }

body:  {}

b.

params: {}

query: {}

body: {}

c.

params: { core : 'phoenix', length: '11' }

query: {}

body: {}

----

["SQL"]

****

TODO

Consider the following MYSQL Tables

![MYSQL Table 2](./img/SQL_Table_2.png)

What will the result of the following queries be?

a.
SELECT username FROM users WHERE hire_date > "1981-01-01"


b.
SELECT username, elf_name FROM users LEFT JOIN house_elves ON house_elves.owner_id = users.id

****


----

["http"]

****

TODO

Explain why there is usually a delay of 24-48 hours between purchasing a domain, and having your website "show up" online.

****


---

["base", "binary", "hex"]

****

Write out the following decimal numbers in the given base
Example: 26 in base 2 (binary) = 00011010

88 in base 16 (hexidecimal)

9 in base 5

122 in base 60 (Sexagesimal)

****


88 in base 16 (hexidecimal)
58

9 in base 5
14

122 in base 60 (Sexagesimal)
22

----

["javascript", "variables"]

****

What will be logged to console when the following JavaScript code is run?

```
var a = 3;
var b = a + 2;
console.log(a);
console.log(b);
console.log(b + 2);
```

****


3

5

7

----

["javascript", "jquery", "callbacks", "async"]

****

Why does the following code throw an error, assuming that jQuery is available, and 'http://localhost/melange.txt' exists and contains space separated words?

```
var theSpice;
$.get('http://localhost/melange.txt', function(spice) {
	theSpice = spice;
});
console.log(theSpice.split(" "));
```

****


when the console.log is called, theSpice is still undefined. The callback has not had a chance to complete and set theSpice.

----

["javascript", "loops", "arrays"]

****

What will the following code log to console?

```
var arr = ["a","b","c"];
for (var i in arr) {
  console.log(i);
}
```

****


1

2

3

----

["javascript", "loops", "arrays"]

****

What will the following code log to console?

```
var arr = ["a", "b", "c"];
for (var i in arr) {
	console.log(arr[i]);
}
```

****


a

b

c

----

["javascript", "functions", "loops", "arrays"]

****

What will the following code log to console?

```
function square(i) { return i * i; }
function cube(i) { return i * i * i; }
var funcs = [square, cube, square, cube];
var nums = [3, 2, 2, 3];
for (var i = 0; i < funcs.length; i++) {
	console.log(funcs[i](nums[i]));
}
```

****


9

8

4

27

----

["javascript", "scoping", "functions"]

****

Circle the code which accesses a variable from a "higher" or "outer" scope.

```
var outer = function ( a ) {
	var result;
	var inner = function ( b ) {
		return b * a;
	}
	result = inner(a);
	return result;
}
var answer = outer(5) + outer(4);	
```

****


var inner = function ( b ) {
  return b * a;
}

----

["javascript"]

****

TODO

Briefly explain the following reserved words. Use the back of this sheet if you need more room.


a. function

b. var

c. new
			
d. return 

e. console.log

f. typeof

****


[ student will give descriptions ]

----

["javascript", "functions", "OOP", "this"]

****

What will the following code log to console?

```
function CarryAll (capacity) {
this.capacity = capacity;
	this.fill = function (amt) {
		this.capacity -= amt;
	};
}

var carrierOne = new CarryAll(100);
carrierOne.fill(50);
carrierOne.fill(25);
console.log(carrierOne.capacity);
```

****


25

----

["javascript", "math", "loops"]

****

Write a function which determines if an integer > 1 is prime. An integer is prime if it is only evenly divisible by 1 and itself. For example, 2, 3, and 5 are prime, but 4 is not, since 2*2 = 4. Use the back of this sheet or other paper because you'll definitely need more room.

****


```
function isPrime(num) {
  if (num < 1) {
    return false;
  }

  for(var i = 2; i < value; i++) {
      if(value % i === 0) {
          return false;
      }
  }

  return true;
}
```

----

["javascript", "jquery", "ajax", "express"]

****

Write a jQuery AJAX request that would console.log in the browser the number of students returned given that the following endpoint exists and is on a live server at http://hogwarts.magic/. Use the back of this sheet because you will need more room.

```
var students = ['Malfoy', 'Crabbe', 'Goyle']; // may change in future
app.get('/students', function(req, res) {
	res.send(JSON.stringify(students));
});
```

****


```
$.get('http://hogwarts.magic/students', function(response) {
  console.log(JSON.parse(response).length) 
})
```

----

["javascript", "objecs", "arrays", "functions", "loops"]

****

Write a function, `getUsersCreatedBefore` which takes a timestamp (number) and an array of "user" objects, and returns an array of user objects whose accounts are older than that timestamp. Use the back of this page because, again, you will need more room.

EXAMPLE

```
var users = [
	{name: "Harry", timestamp: 1024},
{name: "Hermione", timestamp: 1700},
{name: "Ron", timestamp: 950}
];
console.log(getUsersCreatedBefore(users, 1500));
//logs [{name: "Harry", timestamp: 1024}, {name: "Ron", timestamp: 950}];
```

****


```
function getUsersCreatedBefore(userArr, time) {
  var usersBeforeTime = [];
  for (var u in userArr) {
    if (userArr[u].timestamp < time) {
      usersBeforeTime.push(userArr[u]);
    }
  }
  return usersBeforeTime;
}
```

----

["javascript", "arrays", "objects", "loops"]

****

Given an array of objects, such as the ones below:

```
var players = [
	{name: "Ada", score: 30},
	{name: "George", score: 15},
	{name: "Charles", score: 25}
];
var otherplayers = [
	{name: "Anne", score: 25},
	{name: "William", score: -5}
];
```

Write a function called getWinner, which takes in an array with the format of players, and returns the name of the winning player (the player with the highest score). Here's an example of how calling the function should work. Use the back of this page if you need more space.

```
var winner = getWinner(players);
var otherwinner = getWinner(otherplayers);
console.log(winner); // "Ada"
console.log(otherwinner); // "Anne"
```

****


```
function getWinner(playerArr) {
  var winner;
  var maxScore = -Infinity;
  for (var p in playerArr) {
    if (playerArr[p].score > maxScore) {
      winner = playerArr[p];
    }
  }
  return winner;
}
```

----

["javascript", "loops"]

****

Write four functions that compute the sum of the numbers in an array: using a "traditional" for-loop, a while-loop, a for-in-loop, and a for-of-loop. Extra credit: Also compute the sum using reduce, and using recursion.

****


```
function sumOne(numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}
```

```
function sumTwo(numArr) {
  var sum = 0;
  var i = 0;
  while (i < numArr.length) {
    sum += numArr[i];
    i += 1;
  }
}
```

```
function sumThree(numArr) {
  var sum = 0;
  for (var i in numArr) {
    sum += numArr[i];
  }
  return sum;
}
```

```
function sumFour(numArr) {
  var sum = 0;
  for (var i of numArr) {
    sum += i;
  }
  return sum;
}
```

```
function getSum(total, num) {
    return total + num;
}
function sumFive(numArr) {
  sum = numbers.reduce(function(total, num) {
    return total + num;
  });
  return sum;
}
```

```
function sumSix(numArr) {
  if (numArr.length === 1) {
    return numArr[0];
  }
  else {
    return numArr.pop() + array_sum(numArr);
  }
}
```

----

["javascript", "loops", "arrays"]

****


Write a function which takes in an array of integer numbers. Return true if the difference between any two adjacent numbers is always -1, 0, or 1. Return false otherwise.

Examples:

```
oneDiff([10, 11, 11, 10, 9, 10]) === true
oneDiff([-100, -10, -1, 0]) === false
oneDiff([0, 0, 0]) === true
oneDiff([3, 2, 1, 2, 3]) === true
oneDiff([1, 2, 4]) === false
```

****


----

["javascript", "loops", "arrays"]

****

What will the following code log to console?

```
var arr = [["X", "O", "X"],["O", "X", "O"],["X", "O", "X"]];
for ( var i in arr ) {
	console.log(arr[i][1]);
}

for ( var i in arr ) {
	console.log(arr[i][i]);
}
```

****


O

X

O

X

X

X

----

["javascript", "functions", "loops"]

****

What will the following code log to console?

```
function mkFtn(i) {
	return function() {
		console.log(i + 3);
  }
}
var ftns = [];
for (var i = 0; i < 10; i ++) {
  ftns.push(mkFtn(i));
}
for (var f of ftns) {
	f();
}
```

****


3

4

5

6

7

8

9

10

11

12

----

["javascript", "functions", "loops", "arrays"]

****

Write a function "winHoriz" which returns the player's symbol if that player has three-in-a-row horizontally in a game of tic-tac-toe. Otherwise return false.

```
winHoriz([
["O", "O", "X"],
["X", "X", "X"],
["O", "O", " "]
]); // --> "X"
winHoriz([
["X", "O", "X"],
["O", "X", "O"],
["X", "O", "X"]
]) // --> false
winHoriz([
["O", "X", "X"],
["X", "X", "O"],
["O", "O", "O"]
]) // --> "O"
```

****


```
function winHoriz(ticTacGame) {
  for (var i in ticTacGame) {
    if (ticTacGame[i][0] == ticTacGame[i][1] && ticTacGame[i][1] == ticTacGame[i][2]) {
      return true
    }
    else {
      return false;
    }
  }
}
```

----

["javascript", "node", "express"]

****

As best you can from memory, write an express webserver that simply responds with "hello world" as text when the user visits the site on port 3000. As extra challenge: 


Include 404 and 500 handlers.

Serve static files using a "public" folder

Include body-parser and express-session

Also respond with "X is awesome!" if the user POSTs some value for X to "/awesome"

****


```
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function(req, res) { 
  res.send('hello world');
});

app.use(express.static('public'));

app.use(function(req, res, next) {
	res.status(404);
	res.send("404 Error - File Not Found");
});

app.use(function(err, req, res, next) {
	console.log(err);
	res.status(500);
	res.send("500 Error - Server Error");
});

app.listen(3000);
```

----

["vue"]

****

TODO

Assume that the following Vue app is created and running on localhost:8080/index.html

```
<div id="app"> ①
  <input type="text" v-model="greeting"> ②
  {{ greeting }} ③
  <button v-on:click="sayHi">Say Hi</button> ④
</div>
<script src="https://unpkg.com/vue"></script> ⑤
<script>
  new Vue({ ⑥
    el: '#app', ⑦
    data: { ⑧
      greeting: "hello world" 
    },
    methods: { ⑨
      sayHi: function() { 
        this.greeting = "hello world" ⑩
      }
    }
  })
</script>
```

Describe each of the lines marked with circled numbers in the previous vue app.

①

②

③

④

⑤

⑥

⑦

⑧

⑨

⑩

****


Describe each of the lines marked with circled numbers in the previous vue app.

①

②

③

④

⑤

⑥

⑦

⑧

⑨

⑩

----

["vue"]

****

TODO

Describe the difference between the following two snippets of vue code. Assume that the_value and change_value exist and are valid.

```
a. <input type="text" v-on:change="change_value" v-bind:value="the_value">
b. <input type="text" v-model="the_value">
```

----

["javascript", "strings", "functions"]

****

Write a function to see if a string contains a valid set of open and close parentheses. Return true if the string is "valid", return false otherwise.

Test cases:

```
"()()" → true (matches)
"(())" → true (matches)
"(()(()))" → true (matches)
"" → true (valid to have no parens)
"())" → false (extra close paren)
")(()" → false (unmatched closing paren -- the first one)
```

****


```
function matchingParens(stringWithParens) {
  var open = 0;
  var closed = 0;
  for (var i in stringWithParens) {
    if (stringWithParens[i] === '(') {
      open += 1
    }
    else if (stringWithParens[i] === ')') {
      closed += 1;
    }
  }
  if (open === closed) {
    return true;
  }
  else {
    return false;
  }
}
```

---

 What will the following code log to console?
 
```
function createSayFunction(greeting) {
	return function(name) {
		console.log(greeting + " " + name);
    }
}
var say = createSayFunction("Hello");
var tell = createSayFunction("Sup,");
say("User");
tell("User");
```

----

["javascript", "strings", "functions"]

****

What will the following code log to console?

```
function getInnerData (str) {
	return str.slice(1, str.length - 1);
}
function getData (str) {
	var container = str.split(":")[1];
	if (container.charAt(0) == "{") {
		container = getInnerData(container);
}
return container;
}
console.log(getData( "Container:{Backpack}" ));
console.log(getData( "Container:{Shoulder Bag}" ));
```

****


Backpack

Shoulder Bag

----

["javascript", "falsy", "types"]

****

List the six falsy values in JavaScript.

****


false

0

"" (empty string)

null

undefined

NaN

----

["javascript", "loops"]

****

 Write three programs, one using a while loop, one using a for loop, and one using a do-while loop, which prints each number up to but not including ten, and its square:

```
1 : 1
2 : 4
…
9 : 81
```

****


```
function printNumsOne() {
  var i = 0;
  while (i < 10) {
    console.log(i);
    i++
  }
}
```

```
function printNumsTwo() {
  for (var i = 0; i < 10; i ++) {
    console.log(i)
  }
}
```

```
function printNumsThree() {
  do {
    console.log(i);
  }
  while (i < 10);
}
```

----

["javascript", "strings", "loops"]

****

Write a program which, without using the built-in string methods (use a loop!),

Prompts the user for a string.

Prompts the user for a "start" number.

Prompts the user for an "end" number.

Prints out the substring of the string, from the start index, up to but not including the end index.

For example: "hello world!", 3, 5 would print "lo". "abcdef", 0, 4 would print "abcd".

Hint: "abc".length == 3

Hint: "abc".charAt(1) == "b"

****


```
function subStringLoop(string, start, end) {
  sub = '';
  while (start < end) {
    sub += string.charAt(start);
    start += 1;
  }
  return sub;
}
```

----

["javascript", "loops"]

****

Write a program which asks the user to input a number, then prints the squares of all integers up to (but not including) that number.

****


```
function squaresUpTo(num) {
  for (var i = 0; i < num; i++) {
    console.log(i * i);
  }
}
```

----

["javascript", "loops"]

****

Write three programs, one using a while loop, one using a for loop, and one using a do-while loop, which prints each of the integers from 100 to 1 inclusive, descending, by twos (100, 98, 96, …). 

****


```
function biscendOne() {
  var i = 100;
  while (i > 0) {
    console.log(i);
    i -= 2;
  }
}
```

```
function biscendTwo() {
  for (var i = 100; i > 0; i -= 2) {
    console.log(i);
  }
}
```

```
function biscendThree() {
  var i = 100;
  do {
    console.log(i)
    i -= 2;
  }
  while (i > 0);
}
```

----

["javascript", "algorithms"]

****

TODO

Write a program which is a cypher:

Ask the user for some input. So that the code is manageable, assume that they will only use the letters A-E.

For each of the letters in their input, compute the letter rotated by 3. 

Rotating past the end of the alphabet returns us to the beginning. (e.g. A -> C, D -> A, E -> B). Remember that we're only using the letters A-E for now.
Console.log the user's original string, rotated.

Hint: to get a letter out of a string: if we have a string in variable str, then str.charAt(2) will be the letter at index 2 of the string. 

The first letter in a string is at index 0. e.g. "abc".charAt(1) == "b".

****


[ student will submit code ]

----

["html"]

****

Write HTML which would display as the following in chrome. Feel free to use the back of this sheet of paper. Note the use of a table for displaying the acronym definitions. If you're not sure about a tag, underline it. This is just HTML, no CSS or JavaScript.

![HTML](./img/html.png)

****


```
<h1> Hello HTML! </h1>
<br>
<table>
  <tbody>
    <tr>
      <td>
        HTML
      </td>
      <td>
        Hyper Text Markup Language
      </td>
    </tr>
    <tr>
      <td>
        CSS
      </td>
      <td>
        Cascading Style Sheets
      </td>
    </tr>
    <tr>
      <td>
        JS
      </td>
      <td>
        JavaScript
      </td>
    </tr>
  </tbody>
</table>

<ul>
  <li>
    HTML is Cool!
  </li>
</ul>
```
