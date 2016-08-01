'use strict';

// MODULES //

var glob = require( 'glob' ).sync;
var path = require( 'path' );
var stdlib = require( './stdlib.js' );
var dirname = require( stdlib+'@stdlib/utils/dirname' );


// VARIABLES //

var PATTERN = '**/package.json';
var ROOT = path.resolve( __dirname, stdlib );
var MATCH = /\@stdlib/;


// LIST //

/**
* Synchronously generates a list of stdlib module names.
*
* @returns {StringArray} list of names
*
* @example
* var names = list();
* // returns [...]
*/
function list() {
	var match;
	var names;
	var name;
	var opts;
	var out;
	var i;

	opts = {
		'cwd': ROOT
	};
	names = glob( PATTERN, opts );
	out = [];
	for ( i = 0; i < names.length; i++ ) {
		match = names[ i ].match( MATCH );
		if ( match ) {
			name = names[ i ].substring( match.index );
			name = dirname( name );
			out.push( name );
		}
	}
	return out;
} // end FUNCTION list()


// EXPORTS //

module.exports = list;
