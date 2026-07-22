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

// MAIN //

/**
* Returns the index of the first element in a single-precision floating-point strided array equal to a corresponding element in another single-precision floating-point strided array using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {integer} index
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 3.0, 0.0 ] );
*
* var idx = sfirstIndexEqual( x.length, x, 1, 0, y, 1, 0 );
* // returns 2
*/
function sfirstIndexEqual( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var i;

	if ( N <= 0 ) {
		return -1;
	}
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		if ( x[ ix ] === y[ iy ] ) {
			return i;
		}
		ix += strideX;
		iy += strideY;
	}
	return -1;
}


// EXPORTS //

module.exports = sfirstIndexEqual;
