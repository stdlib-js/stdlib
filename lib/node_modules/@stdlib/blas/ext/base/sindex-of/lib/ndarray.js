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

// MAIN //

/**
* Returns the first index of a specified search element in a single-precision floating-point strided array using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} searchElement - search element
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {integer} index
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );
*
* var idx = sindexOf( x.length, 3.0, x, 1, 0 );
* // returns 2
*/
function sindexOf( N, searchElement, x, strideX, offsetX ) {
	var ix;
	var i;

	if ( N <= 0 ) {
		return -1;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( x[ ix ] === searchElement ) {
			return i;
		}
		ix += strideX;
	}
	return -1;
}


// EXPORTS //

module.exports = sindexOf;
