'use strict';

// MODULES //

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var PATH_SEP = require( '@stdlib/string/constants/path-sep' );


// MAIN //

/**
* Filters a list of package names for packages which are namespaces.
*
* @private
* @param {StringArray} names - package names
* @returns {(StringArray|EmptyArray)} namespace package names
*/
function filter( names ) {
	var parts;
	var root;
	var trie;
	var key;
	var len;
	var out;
	var i;
	var j;

	// Note: by convention, a namespace package MUST have sub-packages; otherwise, a package is a leaf package. Hence, we can discover namespace packages by a) checking if a parent node already exists and b) noting when a leaf node acquires descendants.
	out = [];

	// Insert each package name into a trie...
	root = {};
	for ( i = 0; i < names.length; i++ ) {
		trie = root;
		parts = names[ i ].split( PATH_SEP );
		len = parts.length;
		for ( j = 0; j < len; j++ ) {
			key = parts[ j ];

			// Is this the first time we have seen this key? If so, create a new tree node...
			if ( !hasOwnProp( trie, key ) ) {
				// Will this tree node have descendants?
				if ( j < len -1 ) {
					// Create a sub-trie:
					trie[ key ] = {};
				} else {
					// Create a leaf node:
					trie[ key ] = true;
				}
			}
			// Does this tree node have descendants?
			else if ( j < len-1 ) {
				// Is this tree node currently a leaf?
				if ( isBoolean( trie[ key ] ) ) {
					// Convert to a sub-trie and mark that we have found a namespace:
					trie[ key ] = {
						'__namespace__': true
					};
					out.push( parts.slice( 0, j+1 ).join( '/' ) );
				}
			}
			// Does this tree node already have descendants?
			else if ( isObject( trie[ key ] ) ) {
				// We found a namespace:
				trie[ key ][ '__namespace__' ] = true;
				out.push( parts.slice( 0, j+1 ).join( '/' ) );
			}
			trie = trie[ key ];
		}
	}
	return out;
} // end FUNCTION filter()


// EXPORTS //

module.exports = filter;
