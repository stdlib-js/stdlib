'use strict';

var readFileSync = require( 'fs' ).readFileSync;
var join = require( 'path' ).join;
var remark = require( 'remark' );
var links = require( './../lib' );

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

// Resolve URIs:
out = remark().use( links ).processSync( file );

// Print the results:
console.log( out.contents );
