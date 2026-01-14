/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MAIN //

/**
* Flattens a three-dimensional nested array according to a callback function and assigns elements to a provided output array.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param {Array<Array<Collection>>} x - input nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {boolean} colexicographic - specifies whether to flatten array values in colexicographic order
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
*
* var out = flatten3dBy( x, [ 2, 1, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
* // returns <Float64Array>[ 2, 4, 6, 8 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
*
* var out = flatten3dBy( x, [ 2, 1, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
* // returns <Float64Array>[ 2, 6, 4, 8 ]
*/
function flatten3dBy( x, shape, colexicographic, out, stride, offset, clbk, thisArg ) {
	var S0;
	var S1;
	var S2;
	var i0;
	var i1;
	var i2;
	var a0;
	var a1;
	var io;

	// Extract loop variables:
	S0 = shape[ 2 ]; // for nested arrays, the last dimensions have the fastest changing indices
	S1 = shape[ 1 ];
	S2 = shape[ 0 ];

	// Iterate over the array dimensions...
	io = offset;
	if ( colexicographic ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			for ( i1 = 0; i1 < S1; i1++ ) {
				for ( i2 = 0; i2 < S2; i2++ ) {
					out[ io ] = clbk.call( thisArg, x[ i2 ][ i1 ][ i0 ], [ i2, i1, i0 ], x ); // equivalent to storing in column-major (Fortran-style) order
					io += stride;
				}
			}
		}
		return out;
	}
	for ( i2 = 0; i2 < S2; i2++ ) {
		a1 = x[ i2 ];
		for ( i1 = 0; i1 < S1; i1++ ) {
			a0 = a1[ i1 ];
			for ( i0 = 0; i0 < S0; i0++ ) {
				out[ io ] = clbk.call( thisArg, a0[ i0 ], [ i2, i1, i0 ], x ); // equivalent to storing in row-major (C-style) order
				io += stride;
			}
		}
	}
	return out;
}


// EXPORTS //

module.exports = flatten3dBy;
