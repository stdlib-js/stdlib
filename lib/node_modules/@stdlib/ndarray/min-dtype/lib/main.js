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

var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var FLOAT32_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float32/smallest-subnormal' ); // eslint-disable-line id-length
var FLOAT32_MAX = require( '@stdlib/constants/float32/max' );
var INT8_MIN = require( '@stdlib/constants/int8/min' );
var INT16_MIN = require( '@stdlib/constants/int16/min' );
var INT32_MIN = require( '@stdlib/constants/int32/min' );
var UINT8_MAX = require( '@stdlib/constants/uint8/max' );
var UINT16_MAX = require( '@stdlib/constants/uint16/max' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );


// MAIN //

/**
* Returns the minimum ndarray data type of the closest "kind" necessary for storing a provided scalar value.
*
* @param {*} value - scalar value
* @returns {string} ndarray data type
*
* @example
* var dt = minDataType( 3.141592653589793 );
* // returns 'float32'
*
* @example
* var dt = minDataType( 3 );
* // returns 'uint8'
*/
function minDataType( value ) {
	var re;
	var im;
	if ( typeof value !== 'number' ) {
		if ( isComplexLike( value ) ) {
			re = real( value );
			im = imag( value );
			if (
				( re !== re || re === PINF || re === NINF ) &&
				( im !== im || im === PINF || im === NINF )
			) {
				return 'complex64';
			}
			if (
				re > FLOAT32_MAX || re < -FLOAT32_MAX ||
				im > FLOAT32_MAX || im < -FLOAT32_MAX
			) {
				return 'complex128';
			}
			// Assume that if we are provided tiny values, we don't want to underflow to zero by storing as `complex64`...
			if (
				(
					re > -FLOAT32_SMALLEST_SUBNORMAL &&
					re < FLOAT32_SMALLEST_SUBNORMAL
				) ||
				(
					im > -FLOAT32_SMALLEST_SUBNORMAL &&
					im < FLOAT32_SMALLEST_SUBNORMAL
				)
			) {
				return 'complex128';
			}
			// Any complex number which reaches this point has real and imaginary components which are less than the maximum single-precision floating-point number, given that floating-point format supports a limited number of decimals (e.g., (1.0+EPS)*10**15 => 1000000000000000.2, which is less than ~3.4e38)...
			return 'complex64';
		}
		return 'generic';
	}
	if ( value !== value || value === PINF || value === NINF ) {
		return 'float32';
	}
	if ( isInteger( value ) ) {
		if ( value === 0 && isNegativeZero( value ) ) {
			return 'float32';
		}
		if ( value < 0 ) {
			if ( value >= INT8_MIN ) {
				return 'int8';
			}
			if ( value >= INT16_MIN ) {
				return 'int16';
			}
			if ( value >= INT32_MIN ) {
				return 'int32';
			}
			return 'float64';
		}
		if ( value <= UINT8_MAX ) {
			return 'uint8';
		}
		if ( value <= UINT16_MAX ) {
			return 'uint16';
		}
		if ( value <= UINT32_MAX ) {
			return 'uint32';
		}
		return 'float64';
	}
	// Assume that if we are provided a tiny value, we don't want to underflow to zero by storing as `float32`...
	if (
		value > -FLOAT32_SMALLEST_SUBNORMAL &&
		value < FLOAT32_SMALLEST_SUBNORMAL
	) {
		return 'float64';
	}
	// Any number which reaches this point is less than the maximum single-precision floating-point number, given that floating-point format supports a limited number of decimals (e.g., (1.0+EPS)*10**15 => 1000000000000000.2, which is less than ~3.4e38)...
	return 'float32';
}


// EXPORTS //

module.exports = minDataType;
