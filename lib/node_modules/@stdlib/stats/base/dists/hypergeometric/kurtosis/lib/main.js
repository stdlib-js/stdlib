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
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the excess kurtosis of a hypergeometric distribution.
*
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {number} excess kurtosis
*
* @example
* var v = kurtosis( 16, 11, 4 );
* // returns ~-0.326
*
* @example
* var v = kurtosis( 4, 2, 2 );
* // returns 0.0
*
* @example
* var v = kurtosis( 10, 5, 12 );
* // returns NaN
*
* @example
* var v = kurtosis( 10.3, 10, 4 );
* // returns NaN
*
* @example
* var v = kurtosis( 10, 5.5, 4 );
* // returns NaN
*
* @example
* var v = kurtosis( 10, 5, 4.5 );
* // returns NaN
*
* @example
* var v = kurtosis( NaN, 10, 4 );
* // returns NaN
*
* @example
* var v = kurtosis( 20, NaN, 4 );
* // returns NaN
*
* @example
* var v = kurtosis( 20, 10, NaN );
* // returns NaN
*/
function kurtosis( N, K, n ) {
	var p;
	var q;
	if (
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
	p = ( N-1 ) * ( N*N ) * ( ( N*(N+1) ) - ( 6*K*(N-K) ) - ( 6*n*(N-n) ) );
	p += 6 * n * K * ( N-K ) * ( N-n ) * ( (5*N) - 6 );
	q = n * K * ( N-K ) * ( N-n ) * ( N-2 ) * ( N-3 );
	return p / q;
}


// EXPORTS //

module.exports = kurtosis;
