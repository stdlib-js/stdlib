'use strict';

// MODULES //

var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var path = require( 'path' );
var createSVGs = require( './../lib' );


// VARIABLES //

var result;
var file;


// MAIN //

file = toVFile.readSync( path.join( __dirname, 'fixtures/simple.md' ) );

result = remark().use([
	createSVGs
]).process( file );

console.log( result );
