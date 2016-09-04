(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.wflo = factory();
    }
}(this, function () {

/**
	Main class
*/
var Wind = function() {
	return this;
};

/**
	Run the wind
	@param entry {string} Enrty state
	@param args {object} Array or object of evaluated arguments 
	@return {Promise}
	@example
		addWind.run('add', [1,2]).then(...);
*/
Wind.prototype.run = function(entry,args){
	// if(!args) {
	// 	args = entry;
	// 	entry = 'start';
	// }
	return new Promise(function(resolve,reject){
		resolve();
	});
};

var Wflo = function() {
	return new Wflo;
};



return ;

}));