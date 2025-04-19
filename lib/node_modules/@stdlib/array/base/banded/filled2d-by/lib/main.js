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
* Returns a filled two-dimensional banded nested array according to a provided callback function.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeInteger} ku - number of super-diagonals
* @param {NonNegativeInteger} kl - number of sub-diagonals
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
* var out = filled2dBy( [ 3, 3 ], 1, 1, 0, clbk );
* // returns [ [ 0, 1, 0 ], [ 1, 2, 3 ], [ 0, 3, 4 ] ]
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( [ 4, 4 ], 1, 1, 0, clbk );
* // returns [ [ 0, 1, 0, 0 ], [ 1, 2, 3, 0 ], [ 0, 3, 4, 5 ], [ 0, 0, 5, 6 ] ]
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( [ 4, 4 ], 2, 1, 0, clbk );
* // returns [ [ 0, 1, 2, 0 ], [ 1, 2, 3, 4 ], [ 0, 3, 4, 5 ], [ 0, 0, 5, 6 ] ]
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( [ 4, 4 ], 0, 2, 0, clbk );
* // returns [ [ 0, 0, 0, 0 ], [ 1, 2, 0, 0 ], [ 2, 3, 4, 0 ], [ 0, 4, 5, 6 ] ]
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( [ 3, 4 ], 1, 1, 0, clbk );
* // returns [ [ 0, 1, 0, 0 ], [ 1, 2, 3, 0 ], [ 0, 3, 4, 5 ] ]
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( [ 4, 3 ], 1, 1, 0, clbk );
* // returns [ [ 0, 1, 0 ], [ 1, 2, 3 ], [ 0, 3, 4 ], [ 0, 0, 5 ] ]
*/
function filled2dBy( shape, ku, kl, fill, clbk, thisArg ) {
	var arr;
	var a0;
	var S0;
	var S1;
	var i0;
	var i1;

	S1 = shape[ 0 ]; // rows
	S0 = shape[ 1 ]; // columns

	// Manually push elements in order to ensure "fast" elements...
	arr = [];
	for ( i1 = 0; i1 < S1; i1++ ) {
		a0 = [];
		for ( i0 = 0; i0 < S0; i0++ ) {
			// Check whether we are within the band...
			if (
				( i0 >= i1 && i0 <= i1+ku ) || // super-diagonals
				( i0 <= i1 && i1 <= i0+kl )    // sub-diagonals
			) {
				a0.push( clbk.call( thisArg, [ i1, i0 ] ) );
			}
			// Otherwise, we are outside the band...
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
