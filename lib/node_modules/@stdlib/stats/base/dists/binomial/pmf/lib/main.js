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
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the probability mass function (PMF) for a binomial distribution with number of trials `n` and success probability `p` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {Probability} evaluated PMF
*
* @example
* var y = pmf( 3.0, 20, 0.2 );
* // returns ~0.205
*
* @example
* var y = pmf( 21.0, 20, 0.2 );
* // returns 0.0
*
* @example
* var y = pmf( 5.0, 10, 0.4 );
* // returns ~0.201
*
* @example
* var y = pmf( 0.0, 10, 0.4 );
* // returns ~0.006
*
* @example
* var y = pmf( NaN, 20, 0.5 );
* // returns NaN
*
* @example
* var y = pmf( 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = pmf( 0.0, 20, NaN );
* // returns NaN
*
* @example
* var y = pmf( 2.0, 1.5, 0.5 );
* // returns NaN
*
* @example
* var y = pmf( 2.0, -2.0, 0.5 );
* // returns NaN
*
* @example
* var y = pmf( 2.0, 20, -1.0 );
* // returns NaN
*
* @example
* var y = pmf( 2.0, 20, 1.5 );
* // returns NaN
*/
function pmf( x, n, p ) {
	var lnl;
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
			return 0.0;
		}
		if ( p === 0.0 ) {
			return ( x === 0 ) ? 1.0 : 0.0;
		}
		if ( p === 1.0 ) {
			return ( x === n ) ? 1.0 : 0.0;
		}
		lnl = binomcoefln( n, x );
		lnl += (x * ln( p )) + (( n - x ) * log1p( -p ));
		return exp( lnl );
	}
	return 0.0;
}


// EXPORTS //

module.exports = pmf;
