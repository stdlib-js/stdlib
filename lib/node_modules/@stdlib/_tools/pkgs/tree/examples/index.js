'use strict';

var pkgTree = require( './../lib' );

pkgTree( onTree );

function onTree( error, tree ) {
	if ( error ) {
		throw error;
	}
	console.dir( tree );
}
