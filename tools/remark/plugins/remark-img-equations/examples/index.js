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
fpath = join( __dirname, 'fixtures/simple.txt' );
opts = {
	'encoding': 'utf8'
};
file = readFileSync( fpath, opts );

// Insert equations:
out = remark().use( insertEquations ).processSync( file );

// Print the results:
console.log( out.contents );
