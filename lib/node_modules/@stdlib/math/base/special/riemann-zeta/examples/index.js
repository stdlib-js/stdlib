'use strict';

var linspace = require( 'compute-linspace' );
var zeta = require( './../lib' );

var s = linspace( -50, 50, 200 );
var v;
var i;

for ( i = 0; i < s.length; i++ ) {
	v = zeta( s[ i ] );
	console.log( 's: %d, ζ(s): %d', s[ i ], v );
}
