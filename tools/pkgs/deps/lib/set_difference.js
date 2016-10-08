'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var indexOf = require( prefix+'@stdlib/utils/index-of' );


// MAIN //

/**
* Returns the set difference (i.e., the elements of `A` which are not in `B`).
*
* @private
* @param {StringArray} a - set `A`
* @param {StringArray} b - set `B`
* @returns {(StringArray|EmptyArray)} set difference
*/
function setDifference( a, b ) {
	var out;
	var i;
	out = [];
	for ( i = 0; i < a.length; i++ ) {
		if ( indexOf( b, a[ i ] ) === -1 ) {
			out.push( a[ i ] );
		}
	}
	return out;
} // end FUNCTION setDifference()


// EXPORTS //

module.exports = setDifference;
