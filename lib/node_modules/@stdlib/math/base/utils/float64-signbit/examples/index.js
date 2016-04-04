'use strict';

var signbit = require( './../lib' );

var sign;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	sign = signbit( x );
	sign = ( sign ) ? 'true' : 'false';
	console.log( 'x: %d. signbit: %s.', x, sign );
}
