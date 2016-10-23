'use strict';

var toReference = require( './../lib' );

toReference( '@press:1992', clbk );

function clbk( error, reference ) {
	if ( error ) {
		throw error;
	}
	console.log( reference );
}
