'use strict';

var ls = require( './../lib' );

ls( onList );

function onList( error, names ) {
	if ( error ) {
		throw error;
	}
	console.log( names.join( '\n' ) );
}
