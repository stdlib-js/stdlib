'use strict';

var validate = require( './../lib' );

validate( done );

function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}
