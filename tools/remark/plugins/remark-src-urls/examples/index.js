'use strict';

// MODULES //

var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var path = require( 'path' );
var insertURLs = require( './../lib' );


// VARIABLES //

var result;
var file;
var opts;

// MAIN //

file = toVFile.readSync( path.join( __dirname, 'fixtures/simple.md' ) );

opts = {
	'dir': '/docs/img/'
};

result = remark().use( insertURLs, opts ).process( file );

console.log( result );
