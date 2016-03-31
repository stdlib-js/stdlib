'use strict';

var powm1 = require( './../lib' );

var b;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
	b = Math.round( Math.random()*10 );
	x = Math.round( Math.random()*10 ) - 5;
	y = powm1( b, x );
	console.log( '%d^%d - 1 = %d', b, x, y );
}
