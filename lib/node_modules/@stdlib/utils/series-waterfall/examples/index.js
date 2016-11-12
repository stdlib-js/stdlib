'use strict';

var waterfall = require( './../lib' );

function foo( next ) {
	next( null, 'beep' );
}

function bar( str, next ) {
	console.log( str );
	next( null, str.replace( /e/g, 'o' ) );
}

function fun( str, next ) {
	console.log( str );
	next();
}

function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'done' );
}

var fcns = [ foo, bar, fun ];

waterfall( fcns, done );