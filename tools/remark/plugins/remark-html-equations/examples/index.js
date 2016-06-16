'use strict';

// MODULES //

var remark = require( 'remark' );
var path = require( 'path' );
var fs = require( 'fs' );
var insertEquations = require( './../lib' );


// VARIABLES //

var filePath;
var markdown;
var result;


// MAIN //

filePath = path.join( __dirname, 'fixtures/simple.md' );

markdown = fs.readFileSync( filePath ).toString();

result = remark().use([
	insertEquations
]).process( markdown );

console.log( result );
