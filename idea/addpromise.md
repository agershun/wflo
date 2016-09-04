# Resolve a promise hell
## Add promises

```js
var w = wind();

var p1 = w.add(new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve(1);
	},100);
});

var p2 = w.add(2);

var p3 = w.add(function(data) {
	return a[0]+a[1];
});

w.link(p1,p3);
w.link(p2,p3);
w.run().then(function(data){
	console.log(data);
});
```

### Summator

var w = wind();

var n1 = w.add(1);
var n2 = w.add(function(){
	return 2;
});
var n3 = w.add(function(data,done){
	setInterval(function(){done(3);},1000);
});
var n4 = w.add(function(){
	return new Promise(function(resolve, reject){
		resolve(4);
	});
});
var n5 = w.add(function(data){
	return data[0];
});

var nsum = w.add(function(data){
	return data.reduce(0,function(v,s){return v+s});
});

w.link([n1,n2,n3,n4,n5],nsum);

w.run(0,function(data){
	console.log(data[0]);
},function(err){
	console.log('Error:', err);
});

/**
	@example
		w.add(10), w.add('string'), w.add(true), w.add([1,2]), w.add({a:1});
		w.add(function(data){});
		w.add(function(data,callback){});
		w.add(function(data){return new Promise});
		w.add(new Promise(...));

		@param data {array|object};
		@return {any};
*/


### Components

var n1 = w.add('Hello World!');
var n2 = w.adc({comp:'console.log'});
w.link(n1,n2);
w.run();

Labels
======
let w = wflo();
w.add('Hello Word!','hello');
w.add((s)=>console.log(s), 'log');
w.link('hello','log');
w.run();

Simple
======
let w = wflo()
w.link(w.add('Hello World'), w.add(s=>console.log(s)));
w.run();

Timer
=====
var n1 = w.adc('timer',[1000]), n2 = w.adc('log');
w.link(n1,n2);
w.run({timeout:5000}).timeout(()=>console.log('Timeout'));

Timer + timeout
===============
wflo.fn.log = console.log.bind(console);

w.adc(1,'timer',[1000]), 
w.adc(2,'log'), 
w.link(1,2);
w.adc(3,'timeout',[5000]);
w.adc(4,'log',['Timeout!']);
w.link(3,4);
w.link(4);
w.run();

Link to wind
============
w.link(null,1);


Callbacks
=======
then()
catch()
notify()
timeout()
idle()

wulp (recursion)
=====================
var wflo = require('wflo');
wflo.ext.wulp = require('wflo-ext-wulp');
var src = ['src/01start.js','02body.js'];
var w = wflo()
	.add('wulp.watch',[src])
	.add('wulp.merge',{src:src,dest:'dest/wflo.js'})
	.add('log',['Source files merged...'])
//	.nl() 						// new line
	.insert('timer',[50000]) 		// stop after 50 seconds
	.add('stop',[w])
	.run();

> wflo merge & -- run merging

Wflo, Wind, Node, Edge 
======================

function register(server,browser) {
	wflo().add('log',['Server'],{at:server}).add('log',['Browser'],{at:browser});
}

server = undefined;
browser = true;

wflo.register('./aaa',{master:'192.168.0.1', slave:'192.168.0.2'});
Регистрация сети
- вызов первого аргумента с параметрами
- как серилизовать данные, особенно функции?

.add([label-string,] component-string[, params-array][, metadata-object])
.adc([label-string], string/number/bool/object/function [, params-array][, metadata-object] )

Что делать со строкой во втором аргументе - когда это объект, а когда - компонент...


Неоднозначность...
add('timer',[1000]);
add('Hello World'); //?

add('string',['Hello World']).add('log')
wflo().add('number',[123]).add('log').run().then().then().catch();
wflo().ads('Hello World').add('log');

Единственная разница - add добавляет компоненту, а adc - строку

.add() - add simple node
.adc() - add component

Description of components
=========================
var my = wflo.ext.my = {};
my.print = {
	run:function(data){
		// debug information
		if(this.mode.debug == 1) {
			this.color('green');
			this.log('my.print',data);
		};
		this.log(data[0]);
	},
};
wflo().add('my.print',[10]).debug(1).run();

wflo.ext.test = function(){console.log();}

wflo().add(10).add('test').run([],{timeout:3000},{timeout:tcb, finish:cb});

wflo.ext('ajax'); 
wflo().add('ajax.get',['rbc.ru']).add('save',['//test/a.html']).run();

wflo().add('a#a').add('loop',[])

wflo.use('http','');

wflo = new Wflo();
var wflo = require('wflo').Wflo();
wflo.use('http','');

Example
=======
wflo()
	.add('http.get',['http://rbc.ru'])
	.add('$',['h2'])
	.out('text')
	.add('log')
	.run();

http.get('http://rbc.ru') >> $('h2') text >> log();


Example
=======

wflo().adv('http://rbc.ru').add('a#http.get').add('$',['h2']).out('text').add('log')
.nl().adv('http://cnn.com').add('a#').run();

'http://rbc.ru' >> a#http.get() >> $('h2') text >> log();
'http://cnn.com' >> a#;

'http://rbc.ru' -> a#http.get() -> $('h2') text -> log();
'http://cnn.com' -> a#;

'http://rbc.ru' => a#http.get() => $('h2') text => log();
'http://cnn.com' => a#;

News aggregator
===============
'http://rbc.ru' => a:http.get() => $('h2') text => log();
'http://cnn.com' => a:;

wflo().adv('http://rbc.ru').add('a:http.get').add('$',['h2']).out('text').add('log')
.nl().adv('http://cnn.com').add('a:').run();

wflo().add('string',['http://rbc.ru'])

Compiler
========
wflo.compile(s).run();

Server
========
wflo.server(port);

wflo.client(port);

wflo.deploy();

LET
===

wflo().n('set x=',['x','12']) // Плохо

wflo().a('x=',1).a('timer',100).a('x=','$') //Плохо...
a('x=',{in:[1]}).a('x++').a('x=',(w)=>w.var.x+1)

ETL
===
table(db=postgresql,table='one') >> file(filename='/Users/agershun/test/a.csv')
wflo()
.a('postgresql.table',{db:pgdb,table:'one'}).o('record')
.a('file',{filename:'/Users/agershun/test/a.csv'})
.run();

Idea Tags
=========
components
flow graph programming
async
micro
distibuted


wflo()
.a('x=',1)
.a('while','x<10',
	wflo().a('x++').a('log').a()
)
.a('log','finish!').run();

// Как изображать while() на JS
x=1 >> while(x<10) {
	x++ >> log() >>
} >> log('finish!');

inc: {let x=1 >> loop: x++ >> yield() >> loop: };

inc() >> log() >> inc() >> log();









