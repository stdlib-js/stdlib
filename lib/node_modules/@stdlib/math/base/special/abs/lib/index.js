'use strict';

/**
* FUNCTION: abs( x )
*	Computes the absolute value of `x`.
*
* @param {Number} x - input value
* @returns {Number} absolute value
*/
function abs( x ) {
	if ( x < 0 ) {
		return -x;
	}
	if ( x === 0 ) {
		return 0; // handle negative zero
	}
	return x;
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
