'use strict';

var float64ToFloat32 = require( './../lib' );

var f64;
var f32;
var i;

// Convert random double-precision floating-point numbers to the nearest single-precision floating-point number...
for ( i = 0; i < 1000; i++ ) {
	f64 = Math.random() * 100;
	f32 = float64ToFloat32( f64 );
	console.log( 'float64: %d => float32: %d', f64, f32 );
}