'use strict';

var prefix = require( './../lib/stdlib.js' );
var readFile = require( prefix+'@stdlib/fs/read-file' ).sync;
var ls = require( './../lib' );

var file = readFile( __filename );
var results = ls( file );

console.log( 'Literals:' );
console.dir( results.literals );

console.log( 'Expressions:' );
console.dir( results.expressions );
