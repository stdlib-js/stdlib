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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
var ones = require( '@stdlib/array/base/ones' );


// MAIN //

/**
* Returns the index of the first row in an input matrix which has the same elements as a provided search vector.
*
* ## Notes
*
* -   If the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
*
* @private
* @param {PositiveInteger} M - number of rows in `A`
* @param {PositiveInteger} N - number of columns in `A`
* @param {Object} A - input matrix object
* @param {Collection} A.data - input matrix data
* @param {Array<Function>} A.accessors - matrix element accessors
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - index offset for `A`
* @param {Object} x - search vector object
* @param {Collection} x.data - search vector data
* @param {Array<Function>} x.accessors - search vector element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - index offset for `x`
* @returns {integer} row index
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = [ 3.0, 4.0 ];
*
* var out = gindexOfRow( 3, 2, arraylike2object( toAccessorArray( A ) ), 2, 1, 0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns 1
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var A = [ 1.0, 3.0, 0.0, 2.0, 4.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = [ 3.0, 4.0 ];
*
* var out = gindexOfRow( 3, 2, arraylike2object( toAccessorArray( A ) ), 1, 3, 0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns 1
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var A = [ 1.0, 3.0, 0.0, 2.0, 4.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = [ 1.0, 2.0 ];
*
* var out = gindexOfRow( 3, 2, arraylike2object( toAccessorArray( A ) ), 1, 3, 0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns 0
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var A = [ 1.0, 3.0, 0.0, 2.0, 4.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = [ 0.0, 0.0 ];
*
* var out = gindexOfRow( 3, 2, arraylike2object( toAccessorArray( A ) ), 1, 3, 0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns 2
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var A = [ 1.0, 3.0, 0.0, 2.0, 4.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = [ -3.0, -4.0 ];
*
* var out = gindexOfRow( 3, 2, arraylike2object( toAccessorArray( A ) ), 1, 3, 0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns -1
*/
function gindexOfRow( M, N, A, strideA1, strideA2, offsetA, x, strideX, offsetX ) { // eslint-disable-line max-len
	var matches;
	var abuf;
	var xbuf;
	var aget;
	var xget;
	var da0;
	var da1;
	var S0;
	var S1;
	var ia;
	var ix;
	var i0;
	var i1;

	// Cache references to array data:
	abuf = A.data;
	xbuf = x.data;

	// Cache references to the element accessors:
	aget = A.accessors[ 0 ];
	xget = x.accessors[ 0 ];

	// Search for the first row matching the search vector...
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		S0 = N;
		S1 = M;

		// Scan a row-major linear buffer from the first indexed element to the last indexed element, always moving in the same direction when both strides are the same sign, thus ensuring cache optimal traversal...
		for ( i1 = 0; i1 < S1; i1++ ) {
			ia = offsetA + ( i1*strideA1 );
			ix = offsetX;
			for ( i0 = 0; i0 < S0; i0++ ) {
				if ( aget( abuf, ia ) !== xget( xbuf, ix ) ) {
					// We found an element which is not in the search vector...
					break;
				}
				ia += strideA2;
				ix += strideX;
			}
			// If we successfully iterated over all columns, then that means we've found a match...
			if ( i0 === S0 ) {
				return i1;
			}
		}
		// If we've made it here, then no rows match the search vector:
		return -1;
	}
	// Column-major...
	S0 = M;
	S1 = N;

	// Resolve loop offset (pointer) increments:
	da0 = strideA1;
	da1 = strideA2 - ( S0*strideA1 );

	// Create an array for tracking which rows contain matching elements:
	matches = ones( M );

	// Finding the first matching row when a matrix is stored in column-major order requires effectively performing a full linear scan. In order to ensure cache-efficient traversal, scan down each column (otherwise, if we went row-by-row, we'd hop around linear memory, resulting in poor cache behavior)...
	ia = offsetA;
	ix = offsetX;
	for ( i1 = 0; i1 < S1; i1++ ) {
		// Scan down the rows in a column looking for a matching element...
		for ( i0 = 0; i0 < S0; i0++ ) {
			if ( aget( abuf, ia ) !== xget( xbuf, ix ) ) {
				// We found a non-matching element, which means we can exclude this row from the list of row candidates...
				matches[ i0 ] = 0;
			}
			ia += da0;
		}
		ia += da1;
		ix += strideX;
	}
	// Search for the first matching row...
	for ( i0 = 0; i0 < S0; i0++ ) {
		if ( matches[ i0 ] === 1 ) {
			break;
		}
	}
	return ( i0 === S0 ) ? -1 : i0;
}


// EXPORTS //

module.exports = gindexOfRow;
