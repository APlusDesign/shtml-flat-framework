// siteObj should be renamed to the website name
var siteObj = {} || null;

$(document).ready(function() {
	// This is how I want functions and classes to be called
	siteObj.fooBar  = new fooBar() || null;
	console.log(siteObj.fooBar.tmp)
});


// A function
function fooBar() {
	// Do something
	this.tmp = 'fooBar';
	// Must return something.
	return this;
}




