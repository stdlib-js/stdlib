/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var FLOAT64_EPS = require( '@stdlib/constants/float64/eps' );
var FLOAT64_SMALLEST_NORMAL = require( '@stdlib/constants/float64/smallest-normal' );
var FLOAT64_MIN_EXPONENT = require( '@stdlib/constants/float64/min-base2-exponent' );
var FLOAT64_MAX_EXPONENT = require( '@stdlib/constants/float64/max-base2-exponent' );
var FLOAT64_MAX = require( '@stdlib/constants/float64/max' );
var FLOAT64_PRECISION = require( '@stdlib/constants/float64/precision' );
var lowercase = require( '@stdlib/string/base/lowercase' );


// VARIABLES //

var RADIX = 2.0;


// MAIN //

/**
* Determines double-precision floating-point machine parameters.
*
* ## Notes
*
* -   The `cmach` parameter is a string which specifies the double-precision machine parameter to be returned. The function recognizes the following characters:
*
*     -   `'E'`/`'e'`: (eps) relative machine precision.
*     -   `'S'`/`'s'`: (sfmin) safe minimum such that `1/sfmin` does not overflow.
*     -   `'B'`/`'b'`: (base) base of the machine (also known as the floating-point radix).
*     -   `'P'`/`'p'`: (prec) `eps*base`.
*     -   `'N'`/`'n'`: (t) number of (base) digits in the mantissa.
*     -   `'R'`/`'r'`: (rnd) `1.0` when rounding occurs in addition and `0.0` otherwise.
*     -   `'M'`/`'m'`: (emin) minimum exponent before (gradual) underflow.
*     -   `'U'`/`'u'`: (rmin) underflow threshold.
*     -   `'L'`/`'l'`: (emax) largest exponent before overflow.
*     -   `'O'`/`'o'`: (rmax) overflow threshold.
*
* @param {string} cmach - specifies the value to be returned
* @returns {number} machine parameter
*
* @example
* var out = dlamch( 'E' );
* // returns ~1.1102230246251565e-016
*
* out = dlamch( 'S' );
* // returns ~2.2250738585072014e-308
*
* out = dlamch( 'B' );
* // returns 2.0
*/
function dlamch( cmach ) {
	cmach = lowercase( cmach.charAt( 0 ) );
	if ( cmach === 'e' ) {
		return FLOAT64_EPS * 0.5;
	}
	if ( cmach === 's' ) {
		return FLOAT64_SMALLEST_NORMAL;
	}
	if ( cmach === 'b' ) {
		return RADIX;
	}
	if ( cmach === 'p' ) {
		return FLOAT64_EPS * 0.5 * RADIX;
	}
	if ( cmach === 'n' ) {
		return FLOAT64_PRECISION;
	}
	if ( cmach === 'r' ) {
		return 1.0;
	}
	if ( cmach === 'm' ) {
		return FLOAT64_MIN_EXPONENT + 1;
	}
	if ( cmach === 'u' ) {
		return FLOAT64_SMALLEST_NORMAL;
	}
	if ( cmach === 'l' ) {
		return FLOAT64_MAX_EXPONENT + 1;
	}
	if ( cmach === 'o' ) {
		return FLOAT64_MAX;
	}
	return 0.0;
}


// EXPORTS //

module.exports = dlamch;
