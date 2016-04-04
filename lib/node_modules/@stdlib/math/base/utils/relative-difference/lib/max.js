'use strict';

/**
* FUNCTION: max( x, y )
*	Returns the maximum value of `x` and `y`.
*
* @param {Number} x - first number
* @param {Number} y - second number
* @returns {Number} maximum value
*/
function max( x, y ) {
	return ( x < y ) ? y : x; // doesn't account for +-0
} // end FUNCTION max()


// EXPORTS //

module.exports = max;
