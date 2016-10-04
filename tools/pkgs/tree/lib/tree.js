'use strict';

// MODULES //

var path = require( 'path' );
var prefix = require( './stdlib.js' );
var hasOwnProp = require( prefix+'@stdlib/utils/has-own-property' );
var isBoolean = require( prefix+'@stdlib/utils/is-boolean' ).isPrimitive;
var isObject = require( prefix+'@stdlib/utils/is-plain-object' );


// TREE //

/**
* Generates a package tree from a list of package names.
*
* @private
* @param {StringArray} names - package names
* @returns {Object} tree
*/
function tree( names ) {
	var parts;
	var root;
	var trie;
	var key;
	var len;
	var i;
	var j;

	// Note: by convention, a namespace package MUST have sub-packages; otherwise, a package is a leaf package. Hence, we can discover namespace packages by a) checking if a parent node already exists and b) noting when a leaf node acquires descendants.

	// Insert each package name into a trie...
	root = {};
	for ( i = 0; i < names.length; i++ ) {
		trie = root;
		parts = names[ i ].split( path.sep );
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
				}
			}
			// Does this tree node already have descendants?
			else if ( isObject( trie[ key ] ) ) {
				// We found a namespace:
				trie[ key ][ '__namespace__' ] = true;
			}
			trie = trie[ key ];
		}
	}
	return root;
} // end FUNCTION tree()


// EXPORTS //

module.exports = tree;
