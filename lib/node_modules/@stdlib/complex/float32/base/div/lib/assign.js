/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var signumf = require( '@stdlib/math/base/special/signumf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Divides two single-precision complex floating-point numbers and assigns results to a provided output array.
*
* ## Notes
*
* -   The implementation computes intermediate results in double-precision arithmetic and rounds only final results to single-precision, following the approach used for single-precision complex division in [Julia][@julia:complex]. As input components are single-precision floating-point numbers, all intermediate products are exact in double-precision, and the squared magnitude of the denominator can neither overflow nor underflow in double-precision, thus avoiding the need for the scaling used in robust native-precision algorithms (e.g., as used in `@stdlib/complex/float64/base/div`).
* -   When dividing a finite complex number by an infinite complex number, the function returns signed zeros, with the signs derived from the signs of the respective input components.
*
* [@julia:complex]: https://github.com/JuliaLang/julia/blob/5bd20a13d21524e74fe61f5d699bd5640aff1216/base/complex.jl#L369-L382
*
* @param {number} re1 - real component of the first complex number
* @param {number} im1 - imaginary component of the first complex number
* @param {number} re2 - real component of the second complex number
* @param {number} im2 - imaginary component of the second complex number
* @param {Collection} out - output array
* @param {integer} strideOut - stride length
* @param {NonNegativeInteger} offsetOut - starting index
* @returns {Collection} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var out = assign( -13.0, -1.0, -2.0, 1.0, new Float32Array( 2 ), 1, 0 );
* // returns <Float32Array>[ 5.0, 3.0 ]
*/
function assign( re1, im1, re2, im2, out, strideOut, offsetOut ) {
	var mag;
	var re;
	var im;

	if ( isInfinite( re2 ) || isInfinite( im2 ) ) {
		if ( !isfinite( re1 ) || !isfinite( im1 ) ) {
			out[ offsetOut ] = NaN;
			out[ offsetOut+strideOut ] = NaN;
			return out;
		}
		// When dividing a finite complex number by an infinite complex number, the quotient underflows to signed zeros:
		out[ offsetOut ] = 0.0 * signumf( re1 ) * signumf( re2 );
		out[ offsetOut+strideOut ] = -0.0 * signumf( im1 ) * signumf( im2 );
		return out;
	}
	// Compute intermediate results in double-precision arithmetic (note: `NaN` input components naturally propagate to both output components):
	mag = 1.0 / ( ( re2 * re2 ) + ( im2 * im2 ) );
	re = ( ( re1 * re2 ) + ( im1 * im2 ) ) * mag;
	im = ( ( im1 * re2 ) - ( re1 * im2 ) ) * mag;

	// Round the final results to single-precision:
	out[ offsetOut ] = f32( re );
	out[ offsetOut+strideOut ] = f32( im );
	return out;
}


// EXPORTS //

module.exports = assign;
