'use strict';

var join = require( 'path' ).join;
var remark = require( 'remark' );
var readSync = require( 'to-vfile' ).readSync; // eslint-disable-line no-sync
var run = require( './../lib' );

// Load a Markdown file:
var fpath = join( __dirname, 'fixtures', 'simple.txt' );
var file = readSync( fpath, 'utf8' );

// Run examples:
remark().use( run ).process( file, done );

function done( error ) {
	if ( error ) {
		throw error;
	}
}
