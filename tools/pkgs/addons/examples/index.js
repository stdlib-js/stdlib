'use strict';

var findAddons = require( './../lib' );

findAddons( done );

function done( error, pkgs ) {
	if ( error ) {
		throw error;
	}
	console.log( pkgs.join( '\n' ) );
}
