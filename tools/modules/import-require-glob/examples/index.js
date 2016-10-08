'use strict';

var ls = require( './../lib' );

ls( onList );

function onList( error, results ) {
	if ( error ) {
		throw error;
	}
	console.dir( results );
}
