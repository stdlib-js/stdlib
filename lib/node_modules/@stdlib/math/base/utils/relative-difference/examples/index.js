'use strict';

var diff = require( './../lib' );

var scales = [ 'max-abs', 'max', 'min-abs', 'min', 'mean-abs', 'mean', 'x', 'y' ];
var x;
var y;
var d;
var i;
var j;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*1e4 - 5e3;
	y = Math.random()*1e4 - 5e3;
	for ( j = 0; j < scales.length; j++ ) {
		d = diff( x, y, scales[j] );
		console.log( 'x = %d. y = %d. d = %d. scale: %s.', x, y, d, scales[j] );
	}
}
