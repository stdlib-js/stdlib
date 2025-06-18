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
* Returns a filled two-dimensional symmetric nested array according to a provided callback function.
*
* @param {NonNegativeInteger} N - number of rows and columns
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - callback function execution context
* @returns {Array} filled array
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( 3, clbk );
* // returns [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ]
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( 4, clbk );
* // returns [ [ 0, 1, 2, 3 ], [ 1, 2, 3, 4 ], [ 2, 3, 4, 5 ], [ 3, 4, 5, 6 ] ]
*/
function filled2dBy( N, clbk, thisArg ) {
	var arr;
	var a0;
	var i;
	var j;

	// Manually push elements in order to ensure "fast" elements...
	arr = [];
	for ( i = 0; i < N; i++ ) {
		a0 = [];
		for ( j = 0; j < N; j++ ) {
			if ( i > j ) {
				a0.push( arr[ j ][ i ] );
			} else {
				a0.push( clbk.call( thisArg, [ i, j ] ) );
			}
		}
		arr.push( a0 );
	}
	return arr;
}


// EXPORTS //

module.exports = filled2dBy;
