'use strict';

var findCLIs = require( './../lib' );

findCLIs( done );

function done( error, files ) {
	if ( error ) {
		throw error;
	}
	console.log( files.join( '\n' ) );
}
