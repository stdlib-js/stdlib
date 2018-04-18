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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var gammaLanczosSum = require( '@stdlib/math/base/special/gamma-lanczos-sum' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var signum = require( '@stdlib/math/base/special/signum' );
var floor = require( '@stdlib/math/base/special/floor' );
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var SQRT_EPSILON = require( '@stdlib/constants/math/float64-sqrt-eps' );
var LANCZOS_G = require( '@stdlib/constants/math/float64-gamma-lanczos-g' );
var EULERGAMMA = require( '@stdlib/constants/math/float64-eulergamma' );
var MAX_VALUE = require( '@stdlib/constants/math/float64-max' );
var MAX_LN = require( '@stdlib/constants/math/float64-max-ln' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var PI = require( '@stdlib/constants/math/float64-pi' );
var sinpx = require( './sinpx.js' );
var FACTORIALS = require( './factorials.json' );


// VARIABLES //

var MAX_FACTORIAL = 170;
var HALF = 0.5;


// MAIN //

/**
* Evaluates the gamma function.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = gamma( 4.0 );
* // returns 6.0
*
* @example
* var v = gamma( -1.5 );
* // returns ~2.363
*
* @example
* var v = gamma( -0.5 );
* // returns ~-3.545
*
* @example
* var v = gamma( 0.5 );
* // returns ~1.772
*
* @example
* var v = gamma( 0.0 );
* // returns Infinity
*
* @example
* var v = gamma( -0.0 );
* // returns -Infinity
*
* @example
* var v = gamma( NaN );
* // returns NaN
*/
function gamma( x ) {
	var result;
	var lzgh;
	var zgh;
	var hp;

	if ( x === NINF || isnan( x ) ) {
		return NaN;
	}
	if ( x === 0.0 ) {
		if ( isNegativeZero( x ) ) {
			return NINF;
		}
		return PINF;
	}
	result = 1.0;
	if ( x < 0.0 ) {
		if ( isInteger( x ) ) {
			return NaN;
		}
		if ( x <= -20.0 ) {
			result = gamma( -x ) * sinpx( x );
			if ( abs(result) < 1.0 && MAX_VALUE * abs(result) < PI ) {
				return ( signum( result ) === 1 ) ? NINF : PINF;
			}
			result = -PI / result;
			return result;
		}
		// Shift x to > 1:
		while ( x < 0.0 ) {
			result /= x;
			x += 1.0;
		}
	}
	if ( floor( x ) === x && x < MAX_FACTORIAL ) {
		result *= FACTORIALS[ floor( x ) - 1 ];
	}
	else if ( x < SQRT_EPSILON ) {
		if ( x < 1.0 / MAX_VALUE ) {
			result = PINF;
		}
		result *= ( 1.0 / x ) - EULERGAMMA;
	}
	else {
		result *= gammaLanczosSum( x );
		zgh = ( x + LANCZOS_G - HALF );
		lzgh = ln( zgh );
		if ( x * lzgh > MAX_LN ) {
			// We're going to overflow unless this is done with care:
			if ( lzgh * x / 2.0 > MAX_LN ) {
				return ( signum( result ) === 1 ) ? PINF : NINF;
			}
			hp = pow( zgh, ( x / 2.0 ) - 0.25 );
			result *= hp / exp( zgh );
			if ( MAX_VALUE / hp < result ) {
				return ( signum( result ) === 1 ) ? PINF : NINF;
			}
			result *= hp;
		} else {
			result *= pow( zgh, x - HALF ) / exp( zgh );
		}
	}
	return result;
}


// EXPORTS //

module.exports = gamma;
