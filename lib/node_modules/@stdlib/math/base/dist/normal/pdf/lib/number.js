'use strict';

// FUNCTIONS //

var exp = Math.exp,
	pow = Math.pow,
	sqrt = Math.sqrt;


// VARIABLES //

var PI = Math.PI;


// PDF //

/**
* FUNCTION: pdf( x, mu, sigma )
*	Evaluates the probability density function (PDF) for a Normal distribution with mean  `mu` and standard deviation `sigma` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} mu - mean
* @param {Number} sigma - standard deviation
* @returns {Number} evaluated PDF
*/
function pdf( x, mu, sigma ) {
	if ( sigma === 0 ) {
		return x === mu ? Number.POSITIVE_INFINITY : 0;
	}
	var s2 = pow( sigma, 2 ),
		A = 1 / ( sqrt( 2 * s2 * PI ) ),
		B = -1 / ( 2 * s2 );
	return A * exp( B * pow( x - mu, 2 ) );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
