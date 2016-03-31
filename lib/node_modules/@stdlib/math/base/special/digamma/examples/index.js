'use strict';

var digamma = require( './../lib' );

var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
	x = Math.random()*10 - 5;
	v = digamma( x );
	console.log( 'x: %d, f(x): %d', x, v );
}
