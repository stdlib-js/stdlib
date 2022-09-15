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
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the entropy of a binomial distribution.
*
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {number} entropy
*
* @example
* var v = entropy( 100, 0.1 );
* // returns ~2.511
*
* @example
* var v = entropy( 20, 0.5 );
* // returns ~2.223
*
* @example
* var v = entropy( 10.3, 0.5 );
* // returns NaN
*
* @example
* var v = entropy( 20, 1.1 );
* // returns NaN
*
* @example
* var v = entropy( 20, NaN );
* // returns NaN
*/
function entropy( n, p ) {
	var nlq;
	var out;
	var i;
	var q;

	if (
		isnan( n ) ||
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0 ||
		!isNonNegativeInteger( n ) ||
		n === PINF
	) {
		return NaN;
	}
	if ( p === 0 || p === 1 || n === 0 ) {
		return 0.0;
	}
	q = 1.0 - p;
	nlq = n * ln( q );
	out = exp( nlq ) * nlq;
	for ( i = 1; i <= n; i++ ) {
		nlq += ln( ( n - i + 1 ) / i ) + ln( p / q );
		out += exp( nlq ) * nlq;
	}
	return -out;
}


// EXPORTS //

module.exports = entropy;
