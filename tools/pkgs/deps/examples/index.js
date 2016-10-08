'use strict';

var resolve = require( 'path' ).resolve;
var pkgDeps = require( './../lib' );

var pkg = resolve( __dirname, '../' );
var pkgs = [ pkg, 'tape' ];

var opts = {
	'dev': true
};
pkgDeps( pkgs, opts, onDeps );

function onDeps( error, deps ) {
	if ( error ) {
		throw error;
	}
	console.log( JSON.stringify( deps ) );
}
