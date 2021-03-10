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

/* eslint-disable max-depth */

'use strict';

// MAIN //

/**
* Applies a unary callback to elements in a seven-dimensional input ndarray and assigns results to elements in an equivalently shaped output ndarray.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Object} y - object containing output ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( 6 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 1, 1, 1, 1, 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 12, 12, 4, 4, 1 ];
* var sy = [ 6, 6, 6, 6, 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 1;
* var oy = 0;
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Apply the unary function:
* unary7d( x, y, scale );
*
* console.log( y.data );
* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
*/
function unary7d( x, y, fcn ) { // eslint-disable-line max-statements
	var xbuf;
	var ybuf;
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dx4;
	var dx5;
	var dx6;
	var dy0;
	var dy1;
	var dy2;
	var dy3;
	var dy4;
	var dy5;
	var dy6;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var S5;
	var S6;
	var sx;
	var sy;
	var ix;
	var iy;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var i6;

	// Note on variable naming convention: S#, dx#, dy#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sh = x.shape;
	sx = x.strides;
	sy = y.strides;
	if ( x.order === 'row-major' ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 6 ];
		S1 = sh[ 5 ];
		S2 = sh[ 4 ];
		S3 = sh[ 3 ];
		S4 = sh[ 2 ];
		S5 = sh[ 1 ];
		S6 = sh[ 0 ];
		dx0 = sx[ 6 ];                // offset increment for innermost loop
		dx1 = sx[ 5 ] - ( S0*sx[6] );
		dx2 = sx[ 4 ] - ( S1*sx[5] );
		dx3 = sx[ 3 ] - ( S2*sx[4] );
		dx4 = sx[ 2 ] - ( S3*sx[3] );
		dx5 = sx[ 1 ] - ( S4*sx[2] );
		dx6 = sx[ 0 ] - ( S5*sx[1] ); // offset increment for outermost loop
		dy0 = sy[ 6 ];
		dy1 = sy[ 5 ] - ( S0*sy[6] );
		dy2 = sy[ 4 ] - ( S1*sy[5] );
		dy3 = sy[ 3 ] - ( S2*sy[4] );
		dy4 = sy[ 2 ] - ( S3*sy[3] );
		dy5 = sy[ 1 ] - ( S4*sy[2] );
		dy6 = sy[ 0 ] - ( S5*sy[1] );
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		S2 = sh[ 2 ];
		S3 = sh[ 3 ];
		S4 = sh[ 4 ];
		S5 = sh[ 5 ];
		S6 = sh[ 6 ];
		dx0 = sx[ 0 ];                // offset increment for innermost loop
		dx1 = sx[ 1 ] - ( S0*sx[0] );
		dx2 = sx[ 2 ] - ( S1*sx[1] );
		dx3 = sx[ 3 ] - ( S2*sx[2] );
		dx4 = sx[ 4 ] - ( S3*sx[3] );
		dx5 = sx[ 5 ] - ( S4*sx[4] );
		dx6 = sx[ 6 ] - ( S5*sx[5] ); // offset increment for outermost loop
		dy0 = sy[ 0 ];
		dy1 = sy[ 1 ] - ( S0*sy[0] );
		dy2 = sy[ 2 ] - ( S1*sy[1] );
		dy3 = sy[ 3 ] - ( S2*sy[2] );
		dy4 = sy[ 4 ] - ( S3*sy[3] );
		dy5 = sy[ 5 ] - ( S4*sy[4] );
		dy6 = sy[ 6 ] - ( S5*sy[5] );
	}
	// Set the pointers to the first indexed elements in the respective ndarrays...
	ix = x.offset;
	iy = y.offset;

	// Cache references to the input and output ndarray buffers...
	xbuf = x.data;
	ybuf = y.data;

	// Iterate over the ndarray dimensions...
	for ( i6 = 0; i6 < S6; i6++ ) {
		for ( i5 = 0; i5 < S5; i5++ ) {
			for ( i4 = 0; i4 < S4; i4++ ) {
				for ( i3 = 0; i3 < S3; i3++ ) {
					for ( i2 = 0; i2 < S2; i2++ ) {
						for ( i1 = 0; i1 < S1; i1++ ) {
							for ( i0 = 0; i0 < S0; i0++ ) {
								ybuf[ iy ] = fcn( xbuf[ ix ] );
								ix += dx0;
								iy += dy0;
							}
							ix += dx1;
							iy += dy1;
						}
						ix += dx2;
						iy += dy2;
					}
					ix += dx3;
					iy += dy3;
				}
				ix += dx4;
				iy += dy4;
			}
			ix += dx5;
			iy += dy5;
		}
		ix += dx6;
		iy += dy6;
	}
}


// EXPORTS //

module.exports = unary7d;
