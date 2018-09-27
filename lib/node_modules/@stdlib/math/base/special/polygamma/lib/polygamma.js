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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_65_0/boost/math/special_functions/detail/polygamma.hpp}. The implementation follows the original but has been modified for JavaScript.
*
* ```text
* (C) Copyright Nikhar Agrawal 2013.
* (C) Copyright Christopher Kormanyos 2013.
* (C) Copyright John Maddock 2014.
* (C) Copyright Paul Bristow 2013.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var logger = require( 'debug' );
var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var factorial = require( '@stdlib/math/base/special/factorial' );
var trigamma = require( '@stdlib/math/base/special/trigamma' );
var digamma = require( '@stdlib/math/base/special/digamma' );
var signum = require( '@stdlib/math/base/special/signum' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );
var floor = require( '@stdlib/math/base/special/floor' );
var trunc = require( '@stdlib/math/base/special/trunc' );
var zeta = require( '@stdlib/math/base/special/riemann-zeta' );
var abs = require( '@stdlib/math/base/special/abs' );
var min = require( '@stdlib/math/base/special/min' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var MAX = require( '@stdlib/constants/math/float64-max' );
var PI = require( '@stdlib/constants/math/float64-pi' );
var attransitionplus = require( './attransitionplus.js' );
var atinfinityplus = require( './atinfinityplus.js' );
var polycotpi = require( './polycotpi.js' );
var nearzero = require( './nearzero.js' );


// VARIABLES //

var debug = logger( 'polygamma' );
var DIGITS_BASE10 = 19;


// MAIN //

/**
* Evaluates the polygamma function.
*
* @param {NonNegativeInteger} n - order of derivative
* @param {number} x - input value
* @returns {number} (n+1)'th derivative
*
* @example
* var v = polygamma( 3, 1.2 );
* // returns ~3.245
*
* @example
* var v = polygamma( 5, 1.2 );
* // returns ~41.39
*
* @example
* var v = polygamma( 3, -4.9 );
* // returns ~60014.239
*
* @example
* var v = polygamma( 2.5, -1.2 );
* // returns NaN
*
* @example
* var v = polygamma( -1, 5.3 );
* // returns NaN
*
* @example
* var v = polygamma( 2, -2.0 );
* // returns NaN
*
* @example
* var v = polygamma( NaN, 2.1 );
* // returns NaN
*
* @example
* var v = polygamma( 1, NaN );
* // returns NaN
*
* @example
* var v = polygamma( NaN, NaN );
* // returns NaN
*/
function polygamma( n, x ) {
	var xSmallLimit;
	var result;
	var z;

	if ( !isNonNegativeInteger( n ) ) {
		return NaN;
	}
	if ( n === 0 ) {
		return digamma( x );
	}
	if ( n === 1 ) {
		return trigamma( x );
	}
	if ( x < 0.0 ) {
		if ( floor(x) === x ) {
			// Result is infinity if `x` is odd, and a pole error if `x` is even.
			if ( trunc( x ) & 1 ) {
				return PINF;
			}
			debug( 'Evaluation at negative integer: %d.', x );
			return NaN;
		}
		z = 1.0 - x;
		result = polygamma( n, z ) + ( PI * polycotpi( n, z, x ) );
		return ( n & 1 ) ? -result : result;
	}
	// Limit for use of small-x series is chosen so that the series doesn't go too divergent in the first few terms. Ordinarily, this would mean setting the limit to `~1/n`, but we can tolerate a small amount of divergence:
	xSmallLimit = min( 5.0/n, 0.25 );
	if ( x < xSmallLimit ) {
		return nearzero( n, x );
	}
	if ( x > ( 0.4 * DIGITS_BASE10 ) + ( 4*n ) ) {
		return atinfinityplus( n, x );
	}
	if ( x === 1.0 ) {
		return ( ( n & 1 ) ? 1.0 : -1.0 ) * factorial( n ) * zeta( n+1 );
	}
	if ( x === 0.5 ) {
		result = ( ( n & 1 ) ? 1.0 : -1.0 ) * factorial( n ) * zeta( n+1 );
		if ( abs( result ) >= ldexp( MAX, -n-1 ) ) {
			return ( signum( result ) === 1 ) ? PINF : NINF;
		}
		result *= ldexp( 1.0, n+1 ) - 1.0;
		return result;
	}
	return attransitionplus( n, x );
}


// EXPORTS //

module.exports = polygamma;
