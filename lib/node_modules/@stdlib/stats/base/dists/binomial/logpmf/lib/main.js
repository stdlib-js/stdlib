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
var binomcoefln = require( '@stdlib/math/base/special/binomcoefln' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the natural logarithm of the probability mass function (PMF) for a binomial distribution with number of trials `n` and success probability `p` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {number} evaluated logPMF
*
* @example
* var y = logpmf( 3.0, 20, 0.2 );
* // returns ~-1.583
*
* @example
* var y = logpmf( 21.0, 20, 0.2 );
* // returns -Infinity
*
* @example
* var y = logpmf( 5.0, 10, 0.4 );
* // returns ~-1.606
*
* @example
* var y = logpmf( 0.0, 10, 0.4 );
* // returns ~-5.108
*
* @example
* var y = logpmf( NaN, 20, 0.5 );
* // returns NaN
*
* @example
* var y = logpmf( 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = logpmf( 0.0, 20, NaN );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 1.5, 0.5 );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, -2.0, 0.5 );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 20, -1.0 );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 20, 1.5 );
* // returns NaN
*/
function logpmf( x, n, p ) {
	var out;
	if (
		isnan( x ) ||
		isnan( n ) ||
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0 ||
		!isNonNegativeInteger( n ) ||
		n === PINF
	) {
		return NaN;
	}
	if ( isNonNegativeInteger( x ) ) {
		if ( x > n ) {
			return NINF;
		}
		if ( p === 0.0 ) {
			return ( x === 0 ) ? 0.0 : NINF;
		}
		if ( p === 1.0 ) {
			return ( x === n ) ? 0.0 : NINF;
		}
		out = binomcoefln( n, x );
		out += (x * ln( p )) + (( n - x ) * log1p( -p ));
		return out;
	}
	return NINF;
}


// EXPORTS //

module.exports = logpmf;
