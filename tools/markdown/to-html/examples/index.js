'use strict';

var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var toHTML = require( './../lib' );

var file = join( __dirname, 'fixtures', 'fixture.md' );

file = readFileSync( file, {
	'encoding': 'utf8'
});
if ( file instanceof Error ) {
	throw file;
}

var html = toHTML( file );
console.log( html );
