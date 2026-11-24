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

var drrss = require( '@stdlib/blas/ext/base/drrss' ).ndarray;


// MAIN //

/**
* Computes the Euclidean distance between two double-precision floating-point strided arrays using alternative indexing semantics.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - stride length of `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - stride length of `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {number} Euclidean distance
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
* var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var z = deuclidean( x.length, x, 1, 0, y, 1, 0 );
* // returns ~8.485
*/
function deuclidean( N, x, strideX, offsetX, y, strideY, offsetY ) {
	if ( N <= 0 ) {
		return NaN;
	}
	return drrss( N, x, strideX, offsetX, y, strideY, offsetY );
}


// EXPORTS //

module.exports = deuclidean;
