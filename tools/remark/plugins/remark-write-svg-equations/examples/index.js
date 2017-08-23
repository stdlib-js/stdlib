'use strict';

var join = require( 'path' ).join;
var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var createSVGs = require( './../lib' );

var fpath;
var vfile;
var opts;

// Load a Markdown file...
fpath = join( __dirname, 'fixtures/simple.txt' );
vfile = toVFile.readSync( fpath );

// Specify the output directory for SVG equation files...
opts = {
	'dir': './build/docs/img/',
	'prefix': ''
};

// Process a Markdown file and generate SVG equation files:
remark().use( createSVGs, opts ).process( vfile, done );

function done( error, out ) {
	if ( error ) {
		throw error;
	}
	// Output the processed Markdown file:
	console.log( out.contents );
}
