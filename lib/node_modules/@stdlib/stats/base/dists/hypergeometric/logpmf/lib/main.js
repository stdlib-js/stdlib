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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var fln = require( '@stdlib/math/base/special/factorialln' );
var max = require( '@stdlib/math/base/special/max' );
var min = require( '@stdlib/math/base/special/min' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the natural logarithm of the probability mass function (PMF) for a hypergeometric distribution with population size `N`, subpopulation size `K` and number of draws `n`.
*
* @param {number} x - input value
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {number} evaluated logPMF
*
* @example
* var y = logpmf( 1.0, 8, 4, 2 );
* // returns ~-0.56
*
* @example
* var y = logpmf( 2.0, 8, 4, 2 );
* // returns ~-1.54
*
* @example
* var y = logpmf( 0.0, 8, 4, 2 );
* // returns ~-1.54
*
* @example
* var y = logpmf( 1.5, 8, 4, 2 );
* // returns -Infinity
*
* @example
* var y = logpmf( NaN, 10, 5, 2 );
* // returns NaN
*
* @example
* var y = logpmf( 0.0, NaN, 5, 2 );
* // returns NaN
*
* @example
* var y = logpmf( 0.0, 10, NaN, 2 );
* // returns NaN
*
* @example
* var y = logpmf( 0.0, 10, 5, NaN );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 10.5, 5, 2 );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 5, 1.5, 2 );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 10, 5, -2.0 );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 10, 5, 12 );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 8, 3, 9 );
* // returns NaN
*/
function logpmf( x, N, K, n ) {
	var ldenom;
	var lnum;
	var maxs;
	var mins;

	if (
		isnan( x ) ||
		isnan( N ) ||
		isnan( K ) ||
		isnan( n ) ||
		!isNonNegativeInteger( N ) ||
		!isNonNegativeInteger( K ) ||
		!isNonNegativeInteger( n ) ||
		N === PINF ||
		K === PINF ||
		K > N ||
		n > N
	) {
		return NaN;
	}
	mins = max( 0, n + K - N );
	maxs = min( K, n );
	if (
		isNonNegativeInteger( x ) &&
		mins <= x &&
		x <= maxs
	) {
		lnum = fln( n ) + fln( K ) + fln( N - n ) + fln( N - K );
		ldenom = fln( N ) + fln( x ) + fln( n - x );
		ldenom += fln( K - x ) + fln( N - K + x - n );
		return lnum - ldenom;
	}
	return NINF;
}


// EXPORTS //

module.exports = logpmf;
