'use strict';

var resolve = require( 'path' ).resolve;
var pkgDeps = require( './../lib' );

var file = resolve( __dirname, '../lib/index.js' );

var opts = {
	'walk': true,
	'builtins': false
};
pkgDeps( file, opts, onResults );

function onResults( error, results ) {
	if ( error ) {
		throw error;
	}
	console.dir( results );
}
