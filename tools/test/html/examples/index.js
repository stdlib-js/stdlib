'use strict';

var build = require( './../lib' );

build( '/foo/bar/bundle.js', onBuild );

function onBuild( error, html ) {
	if ( error ) {
		throw error;
	}
	console.log( html );
}
