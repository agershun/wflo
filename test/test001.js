if(typeof exports === 'object') {
	var assert = require('assert');
	var wflo = require('..');
}

describe('Test 001. Create a wind',function(){
	it('1. Create an empty wind with wind.Wind', function(){
		var wind = new wflo.Wind;
		assert.equal(typeof wind, 'object');
	});

	it('2. Create an empty wind with wind()', function(){
		var wind = wflo();
		assert.equal(typeof wind, 'object');
	});
});

describe('Test 002. Add primitive node',function(){
	it('1. Add number node', function(){
		var wind = new wflo.Wind;
		wind.add(1);
		assert.equal(Object.keys(wind.nodes).length,1);
	});
	it('2. Add string node', function(){
		var wind = new wflo.Wind;
		wind.add("one");
		assert.equal(Object.keys(wind.nodes).length,1);
	});
	it('3. Add boolean node', function(){
		var wind = new wflo.Wind;
		wind.add(true);
		assert.equal(Object.keys(wind.nodes).length,1);
	});
	it('4. Add array node', function(){
		var wind = new wflo.Wind;
		wind.add([1,2,3]);
		assert.equal(Object.keys(wind.nodes).length,1);
	});
	it('5. Add object node', function(){
		var wind = new wflo.Wind;
		wind.add({a:1});
		assert.equal(Object.keys(wind.nodes).length,1);
	});

});
