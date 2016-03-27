'use strict';

var trunc = require( './../lib' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	console.log( 'Value: %d. Truncated: %d.', x, trunc( x ) );
}
