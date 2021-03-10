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

// MODULES //

var init = require( './init.js' );


// MAIN //

/**
* Applies a unary callback to elements in a five-dimensional input ndarray and assigns results to elements in an equivalently shaped output ndarray via loop blocking.
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
* var shape = [ 1, 1, 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 4, 4, 1 ];
* var sy = [ 6, 6, 2, 2, 1 ];
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
* blockedunary5d( x, y, scale );
*
* console.log( y.data );
* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
*/
function blockedunary5d( x, y, fcn ) { // eslint-disable-line max-statements
	var bsize;
	var xbuf;
	var ybuf;
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dx4;
	var dy0;
	var dy1;
	var dy2;
	var dy3;
	var dy4;
	var ox1;
	var ox2;
	var ox3;
	var ox4;
	var oy1;
	var oy2;
	var oy3;
	var oy4;
	var sh;
	var s0;
	var s1;
	var s2;
	var s3;
	var s4;
	var sx;
	var sy;
	var ox;
	var oy;
	var ix;
	var iy;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var j0;
	var j1;
	var j2;
	var j3;
	var j4;
	var o;

	// Note on variable naming convention: s#, dx#, dy#, i#, j# where # corresponds to the loop number, with `0` being the innermost loop...

	// Initialize and unpack block data:
	o = init( x, y );
	sh = o.sh;
	sx = o.sx;
	sy = o.sy;
	bsize = o.bsize;

	// Cache the indices of the first indexed elements in the respective ndarrays...
	ox = x.offset;
	oy = y.offset;

	// Cache references to the input and output ndarray buffers...
	xbuf = x.data;
	ybuf = y.data;

	// Cache offset increments for the innermost loop...
	dx0 = sx[0];
	dy0 = sy[0];

	// Iterate over blocks...
	for ( j4 = sh[4]; j4 > 0; ) {
		if ( j4 < bsize ) {
			s4 = j4;
			j4 = 0;
		} else {
			s4 = bsize;
			j4 -= bsize;
		}
		ox4 = ox + ( j4*sx[4] );
		oy4 = oy + ( j4*sy[4] );
		for ( j3 = sh[3]; j3 > 0; ) {
			if ( j3 < bsize ) {
				s3 = j3;
				j3 = 0;
			} else {
				s3 = bsize;
				j3 -= bsize;
			}
			dx4 = sx[4] - ( s3*sx[3] );
			dy4 = sy[4] - ( s3*sy[3] );
			ox3 = ox4 + ( j3*sx[3] );
			oy3 = oy4 + ( j3*sy[3] );
			for ( j2 = sh[2]; j2 > 0; ) {
				if ( j2 < bsize ) {
					s2 = j2;
					j2 = 0;
				} else {
					s2 = bsize;
					j2 -= bsize;
				}
				dx3 = sx[3] - ( s2*sx[2] );
				dy3 = sy[3] - ( s2*sy[2] );
				ox2 = ox3 + ( j2*sx[2] );
				oy2 = oy3 + ( j2*sy[2] );
				for ( j1 = sh[1]; j1 > 0; ) {
					if ( j1 < bsize ) {
						s1 = j1;
						j1 = 0;
					} else {
						s1 = bsize;
						j1 -= bsize;
					}
					dx2 = sx[2] - ( s1*sx[1] );
					dy2 = sy[2] - ( s1*sy[1] );
					ox1 = ox2 + ( j1*sx[1] );
					oy1 = oy2 + ( j1*sy[1] );
					for ( j0 = sh[0]; j0 > 0; ) {
						if ( j0 < bsize ) {
							s0 = j0;
							j0 = 0;
						} else {
							s0 = bsize;
							j0 -= bsize;
						}
						// Compute index offsets for the first input and output ndarray elements in the current block...
						ix = ox1 + ( j0*sx[0] );
						iy = oy1 + ( j0*sy[0] );

						// Compute loop offset increments...
						dx1 = sx[1] - ( s0*sx[0] );
						dy1 = sy[1] - ( s0*sy[0] );

						// Iterate over the ndarray dimensions...
						for ( i4 = 0; i4 < s4; i4++ ) {
							for ( i3 = 0; i3 < s3; i3++ ) {
								for ( i2 = 0; i2 < s2; i2++ ) {
									for ( i1 = 0; i1 < s1; i1++ ) {
										for ( i0 = 0; i0 < s0; i0++ ) {
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
					}
				}
			}
		}
	}
}


// EXPORTS //

module.exports = blockedunary5d;
