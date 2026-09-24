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
* Replicates each single-precision floating-point strided array element a specified number of times.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {PositiveInteger} k - number of times to replicate each element
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
* var out = new Float32Array( 6 );
*
* var v = sreplicate( 3, 2, x, 1, 0, out, 1, 0 );
* // returns <Float32Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
*/
function sreplicate( N, k, x, strideX, offsetX, out, strideOut, offsetOut ) {
	addon.ndarray( N, k, x, strideX, offsetX, out, strideOut, offsetOut );
	return out;
}


// EXPORTS //

module.exports = sreplicate;
