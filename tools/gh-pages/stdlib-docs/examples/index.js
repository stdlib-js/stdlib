'use strict';

var build = require( './../lib' );

build( clbk );

function clbk( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}
