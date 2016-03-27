'use strict';

var diff = require( './../lib' );

var x;
var y;
var d;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*1e4 - 1e2;
	y = Math.random()*1e4 - 1e2;
	d = diff( x, y );
	console.log( 'x = %d. y = %d. |x-y| = %d.', x, y, d );
}
