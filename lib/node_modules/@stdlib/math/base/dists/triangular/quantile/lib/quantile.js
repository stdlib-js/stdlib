/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Evaluates the quantile function for a triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a probability `p`.
*
* @param {Probability} p - input value
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.9, -1.0, 1.0, 0.0 );
* // returns ~0.553
*
* @example
* var y = quantile( 0.1, -1.0, 1.0, 0.5 );
* // returns ~-0.452
*
* @example
* var y = quantile( 0.1, -20.0, 0.0, -2.0 );
* // returns -14.0
*
* @example
* var y = quantile( 0.8, 0.0, 20.0, 0.0 );
* // returns ~11.056
*
* @example
* var y = quantile( 1.1, -1.0, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = quantile( -0.1, -1.0, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 0.0, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.3, NaN, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.3, 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.3, 1.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.3, 1.0, 0.0, 1.5 );
* // returns NaN
*/
function quantile( p, a, b, c ) {
	var pInflection;
	var fact1;
	var fact2;

	if (
		isnan( p ) ||
		isnan( a ) ||
		isnan( b ) ||
		isnan( c ) ||
		a > c ||
		c > b ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	pInflection = ( c - a ) / ( b - a );
	fact1 = ( b - a ) * ( c - a);
	fact2 = ( b - a ) * ( b - c );
	if ( p < pInflection ) {
		return a + sqrt( fact1 * p );
	}
	if ( p > pInflection ) {
		return b - sqrt( fact2 * ( 1.0 - p ) );
	}
	// Case: p = pInflection
	return c;
}


// EXPORTS //

module.exports = quantile;
