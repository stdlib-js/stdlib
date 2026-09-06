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
* Adds a scalar constant to each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `w` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar constant
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float64Array} w - output array
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dwapx( x.length, 5.0, x, 1, 0, w, 1, 0 );
* // w => <Float64Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
*/
function dwapx( N, alpha, x, strideX, offsetX, w, strideW, offsetW ) {
	addon.ndarray( N, alpha, x, strideX, offsetX, w, strideW, offsetW );
	return w;
}


// EXPORTS //

module.exports = dwapx;
