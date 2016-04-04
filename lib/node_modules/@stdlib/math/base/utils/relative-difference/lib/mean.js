'use strict';

/**
* FUNCTION: mean( x, y )
*	Returns the arithmetic mean of `x` and `y`.
*
* @param {Number} x - first number
* @param {Number} y - second number
* @returns {Number} arithmetic mean
*/
function mean( x, y ) {
	return x + (y-x)/2.0;
} // end FUNCTION mean()


// EXPORTS //

module.exports = mean;
