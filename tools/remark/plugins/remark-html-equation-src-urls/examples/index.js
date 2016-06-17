'use strict';

var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var path = require( 'path' );
var insertURLs = require( './../lib' );

var fpath;
var vfile;
var opts;
var out;

// Load a Markdown file...
fpath = path.join( __dirname, 'fixtures/simple.md' );
vfile = toVFile.readSync( fpath );

// Specify the directory containing SVG equations:
opts = {
	'dir': './docs/img/' // relative to Markdown file
};

// Insert src URLs into HTML equation elements:
out = remark().use( insertURLs, opts ).process( vfile );

// Output the results:
console.log( out.contents );
