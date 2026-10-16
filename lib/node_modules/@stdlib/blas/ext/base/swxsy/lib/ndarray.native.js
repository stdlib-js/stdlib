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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Subtracts elements of a single-precision floating-point strided array `y` from the corresponding elements of a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `w` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Float32Array} w - output array
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, -4.0, 6.0, 5.0, -7.0 ] );
* var y = new Float32Array( [ 5.0, 3.0, 2.0, -7.0, 1.0 ] );
* var w = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* swxsy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => <Float32Array>[ -3.0, -7.0, 4.0, 12.0, -8.0 ]
*/
function swxsy( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW ) { // eslint-disable-line max-len
	addon.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW ); // eslint-disable-line max-len
	return w;
}


// EXPORTS //

module.exports = swxsy;
