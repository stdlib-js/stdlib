'use strict';

// MODULES //

var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var path = require( 'path' );
var createSVGs = require( './../lib' );


// VARIABLES //

var result;
var file;
var opts;

// MAIN //

file = toVFile.readSync( path.join( __dirname, 'fixtures/simple.md' ) );

opts = {
	'dir': '/doc/img/'
};

result = remark().use( createSVGs, opts ).process( file );

console.log( result );
