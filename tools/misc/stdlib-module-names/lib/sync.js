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


// SYNC //

/**
* Synchronously generates a list of stdlib module names.
*
* @returns {StringArray} list of names
*
* @example
* var names = sync();
* // returns [...]
*/
function sync() {
	var match;
	var name;
	var opts;
	var list;
	var out;
	var i;

	opts = {
		'cwd': ROOT
	};
	list = glob( PATTERN, opts );
	out = [];
	for ( i = 0; i < list.length; i++ ) {
		match = list[ i ].match( MATCH );
		if ( match ) {
			name = list[ i ].substring( match.index );
			name = dirname( name );
			out.push( name );
		}
	}
	return out;
} // end FUNCTION sync()


// EXPORTS //

module.exports = sync;
