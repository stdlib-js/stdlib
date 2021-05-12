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
var trunc = require( '@stdlib/math/base/special/trunc' );
var max = require( '@stdlib/math/base/special/max' );
var min = require( '@stdlib/math/base/special/min' );
var pmf = require( '@stdlib/stats/base/dists/hypergeometric/pmf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var Float64Array = require( '@stdlib/array/float64' );
var sum = require( './sum.js' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 1.0, 8, 4, 2 );
* // returns ~0.786
*
* @example
* var y = cdf( 1.5, 8, 4, 2 );
* // returns ~0.786
*
* @example
* var y = cdf( 2.0, 8, 4, 2 );
* // returns 1.0
*
* @example
* var y = cdf( 0, 8, 4, 2 );
* // returns ~0.214
*
* @example
* var y = cdf( NaN, 10, 5, 2 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 5, 2 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 10, NaN, 2 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 10, 5, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 10.5, 5, 2 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 10, 1.5, 2 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 10, 5, -2.0 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 10, 5, 12 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 8, 3, 9 );
* // returns NaN
*/
function cdf( x, N, K, n ) {
	var denom;
	var probs;
	var num;
	var ret;
	var i;

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
	x = trunc( x );
	if ( x < max( 0, n+K-N ) ) {
		return 0.0;
	}
	if ( x >= min( n, K ) ) {
		return 1.0;
	}

	probs = new Float64Array( x+1 );
	probs[ x ] = pmf( x, N, K, n );

	/*
	* Use recurrence relation:
	*
	*   (x+1)( N - K - (n-x-1))P(X=x+1)=(K-x)(n-x)P(X=x)
	*/
	for ( i = x-1; i >= 0; i-- ) {
		num = ( i+1 ) * ( N-K-(n-i-1) );
		denom = ( K-i ) * ( n-i );
		probs[ i ] = ( num/denom ) * probs[ i+1 ];
	}
	ret = sum( probs );
	return min( ret, 1.0 );
}


// EXPORTS //

module.exports = cdf;
