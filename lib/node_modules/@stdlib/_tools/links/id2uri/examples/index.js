'use strict';

var id2uri = require( './../lib' );

id2uri( 'stdlib', clbk );

function clbk( error, uri ) {
	if ( error ) {
		throw error;
	}
	console.log( uri );
}
