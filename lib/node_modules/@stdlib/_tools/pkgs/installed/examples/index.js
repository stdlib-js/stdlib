'use strict';

var pkgs = require( './../lib' );

pkgs( onPkgs );

function onPkgs( error, list ) {
	if ( error ) {
		throw error;
	}
	console.dir( list );
}
