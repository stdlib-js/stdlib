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

var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Performs a multiply-add operation involving three single-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.
*
* @param {Float32Array} alpha - first complex number view
* @param {integer} strideA - stride length for `alpha`
* @param {NonNegativeInteger} offsetA - starting index for `alpha`
* @param {Float32Array} x - second complex number view
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - third complex number view
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Collection} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var alpha = new Float32Array( [ 5.0, 3.0 ] );
* var x = new Float32Array( [ -2.0, 1.0 ] );
* var y = new Float32Array( [ 7.0, -8.0 ] );
*
* var out = strided( alpha, 1, 0, x, 1, 0, y, 1, 0, new Float32Array( 2 ), 1, 0 );
* // returns <Float32Array>[ -6.0, -9.0 ]
*/
function strided( alpha, strideA, offsetA, x, strideX, offsetX, y, strideY, offsetY, out, strideOut, offsetOut ) { // eslint-disable-line max-len, max-params
	var re0 = alpha[ offsetA ];
	var im0 = alpha[ offsetA+strideA ];
	var re1 = x[ offsetX ];
	var im1 = x[ offsetX+strideX ];
	var re2 = y[ offsetY ];
	var im2 = y[ offsetY+strideY ];
	out[ offsetOut ] = f32( f32( f32(re0*re1) - f32(im0*im1) ) + re2 );
	out[ offsetOut+strideOut ] = f32( f32( f32(re0*im1) + f32(im0*re1) ) + im2 ); // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = strided;
