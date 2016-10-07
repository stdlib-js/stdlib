'use strict';

var resolve = require( 'path' ).resolve;
var entryPoints = require( './../lib' );

var pkg = resolve( __dirname, '../' );
var pkgs = [ pkg, 'tape' ];

entryPoints( pkgs, onEntries );

function onEntries( error, results ) {
	if ( error ) {
		throw error;
	}
	console.dir( results );
}
