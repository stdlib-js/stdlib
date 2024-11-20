/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/**
* Returns the first row index at which a given one-dimensional array of types can be found in a two-dimensional reference array of types (or `-1` if not found).
*
* ## Notes
*
* -   The intended use case for this function is for type dispatch (i.e., given a set of array data types, find a matching interface according the interface's accepted array data types).
* -   The function assumes that `x` is stored in row-major order.
* -   The function assumes that the number of indexed elements in `y` equals the number of columns in `x`.
* -   The function returns a row index. To convert to a linear index, multiply `strideX1` by the return value.
*
* @private
* @param {NonNegativeInteger} N - number of rows in `x` (size of first dimension)
* @param {NonNegativeInteger} M - number of columns in `x` (size of second dimension)
* @param {ArrayLikeObject} x - input two-dimensional reference array
* @param {integer} strideX1 - `x` stride length along first dimension
* @param {integer} strideX2 - `x` stride length along second dimension
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {ArrayLikeObject} y - search array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - `y` starting index
* @returns {integer} row index (if found) and `-1` otherwise
*
* @example
* // Define a reference array to search:
* var types = [
*     'float64', 'float64', 'float64',
*     'float32', 'float32', 'float32',
*     'uint32', 'uint32', 'float64',
*     'int32', 'int32', 'float64',
*     'uint16', 'uint16', 'float64',
*     'int16', 'int16', 'float64',
*     'uint8', 'uint8', 'float64',
*     'int8', 'int8', 'float64'
* ];
*
* // Define reference array dimensions:
* var N = 8; // rows
* var M = 3; // columns
*
* // Define a search array:
* y1 = [
*     'float32', 'float32', 'float32',
* ];
*
* // Find the list of types:
* var r1 = indexOfTypes( N, M, types, M, 1, 0, y1, 1, 0 );
* // returns 1
*
// Define a search array:
* y2 = [
*     'float32', 'float32', 'float64',
* ];
*
* // Find the list of types:
* var r2 = indexOfTypes( N, M, types, M, 1, 0, y2, 1, 0 );
* // returns -1
*/
function indexOfTypes( N, M, x, strideX1, strideX2, offsetX, y, strideY, offsetY ) { // eslint-disable-line max-len
	var ix;
	var iy;
	var i;
	var j;

	// Search for the first row which matches `y`...
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		iy = offsetY;
		for ( j = 0; j < M; j++ ) {
			if ( x[ ix+(j*strideX2) ] !== y[ iy ] ) {
				break;
			}
			iy += strideY;
		}
		// If we successfully iterated over all columns, then that means we've found a match...
		if ( j === M ) {
			return i;
		}
		ix += strideX1;
	}
	return -1;
}


// EXPORTS //

module.exports = indexOfTypes;
