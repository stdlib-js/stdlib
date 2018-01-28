'use strict';

// MODULES //

var getKeys = require( 'object-keys' ).shim();


// MAIN //

/**
* Converts an object to an array.
*
* @private
* @param {Object} obj - object to convert
* @returns {Array} output array
*/
function toArray( obj ) {
	var keys;
	var out;
	var i;
	keys = getKeys( obj );
	out = new Array( keys.length );
	for ( i = 0; i < keys.length; i++ ) {
		out[ i ] = obj[ keys[i] ];
	}
	return out;
}


// EXPORTS //

module.exports = toArray;
