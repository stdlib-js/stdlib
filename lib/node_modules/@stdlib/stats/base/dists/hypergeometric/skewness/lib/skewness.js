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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the skewness of a hypergeometric distribution.
*
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {number} skewness
*
* @example
* var v = skewness( 16, 11, 4 );
* // returns ~-0.258
*
* @example
* var v = skewness( 4, 2, 2 );
* // returns 0.0
*
* @example
* var v = skewness( 10, 5, 12 );
* // returns NaN
*
* @example
* var v = skewness( 10.3, 10, 4 );
* // returns NaN
*
* @example
* var v = skewness( 10, 5.5, 4 );
* // returns NaN
*
* @example
* var v = skewness( 10, 5, 4.5 );
* // returns NaN
*
* @example
* var v = skewness( NaN, 10, 4 );
* // returns NaN
*
* @example
* var v = skewness( 20, NaN, 4 );
* // returns NaN
*
* @example
* var v = skewness( 20, 10, NaN );
* // returns NaN
*/
function skewness( N, K, n ) {
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
	p = ( N - (2*K) ) * sqrt( N - 1 ) * ( N - (2*n) );
	q = sqrt( n * K * ( N-K ) * ( N-n ) ) * ( N - 2 );
	return p / q;
}


// EXPORTS //

module.exports = skewness;
