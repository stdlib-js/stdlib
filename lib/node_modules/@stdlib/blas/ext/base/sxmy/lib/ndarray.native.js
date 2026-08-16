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
* Multiplies elements of a single-precision floating-point strided array `x` by the corresponding elements of a single-precision floating-point strided array `y` and assigns the results to `y` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* sxmy( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 2.0, 6.0, 12.0, 20.0, 30.0 ]
*/
function sxmy( N, x, strideX, offsetX, y, strideY, offsetY ) {
	addon.ndarray( N, x, strideX, offsetX, y, strideY, offsetY );
	return y;
}


// EXPORTS //

module.exports = sxmy;
