'use strict';

// FUNCTIONS //

/**
* Returns a comparison result. If `-1`, `a` comes before `b`. If `1`, `b` comes before `a`. If `0`, the order stays the same.
*
* @private
* @param {string} a - first string
* @param {string} b - second string
* @returns {boolean} comparison result
*/
function comparator( a, b ) {
	if ( a === '__namespace__' ) {
		return -1;
	}
	if ( b === '__namespace__' ) {
		return 1;
	}
	if ( a[ 0 ] === '_' && b[ 0 ] === '_' ) {
		return comparator( a.substring( 1 ), b.substring( 1 ) );
	}
	if ( a[ 0 ] === '_' ) {
		return 1;
	}
	if ( b[ 0 ] === '_' ) {
		return -1;
	}
	if ( a < b ) {
		return -1;
	}
	if ( a > b ) {
		return 1;
	}
	return 0;
}


// MAIN //

/**
* Sorts tree keys.
*
* @private
* @param {StringArray} keys - keys
* @returns {StringArray} sorted keys
*/
function sort( keys ) {
	return keys.sort( comparator );
}


// EXPORTS //

module.exports = sort;
