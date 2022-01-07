/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var cusum = require( './ndarray.js' );


// MAIN //

/**
* Computes the cumulative sum of strided array elements using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} sum - initial sum
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} y - output array
* @param {integer} strideY - `y` stride length
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* var v = gcusumpw( x.length, 0.0, x, 1, y, 1 );
* // returns [ 1.0, -1.0, 1.0 ]
*/
function gcusumpw( N, sum, x, strideX, y, strideY ) {
	var ix;
	var iy;

	if ( N <= 0 ) {
		return y;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	return cusum( N, sum, x, strideX, ix, y, strideY, iy );
}


// EXPORTS //

module.exports = gcusumpw;
