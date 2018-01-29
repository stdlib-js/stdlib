'use strict';

var readFileSync = require( 'fs' ).readFileSync;
var join = require( 'path' ).join;
var remark = require( 'remark' );
var insertEquations = require( './../lib' );

var fpath;
var opts;
var file;

// Load a Markdown file...
fpath = join( __dirname, 'fixtures/simple.txt' );
opts = {
	'encoding': 'utf8'
};
file = readFileSync( fpath, opts );

// Insert equations:
remark().use( insertEquations ).process( file, done );

function done( error, out ) {
	if ( error ) {
		throw error;
	}
	// Output the processed Markdown file:
	console.log( out.contents );
}
