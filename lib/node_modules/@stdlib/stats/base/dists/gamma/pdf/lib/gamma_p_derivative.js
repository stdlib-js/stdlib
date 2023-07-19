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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_58_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE_1_0.txt or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var gammaln = require( '@stdlib/math/base/special/gammaln' );
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var FLOAT64_MAX = require( '@stdlib/constants/float64/max' );
var regularisedGammaPrefix = require( './regularised_gamma_prefix.js' );


// MAIN //

/**
* Calculates the partial derivative with respect to x of the incomplete gamma function.
*
* @private
* @param {PositiveNumber} a - function parameter
* @param {NonNegativeNumber} x - function parameter
* @returns {number} function value
*/
function gammaPDerivative( a, x ) {
	var f1;
	if ( a <= 0.0 ) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return NaN;
	}
	if ( x === 0.0 ) {
		if ( a > 1.0 ) {
			return 0.0;
		}
		return ( a === 1.0 ) ? 1.0 : PINF;
	}
	f1 = regularisedGammaPrefix( a, x );
	if ( x < 1.0 && ( FLOAT64_MAX * x < f1 ) ) {
		return PINF;
	}
	if ( f1 === 0.0 ) {
		// Underflow in calculation, use logs instead:
		f1 = (a * ln( x )) - x - gammaln( a ) - ln( x );
		f1 = exp( f1 );
	} else {
		f1 /= x;
	}
	return f1;
}


// EXPORTS //

module.exports = gammaPDerivative;
