'use strict';

var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var toHTML = require( './../lib' );

var file = join( __dirname, 'fixtures', 'fixture.txt' );

file = readFileSync( file, {
	'encoding': 'utf8'
});
if ( file instanceof Error ) {
	throw file;
}

toHTML( file, done );

function done( error, html ) {
	if ( error ) {
		throw error;
	}
	console.log( html );
}
