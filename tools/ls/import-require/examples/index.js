'use strict';

var prefix = require( './../lib/stdlib.js' );
var readFile = require( prefix+'@stdlib/fs/read-file' ).sync;
var ls = require( './../lib' );

var file = readFile( __filename );
var results = ls( file );

console.dir( results );
