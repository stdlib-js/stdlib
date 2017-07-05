'use strict';

// MODULES //

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Computes the root-mean-square error.
*
* #### Notes
*
* The implementation uses Welford's method to more robustly compute the mean.
*
* @private
* @param {ArrayLike} x - expected values
* @param {ArrayLike} y - actual values
* @returns {number} root-mean-square error
*/
function rmse( x, y ) {
	var delta;
	var diff;
	var sq;
	var mu;
	var N;
	var i;

	N = x.length;
	if ( y.length !== N ) {
		throw new Error( 'invalid input arguments. `x` and `y` must be the same length.' );
	}
	if ( N === 0 ) {
		return 0.0;
	}
	// Compute the mean of squared differences...
	mu = 0.0;
	for ( i = 0; i < N; i++ ) {
		diff = x[ i ] - y[ i ];
		sq = pow( diff, 2 );
		delta = sq - mu;
		mu += delta / (i+1);
	}
	// Return the square root of the mean:
	return sqrt( mu );
} // end FUNCTION rmse()


// EXPORTS //

module.exports = rmse;
