'use strict';

var uri2id = require( './../lib' );

uri2id( 'https://github.com/stdlib-js/stdlib', clbk );

function clbk( error, id ) {
	if ( error ) {
		throw error;
	}
	console.log( id );
}
