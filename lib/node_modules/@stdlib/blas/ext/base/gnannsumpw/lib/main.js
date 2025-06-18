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

// MODULES //

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Computes the sum of strided array elements, ignoring `NaN` values and using pairwise summation.
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
* @param {Collection} x - input array
* @param {integer} strideX - stride length for `x`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @returns {Collection} output array
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
* var out = [ 0.0, 0 ];
*
* var v = gnannsumpw( x.length, x, 1, out, 1 );
* // returns [ 1.0, 3 ]
*/
function gnannsumpw( N, x, strideX, out, strideOut ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), out, strideOut, stride2offset( 2, strideOut ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gnannsumpw;
