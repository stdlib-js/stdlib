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
* Replaces single-precision floating-point strided array elements equal to a provided search element with a specified scalar constant using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} searchElement - search element
* @param {number} alpha - scalar constant
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {integer} offsetX - starting index
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* sfillEqual( x.length, 0.0, 5.0, x, 1, 0 );
* // x => <Float32Array>[ 5.0, 5.0, 1.0, 5.0 ]
*/
function sfillEqual( N, searchElement, alpha, x, strideX, offsetX ) {
	var ix;
	var i;

	if ( N <= 0 ) {
		return x;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( x[ ix ] === searchElement ) {
			x[ ix ] = alpha;
		}
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = sfillEqual;
