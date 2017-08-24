'use strict';

var join = require( 'path' ).join;
var remark = require( 'remark' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var lint = require( './../lib' );

// Load a Markdown file:
var fpath = join( __dirname, 'fixtures', 'file.txt' );
var file = readFileSync( fpath );

// Lint equations:
remark().use( lint ).process( file.toString(), done );

function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Finished!' );
}
