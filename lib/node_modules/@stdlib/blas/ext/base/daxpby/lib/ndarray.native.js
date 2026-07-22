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
* Multiplies a double-precision floating-point strided array `x` by a constant and adds the result to a double-precision floating-point strided array `y` multiplied by a constant using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - first scalar constant
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {number} beta - second scalar constant
* @param {Float64Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* daxpby( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 );
* // y => <Float64Array>[ 9.0, 16.0, 23.0, 30.0, 37.0 ]
*/
function daxpby( N, alpha, x, strideX, offsetX, beta, y, strideY, offsetY ) {
	addon.ndarray( N, alpha, x, strideX, offsetX, beta, y, strideY, offsetY );
	return y;
}


// EXPORTS //

module.exports = daxpby;
