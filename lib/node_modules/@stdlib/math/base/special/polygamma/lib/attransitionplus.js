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
var factorial = require( '@stdlib/math/base/special/factorial' );
var gammaln = require( '@stdlib/math/base/special/gammaln' );
var trunc = require( '@stdlib/math/base/special/trunc' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var MAX_LN = require( '@stdlib/constants/math/float64-max-ln' );
var atinfinityplus = require( './atinfinityplus.js' );


// VARIABLES //

var debug = logger( 'polygamma' );
var MAX_SERIES_ITERATIONS = 1000000;
var DIGITS_BASE10 = 19;


// MAIN //

/**
* Evaluates the polygamma function.
*
* @private
* @param {PositiveInteger} n - derivative to evaluate
* @param {number} x - input
* @returns {number} (n+1)'th derivative
* @see {@link http://functions.wolfram.com/GammaBetaErf/PolyGamma2/16/01/01/0017/}
*/
function attransitionplus( n, x ) {
	var minusMminus1;
	var lnterm;
	var zpows;
	var iter;
	var sum0;
	var d4d;
	var N;
	var m;
	var k;
	var z;

	// Use N = (0.4 * digits) + (4 * n) for target value for x:
	d4d = 0.4 * DIGITS_BASE10;
	N = d4d + ( 4*n );
	m = n;
	iter = N - trunc( x );

	if ( iter > MAX_SERIES_ITERATIONS ) {
		debug( 'Exceeded maximum series evaluations when evaluated at n = %d and x = %d', n, x );
		return NaN;
	}
	minusMminus1 = -m - 1;
	z = x;
	sum0 = 0.0;
	zpows = 0.0;

	// Forward recursion to larger `x`, need to check for overflow first though:
	if ( ln( z+iter ) * minusMminus1 > -MAX_LN ) {
		for ( k = 1; k <= iter; k++ ) {
			zpows = pow( z, minusMminus1 );
			sum0 += zpows;
			z += 1;
		}
		sum0 *= factorial( n );
	} else {
		for ( k = 1; k <= iter; k++ ) {
			lnterm = ( ln( z ) * minusMminus1 ) + gammaln( n+1 );
			sum0 += exp( lnterm );
			z += 1;
		}
	}
	if ( ( n-1 ) & 1 ) {
		sum0 = -sum0;
	}
	return sum0 + atinfinityplus( n, z );
}


// EXPORTS //

module.exports = attransitionplus;
