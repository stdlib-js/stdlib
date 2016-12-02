'use strict';

var join = require( 'path' ).join;
var bundle = require( './../lib' );

var fpath = join( __dirname, 'fixtures', 'index.js' );
var files = [ fpath ];

bundle( files, onBundle );

function onBundle( error, output ) {
	if ( error ) {
		throw error;
	}
	console.log( output.toString() );
}

