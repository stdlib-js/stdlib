'use strict';

// MODULES //

var stdlib = require( './stdlib.js' );
var dirname = require( stdlib+'@stdlib/utils/dirname' );


// VARIABLES //

var MATCH = /\@stdlib/;


// TRANSFORM //

/**
* Transforms a raw `package.json` list into module names.
*
* @private
* @param {StringArray} files - list of `package.json` absolute file paths
* @returns {StringArray} names - list of module names
*
* @example
* var files = [ '/stdlib/stdlib/lib/node_modules/@stdlib/math/constants/float64-min-safe-integer/package.json' ];
*
* var names = transform( files );
* // returns [ '@stdlib/math/constants/float64-min-safe-integer' ]
*/
function transform( files ) {
	var match;
	var name;
	var out;
	var i;

	out = [];
	for ( i = 0; i < files.length; i++ ) {
		match = files[ i ].match( MATCH );
		if ( match ) {
			name = files[ i ].substring( match.index );
			name = dirname( name );
			out.push( name );
		}
	}
	return out;
} // end FUNCTION transform()


// EXPORTS //

module.exports = transform;
