'use strict';

var lint = require( './../lib' );

lint( onLint );

function onLint( error, filenames ) {
	if ( error ) {
		throw error;
	}
	console.log( JSON.stringify( filenames ) );
}
