'use strict';

var lint = require( './../lib' );

lint( done );

function done( error, errs ) {
	if ( error ) {
		throw error;
	}
	if ( errs ) {
		console.dir( errs );
	} else {
		console.log( 'Success!' );
	}
}
