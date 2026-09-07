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
* Returns the first index of an element in a double-precision floating-point strided array which is not equal to a specified search element using alternative indexing semantics.
*
* ## Notes
*
* -   If all elements are equal to the search element, the function returns `-1`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} searchElement - search element
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {integer} index
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 1.0, 0.0, 1.0 ] );
*
* var idx = dindexOfNotEqual( x.length, 1.0, x, 1, 0 );
* // returns 2
*/
function dindexOfNotEqual( N, searchElement, x, strideX, offsetX ) {
	var ix;
	var i;

	if ( N <= 0 ) {
		return -1;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( x[ ix ] !== searchElement ) {
			return i;
		}
		ix += strideX;
	}
	return -1;
}


// EXPORTS //

module.exports = dindexOfNotEqual;
