'use strict';

var join = require( 'path' ).join;
var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var insertURLs = require( './../lib' );

var fpath;
var vfile;
var opts;
var out;

// Load a Markdown file...
fpath = join( __dirname, 'fixtures/simple.txt' );
vfile = toVFile.readSync( fpath );

// Specify the directory containing SVG equations:
opts = {
	'dir': './doc/img/', // relative to Markdown file
	'prefix': ''         // no prefix
};

// Insert src URLs into HTML equation elements:
out = remark().use( insertURLs, opts ).processSync( vfile );

// Output the results:
console.log( out.contents );
