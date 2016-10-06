'use strict';

var findPkgs = require( './../lib' );

findPkgs( onPkgs );

function onPkgs( error, pkgs ) {
	if ( error ) {
		throw error;
	}
	console.log( pkgs.join( '\n' ) );
}
