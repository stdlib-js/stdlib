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

var gammaln = require( '@stdlib/math/base/special/gammaln' );
var ln = require( '@stdlib/math/base/special/ln' );
var LN_SQRT_TWO_PI = require( '@stdlib/constants/math/float64-ln-sqrt-two-pi' );
var SMALLEST_FLOAT32 = require( '@stdlib/constants/math/float32-smallest-normal' );
var MAX_FLOAT32 = require( '@stdlib/constants/math/float32-max' );
var chepolsum = require( './chepolsum.js' );
var polyvalC = require( './polyval_c.js' );
var polyvalD = require( './polyval_d.js' );


// VARIABLES //

var C6 = 0.30865217988013567769;


// MAIN //

/**
* Computes the Stirling series corresponding to asymptotic series for the logarithm of the gamma function.
*
* ```tex
* \frac{1}{12x}-\frac{1}{360x^3}\ldots; x \ge 3
* ```
*
* @private
* @param {number} x - input value
* @returns {number} function value
*/
function stirling( x ) {
	var z;
	if ( x < SMALLEST_FLOAT32 ) {
		return MAX_FLOAT32;
	}
	if ( x < 1.0 ) {
		return gammaln( x+1.0 ) - ( (x+0.5) * ln(x) ) + x - LN_SQRT_TWO_PI;
	}
	if ( x < 2.0 ) {
		return gammaln( x ) - ( (x-0.5) * ln(x) ) + x - LN_SQRT_TWO_PI;
	}
	if ( x < 3.0 ) {
		return gammaln( x-1.0 ) - ( (x-0.5) * ln(x) ) + x - LN_SQRT_TWO_PI + ln( x-1.0 ); // eslint-disable-line max-len
	}
	if ( x < 12.0 ) {
		z = ( 18.0/( x*x ) ) - 1.0;
		return chepolsum( 17, z ) / ( 12.0*x );
	}
	z = 1.0 / ( x * x );
	if ( x < 1000.0 ) {
		return polyvalC( z ) / ( C6+z ) / x;
	}
	return polyvalD( z ) / x;
}


// EXPORTS //

module.exports = stirling;
