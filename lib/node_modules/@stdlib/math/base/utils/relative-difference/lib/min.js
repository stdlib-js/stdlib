'use strict';

/**
* FUNCTION: min( x, y )
*	Returns the minimum value of `x` and `y`.
*
* @param {Number} x - first number
* @param {Number} y - second number
* @returns {Number} minimum value
*/
function min( x, y ) {
	return ( x > y ) ? y : x; // doesn't account for +-0
} // end FUNCTION min()


// EXPORTS //

module.exports = min;
