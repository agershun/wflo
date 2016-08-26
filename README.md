# wflo.js - flow diagram programming language

work in progress

(c) 2016 Andrey Gershun <agershun@gmail.com>

## Getting Started

### Installation
#### in Node.js
```bash
> npm install wflo
```
then add this module into your script:
```js
var wflo = require('wflo');
```
#### in browser
Copy `wflo.js` file into the folder, then include this file in the header:
```html
<script src="wflo.js"></script>
```
#### in browser (AMD)
```js
require('wflo', [], function(wflo){
	// ... your code is here
})
```
#### command-line interface
Install Wflo globally:
```bash
> npm install -g wflo
```

### First Steps
#### Create and run the very first wind
```js
var w = new wflo.Wind;
var n1 = w.add('"Hello World"');
var n2 = w.add('console.log');
w.link(n1,n2);
w.run();
```

A `.run()` function is asyncronous and it returns a promise, so you can use 
standard `.then()` and `.catch()` functions.
```js
var w = new wflo.Wind;
w.add('console.log',"Hello World!");
w.run().then(function(){
	console.log('Done.')
}).catch(function(err){
	console.log('Something is wrong.')
});
```


