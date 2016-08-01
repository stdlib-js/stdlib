'use strict';

var list = require( './../lib' );

list( onList );

function onList( error, names ) {
	if ( error ) {
		throw error;
	}
	console.log( names.join( '\n' ) );
}
