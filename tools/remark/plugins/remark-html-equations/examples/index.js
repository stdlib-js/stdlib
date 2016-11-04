'use strict';

var readFileSync = require( 'fs' ).readFileSync;
var join = require( 'path' ).join;
var remark = require( 'remark' );
var insertEquations = require( './../lib' );

var fpath;
var opts;
var file;
var out;

// Load a Markdown file...
fpath = join( __dirname, 'fixtures/simple.md' );
opts = {
	'encoding': 'utf8'
};
file = readFileSync( fpath, opts );

// Insert HTML equation elements:
out = remark().use( insertEquations ).process( file );

// Print the results:
console.log( out.contents );
