'use strict';

var round = require( 'math-round' );
var log1p = require( './../lib' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = round( Math.random() * 100 );
	console.log( log1p( x ) );
}
