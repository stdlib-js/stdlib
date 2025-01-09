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

/* eslint-disable max-depth */

'use strict';

// MAIN //

/**
* Performs a reduction over elements in an eight-dimensional input ndarray.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {*} initial - initial value
* @param {Callback} accumulator - callback function
* @returns {*} result
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function add( acc, x ) {
*     return acc + x;
* }
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 1, 1, 1, 1, 1, 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 12, 12, 12, 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Compute the sum:
* var v = accumulate8d( x, 0.0, add );
* // returns 39.0
*/
function accumulate8d( x, initial, accumulator ) {
	var xbuf;
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dx4;
	var dx5;
	var dx6;
	var dx7;
	var acc;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var S5;
	var S6;
	var S7;
	var sx;
	var ix;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var i6;
	var i7;

	// Note on variable naming convention: S#, dx#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sh = x.shape;
	sx = x.strides;
	if ( x.order === 'row-major' ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 7 ];
		S1 = sh[ 6 ];
		S2 = sh[ 5 ];
		S3 = sh[ 4 ];
		S4 = sh[ 3 ];
		S5 = sh[ 2 ];
		S6 = sh[ 1 ];
		S7 = sh[ 0 ];
		dx0 = sx[ 7 ];                // offset increment for innermost loop
		dx1 = sx[ 6 ] - ( S0*sx[7] );
		dx2 = sx[ 5 ] - ( S1*sx[6] );
		dx3 = sx[ 4 ] - ( S2*sx[5] );
		dx4 = sx[ 3 ] - ( S3*sx[4] );
		dx5 = sx[ 2 ] - ( S4*sx[3] );
		dx6 = sx[ 1 ] - ( S5*sx[2] );
		dx7 = sx[ 0 ] - ( S6*sx[1] ); // offset increment for outermost loop
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		S2 = sh[ 2 ];
		S3 = sh[ 3 ];
		S4 = sh[ 4 ];
		S5 = sh[ 5 ];
		S6 = sh[ 6 ];
		S7 = sh[ 7 ];
		dx0 = sx[ 0 ];                // offset increment for innermost loop
		dx1 = sx[ 1 ] - ( S0*sx[0] );
		dx2 = sx[ 2 ] - ( S1*sx[1] );
		dx3 = sx[ 3 ] - ( S2*sx[2] );
		dx4 = sx[ 4 ] - ( S3*sx[3] );
		dx5 = sx[ 5 ] - ( S4*sx[4] );
		dx6 = sx[ 6 ] - ( S5*sx[5] );
		dx7 = sx[ 7 ] - ( S6*sx[6] ); // offset increment for outermost loop
	}
	// Set the pointer to the first indexed element:
	ix = x.offset;

	// Cache a reference to the input ndarray buffer:
	xbuf = x.data;

	// Initialize the accumulator:
	acc = initial;

	// Iterate over the ndarray dimensions...
	for ( i7 = 0; i7 < S7; i7++ ) {
		for ( i6 = 0; i6 < S6; i6++ ) {
			for ( i5 = 0; i5 < S5; i5++ ) {
				for ( i4 = 0; i4 < S4; i4++ ) {
					for ( i3 = 0; i3 < S3; i3++ ) {
						for ( i2 = 0; i2 < S2; i2++ ) {
							for ( i1 = 0; i1 < S1; i1++ ) {
								for ( i0 = 0; i0 < S0; i0++ ) {
									acc = accumulator( acc, xbuf[ ix ] );
									ix += dx0;
								}
								ix += dx1;
							}
							ix += dx2;
						}
						ix += dx3;
					}
					ix += dx4;
				}
				ix += dx5;
			}
			ix += dx6;
		}
		ix += dx7;
	}
	return acc;
}


// EXPORTS //

module.exports = accumulate8d;
