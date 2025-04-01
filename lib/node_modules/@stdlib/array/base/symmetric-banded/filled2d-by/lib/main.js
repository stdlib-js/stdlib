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
* Returns a filled two-dimensional symmetric banded nested array according to a provided callback function.
*
* @param {NonNegativeInteger} N - number of rows and columns
* @param {NonNegativeInteger} k - number of super-/sub-diagonals
* @param {*} fill - fill value for values outside the band
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - callback function execution context
* @returns {Array} filled array
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( 3, 1, 0, clbk );
* // returns [ [ 0, 1, 0 ], [ 1, 2, 3 ], [ 0, 3, 4 ] ]
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( 4, 1, 0, clbk );
* // returns [ [ 0, 1, 0, 0 ], [ 1, 2, 3, 0 ], [ 0, 3, 4, 5 ], [ 0, 0, 5, 6 ] ]
*/
function filled2dBy( N, k, fill, clbk, thisArg ) {
	var arr;
	var a0;
	var i;
	var j;

	// Manually push elements in order to ensure "fast" elements...
	arr = [];
	for ( i = 0; i < N; i++ ) {
		a0 = [];
		for ( j = 0; j < N; j++ ) {
			// Check whether we are within the band in the upper triangle...
			if ( j >= i && j <= i+k ) {
				a0.push( clbk.call( thisArg, [ i, j ] ) );
			}
			// Check whether we can take advantage of symmetry...
			else if ( j < i ) {
				a0.push( arr[ j ][ i ] );
			}
			// Otherwise, we are outside the band in the upper triangle...
			else {
				a0.push( fill );
			}
		}
		arr.push( a0 );
	}
	return arr;
}


// EXPORTS //

module.exports = filled2dBy;
