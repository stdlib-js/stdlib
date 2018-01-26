'use strict';

var join = require( 'path' ).join;
var bundle = require( './../lib' );

var root = join( __dirname, 'fixtures' ); // eslint-disable-line stdlib/no-redeclare

var opts = {
	'pattern': '*.js'
};

bundle( root, opts, onBundle );

function onBundle( error, bundle ) {
	if ( error ) {
		throw error;
	}
	console.log( bundle.toString() );
}
