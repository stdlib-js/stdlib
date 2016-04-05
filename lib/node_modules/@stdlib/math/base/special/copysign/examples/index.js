'use strict';

var copysign = require( './../lib' );

var x;
var y;
var z;
var i;

// Generate random double-precision floating-point numbers `x` and `y` and copy the sign of `y` to `x`...
for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	y = Math.random()*10 - 5;
	z = copysign( x, y );
	console.log( 'x: %d, y: %d => %d', x, y, z );
}