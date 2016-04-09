'use strict';

// MODULES //

var erfinv = require( 'compute-erfinv/lib/number.js' );


// FUNCTIONS //

var sqrt = Math.sqrt;


// QUANTILE //

/**
* FUNCTION: quantile( p, mu, sigma )
*	Evaluates the quantile function for a Normal distribution with mean `mu` and standard deviation `sigma` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} mu - mean
* @param {Number} sigma - standard deviation
* @returns {Number} evaluated quantile function
*/
function quantile( p, mu, sigma ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	if ( sigma === 0 ) {
		return mu;
	}

	var A = mu,
		B = sigma * sqrt( 2 );

	return A + B * erfinv( 2 * p - 1 );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
