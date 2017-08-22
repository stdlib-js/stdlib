'use strict';

var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var join = require( 'path' ).join;
var createSVGs = require( './../lib' );

var fpath;
var vfile;
var opts;
var out;

// Load a Markdown file...
fpath = join( __dirname, 'fixtures/simple.md' );
vfile = toVFile.readSync( fpath );

// Specify the output directory for SVG equation files...
opts = {
	'dir': './doc/img/'
};

// Process a Markdown file and generate SVG equation files:
out = remark().use( createSVGs, opts ).process( vfile );

// Output the processed Markdown file:
console.log( out.contents );
