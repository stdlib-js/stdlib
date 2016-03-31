'use strict';

var expm1 = require( './../lib' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*10 - 5;
	console.log( 'e^%d - 1 = %d', x, expm1( x ) );
}
