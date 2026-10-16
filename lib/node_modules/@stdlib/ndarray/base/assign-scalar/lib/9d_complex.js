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

/* eslint-disable max-depth */

'use strict';

// MAIN //

/**
* Assigns a scalar value to every element of a reinterpreted complex number nine-dimensional output ndarray.
*
* @private
* @param {number} re - real component
* @param {number} im - imaginary component
* @param {Object} y - object containing output ndarray meta data
* @param {*} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {boolean} isRowMajor - boolean indicating if provided arrays are in row-major order
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a data buffer:
* var ybuf = new Float64Array( 12 );
*
* // Define the shape of the output array:
* var shape = [ 1, 1, 1, 1, 1, 1, 3, 1, 2 ];
*
* // Define the array strides:
* var sy = [ 12, 12, 12, 12, 12, 12, 4, 4, 2 ];
*
* // Define the index offset:
* var oy = 0;
*
* // Create the output ndarray-like object:
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Assign scalar:
* assign9d( 2.0, 2.0, y, true );
*
* console.log( y.data );
* // => <Float64Array>[ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ]
*/
function assign9d( re, im, y, isRowMajor ) {
	var ybuf;
	var dy0;
	var dy1;
	var dy2;
	var dy3;
	var dy4;
	var dy5;
	var dy6;
	var dy7;
	var dy8;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var S5;
	var S6;
	var S7;
	var S8;
	var sy;
	var iy;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var i6;
	var i7;
	var i8;

	// Note on variable naming convention: S#, dy#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sh = y.shape;
	sy = y.strides;
	if ( isRowMajor ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 8 ];
		S1 = sh[ 7 ];
		S2 = sh[ 6 ];
		S3 = sh[ 5 ];
		S4 = sh[ 4 ];
		S5 = sh[ 3 ];
		S6 = sh[ 2 ];
		S7 = sh[ 1 ];
		S8 = sh[ 0 ];
		dy0 = sy[ 8 ];                // offset increment for innermost loop
		dy1 = sy[ 7 ] - ( S0*sy[8] );
		dy2 = sy[ 6 ] - ( S1*sy[7] );
		dy3 = sy[ 5 ] - ( S2*sy[6] );
		dy4 = sy[ 4 ] - ( S3*sy[5] );
		dy5 = sy[ 3 ] - ( S4*sy[4] );
		dy6 = sy[ 2 ] - ( S5*sy[3] );
		dy7 = sy[ 1 ] - ( S6*sy[2] );
		dy8 = sy[ 0 ] - ( S7*sy[1] ); // offset increment for outermost loop
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
		S8 = sh[ 8 ];
		dy0 = sy[ 0 ];                // offset increment for innermost loop
		dy1 = sy[ 1 ] - ( S0*sy[0] );
		dy2 = sy[ 2 ] - ( S1*sy[1] );
		dy3 = sy[ 3 ] - ( S2*sy[2] );
		dy4 = sy[ 4 ] - ( S3*sy[3] );
		dy5 = sy[ 5 ] - ( S4*sy[4] );
		dy6 = sy[ 6 ] - ( S5*sy[5] );
		dy7 = sy[ 7 ] - ( S6*sy[6] );
		dy8 = sy[ 8 ] - ( S7*sy[7] ); // offset increment for outermost loop
	}
	// Set a pointer to the first indexed element in the output ndarray:
	iy = y.offset;

	// Cache a reference to the output ndarray buffer:
	ybuf = y.data;

	// Iterate over the ndarray dimensions...
	for ( i8 = 0; i8 < S8; i8++ ) {
		for ( i7 = 0; i7 < S7; i7++ ) {
			for ( i6 = 0; i6 < S6; i6++ ) {
				for ( i5 = 0; i5 < S5; i5++ ) {
					for ( i4 = 0; i4 < S4; i4++ ) {
						for ( i3 = 0; i3 < S3; i3++ ) {
							for ( i2 = 0; i2 < S2; i2++ ) {
								for ( i1 = 0; i1 < S1; i1++ ) {
									for ( i0 = 0; i0 < S0; i0++ ) {
										ybuf[ iy ] = re;
										ybuf[ iy+1 ] = im;
										iy += dy0;
									}
									iy += dy1;
								}
								iy += dy2;
							}
							iy += dy3;
						}
						iy += dy4;
					}
					iy += dy5;
				}
				iy += dy6;
			}
			iy += dy7;
		}
		iy += dy8;
	}
}


// EXPORTS //

module.exports = assign9d;
