if(typeof exports === 'object') {
	var assert = require('assert');
	var wflo = require('..');
}

describe('Test 001. Basic initialization',function(){
	it('1. Create an empty wind', function(){
		var wind = new wflo.Wind;
		assert.equal(typeof wind, 'object');
	});

	it('2. Run an empty wind', function(done){
		var wind = new wflo.Wind;
		wind.run().then(function(res){
			//assert.equal(res, {});
			done();
		});
	});
});