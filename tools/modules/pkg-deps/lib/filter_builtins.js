'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var indexOf = require( prefix+'@stdlib/utils/index-of' );
var builtins = require( './builtins.json' );


// MAIN //

/**
* Removes strings which match a built-in module name.
*
* @private
* @param {StringArray} list - list of strings
* @returns {(StringArray|EmptyArray)} filtered list
*/
function filter( list ) {
	var out;
	var i;
	out = [];
	for ( i = 0; i < list.length; i++ ) {
		if ( indexOf( builtins, list[ i ] ) === -1 ) {
			out.push( list[ i ] );
		}
	}
	return out;
} // end FUNCTION filter()


// EXPORTS //

module.exports = filter;
