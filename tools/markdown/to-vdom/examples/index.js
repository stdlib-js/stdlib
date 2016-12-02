'use strict';

var join = require( 'path' ).join;
var toHTML = require( 'vdom-to-html' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var toVirtualDOM = require( './../lib' );

var file = join( __dirname, 'fixtures', 'fixture.md' );

file = readFileSync( file, {
	'encoding': 'utf8'
});
if ( file instanceof Error ) {
	throw file;
}

var vtree = toVirtualDOM( file );
console.log( toHTML( vtree ) );
