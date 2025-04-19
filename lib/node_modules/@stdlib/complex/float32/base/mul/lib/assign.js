/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Multiplies two single-precision complex floating-point numbers and assigns results to a provided output array.
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
* var out = assign( 5.0, 3.0, -2.0, 1.0, new Float32Array( 2 ), 1, 0 );
* // returns <Float32Array>[ -13.0, -1.0 ]
*/
function assign( re1, im1, re2, im2, out, strideOut, offsetOut ) {
	out[ offsetOut ] = float64ToFloat32(re1*re2) - float64ToFloat32(im1*im2);
	out[ offsetOut+strideOut ] = float64ToFloat32(re1*im2) + float64ToFloat32(im1*re2);
	return out;
}


// EXPORTS //

module.exports = assign;
