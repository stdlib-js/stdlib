'use strict';

var flipsign = require( './../lib' );

var x;
var y;
var z;
var i;

// Generate random double-precision floating-point numbers `x` and `y` and flip the sign of `x` only if `y` is negative...
for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	y = Math.random()*10 - 5;
	z = flipsign( x, y );
	console.log( 'x: %d, y: %d => %d', x, y, z );
}