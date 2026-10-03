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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the Cartesian product for two double-precision floating-point strided arrays using alternative indexing semantics.
*
* ## Notes
*
* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
*
* @param {NonNegativeInteger} M - number of indexed elements in `x`
* @param {NonNegativeInteger} N - number of indexed elements in `y`
* @param {Float64Array} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Float64Array} out - output array
* @param {integer} strideOut1 - stride length for the first dimension of `out`
* @param {integer} strideOut2 - stride length for the second dimension of `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0 ] );
* var y = new Float64Array( [ 3.0, 4.0 ] );
* var out = new Float64Array( 8 );
*
* dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
* // out => <Float64Array>[ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ]
*/
function dcartesianProduct( M, N, x, strideX, offsetX, y, strideY, offsetY, out, strideOut1, strideOut2, offsetOut ) {
	addon.ndarray( M, N, x, strideX, offsetX, y, strideY, offsetY, out, strideOut1, strideOut2, offsetOut );
	return out;
}


// EXPORTS //

module.exports = dcartesianProduct;
