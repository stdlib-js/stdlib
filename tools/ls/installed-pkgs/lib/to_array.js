'use strict';

// MODULES //

var getKeys = require( 'object-keys' ).shim();


// TO ARRAY //

/**
* Converts a results object to an array.
*
* @private
* @param {Object} results - object to convert
* @returns {Array} output array
*/
function toArray( results ) {
	return getKeys( results ).sort();
} // end FUNCTION toArray()


// EXPORTS //

module.exports = toArray;
