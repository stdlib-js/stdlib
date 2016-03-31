'use strict';

// MODULES //

var series = require( './polynomial_series.js' );
var ODD_POSITIVE_INTEGERS = require( './odd_positive_integers.json' );


// ZETA //

/**
* zeta( s )
*	Evaluates the Riemann zeta function for an odd positive integer.
*
* @param {Number} s - input value
* @returns {Number} function value
*/
function zeta( s ) {
	var idx = (s-3) / 2;
	if ( idx >= ODD_POSITIVE_INTEGERS.length ) {
		return series( s );
	}
	return ODD_POSITIVE_INTEGERS[ idx ];
} // end FUNCTION zeta()


// EXPORTS //

module.exports = zeta;
