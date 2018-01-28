'use strict';

var licenses = require( './../lib' );

licenses( onResults );

function onResults( error, results ) {
	if ( error ) {
		throw error;
	}
	console.log( JSON.stringify( results ) );
}
