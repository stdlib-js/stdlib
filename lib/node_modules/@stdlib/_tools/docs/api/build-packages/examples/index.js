'use strict';

var resolve = require( 'path' ).resolve;
var build = require( './../lib' );

var dest = resolve( __dirname, './../../../../../build/foo' );

build( dest, done );

function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}
