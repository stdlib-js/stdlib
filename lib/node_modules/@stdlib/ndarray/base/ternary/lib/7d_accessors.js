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

/* eslint-disable max-statements, max-depth */

'use strict';

// MAIN //

/**
* Applies a ternary callback to elements in seven-dimensional input ndarrays and assigns results to elements in an equivalently shaped output ndarray.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {*} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - data buffer accessors
* @param {Object} y - object containing input ndarray meta data
* @param {*} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} y.accessors - data buffer accessors
* @param {Object} z - object containing input ndarray meta data
* @param {*} z.dtype - data type
* @param {Collection} z.data - data buffer
* @param {NonNegativeIntegerArray} z.shape - dimensions
* @param {IntegerArray} z.strides - stride lengths
* @param {NonNegativeInteger} z.offset - index offset
* @param {string} z.order - specifies whether `z` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} z.accessors - data buffer accessors
* @param {Object} w - object containing output ndarray meta data
* @param {*} w.dtype - data type
* @param {Collection} w.data - data buffer
* @param {NonNegativeIntegerArray} w.shape - dimensions
* @param {IntegerArray} w.strides - stride lengths
* @param {NonNegativeInteger} w.offset - index offset
* @param {string} w.order - specifies whether `w` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} w.accessors - data buffer accessors
* @param {boolean} isRowMajor - boolean indicating if provided arrays are in row-major order
* @param {Callback} fcn - ternary callback
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
* var copy = require( '@stdlib/array/base/copy' );
*
* function fcn( a, b, c ) {
*     return a + b + c;
* }
*
* // Create data buffers:
* var xbuf = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var ybuf = toAccessorArray( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var zbuf = toAccessorArray( [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ] );
* var wbuf = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Define the shape of the input and output arrays:
* var shape = [ 1, 1, 1, 1, 2, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 8, 8, 8, 8, 4, 2, 1 ];
* var sy = [ 8, 8, 8, 8, 4, 2, 1 ];
* var sz = [ 8, 8, 8, 8, 4, 2, 1 ];
* var sw = [ 8, 8, 8, 8, 4, 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
* var ow = 0;
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'dtype': 'generic',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': accessors( xbuf ).accessors
* };
* var y = {
*     'dtype': 'generic',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': accessors( ybuf ).accessors
* };
* var z = {
*     'dtype': 'generic',
*     'data': zbuf,
*     'shape': shape,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major',
*     'accessors': accessors( zbuf ).accessors
* };
* var w = {
*     'dtype': 'generic',
*     'data': wbuf,
*     'shape': shape,
*     'strides': sw,
*     'offset': ow,
*     'order': 'row-major',
*     'accessors': accessors( wbuf ).accessors
* };
*
* // Apply the ternary function:
* ternary7d( x, y, z, w, true, fcn );
*
* console.log( copy( w.data ) );
* // => [ 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5 ]
*/
function ternary7d( x, y, z, w, isRowMajor, fcn ) {
	var xbuf;
	var ybuf;
	var zbuf;
	var wbuf;
	var xget;
	var yget;
	var zget;
	var wset;
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
	var dz0;
	var dz1;
	var dz2;
	var dz3;
	var dz4;
	var dz5;
	var dz6;
	var dw0;
	var dw1;
	var dw2;
	var dw3;
	var dw4;
	var dw5;
	var dw6;
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
	var sz;
	var sw;
	var ix;
	var iy;
	var iz;
	var iw;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var i6;

	// Note on variable naming convention: S#, dx#, dy#, dz#, dw#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sh = x.shape;
	sx = x.strides;
	sy = y.strides;
	sz = z.strides;
	sw = w.strides;
	if ( isRowMajor ) {
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
		dz0 = sz[ 6 ];
		dz1 = sz[ 5 ] - ( S0*sz[6] );
		dz2 = sz[ 4 ] - ( S1*sz[5] );
		dz3 = sz[ 3 ] - ( S2*sz[4] );
		dz4 = sz[ 2 ] - ( S3*sz[3] );
		dz5 = sz[ 1 ] - ( S4*sz[2] );
		dz6 = sz[ 0 ] - ( S5*sz[1] );
		dw0 = sw[ 6 ];
		dw1 = sw[ 5 ] - ( S0*sw[6] );
		dw2 = sw[ 4 ] - ( S1*sw[5] );
		dw3 = sw[ 3 ] - ( S2*sw[4] );
		dw4 = sw[ 2 ] - ( S3*sw[3] );
		dw5 = sw[ 1 ] - ( S4*sw[2] );
		dw6 = sw[ 0 ] - ( S5*sw[1] );
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
		dz0 = sz[ 0 ];
		dz1 = sz[ 1 ] - ( S0*sz[0] );
		dz2 = sz[ 2 ] - ( S1*sz[1] );
		dz3 = sz[ 3 ] - ( S2*sz[2] );
		dz4 = sz[ 4 ] - ( S3*sz[3] );
		dz5 = sz[ 5 ] - ( S4*sz[4] );
		dz6 = sz[ 6 ] - ( S5*sz[5] );
		dw0 = sw[ 0 ];
		dw1 = sw[ 1 ] - ( S0*sw[0] );
		dw2 = sw[ 2 ] - ( S1*sw[1] );
		dw3 = sw[ 3 ] - ( S2*sw[2] );
		dw4 = sw[ 4 ] - ( S3*sw[3] );
		dw5 = sw[ 5 ] - ( S4*sw[4] );
		dw6 = sw[ 6 ] - ( S5*sw[5] );
	}
	// Set the pointers to the first indexed elements in the respective ndarrays...
	ix = x.offset;
	iy = y.offset;
	iz = z.offset;
	iw = w.offset;

	// Cache references to the input and output ndarray buffers...
	xbuf = x.data;
	ybuf = y.data;
	zbuf = z.data;
	wbuf = w.data;

	// Cache accessors:
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];
	zget = z.accessors[ 0 ];
	wset = w.accessors[ 1 ];

	// Iterate over the ndarray dimensions...
	for ( i6 = 0; i6 < S6; i6++ ) {
		for ( i5 = 0; i5 < S5; i5++ ) {
			for ( i4 = 0; i4 < S4; i4++ ) {
				for ( i3 = 0; i3 < S3; i3++ ) {
					for ( i2 = 0; i2 < S2; i2++ ) {
						for ( i1 = 0; i1 < S1; i1++ ) {
							for ( i0 = 0; i0 < S0; i0++ ) {
								wset( wbuf, iw, fcn( xget( xbuf, ix ), yget( ybuf, iy ), zget( zbuf, iz ) ) ); // eslint-disable-line max-len
								ix += dx0;
								iy += dy0;
								iz += dz0;
								iw += dw0;
							}
							ix += dx1;
							iy += dy1;
							iz += dz1;
							iw += dw1;
						}
						ix += dx2;
						iy += dy2;
						iz += dz2;
						iw += dw2;
					}
					ix += dx3;
					iy += dy3;
					iz += dz3;
					iw += dw3;
				}
				ix += dx4;
				iy += dy4;
				iz += dz4;
				iw += dw4;
			}
			ix += dx5;
			iy += dy5;
			iz += dz5;
			iw += dw5;
		}
		ix += dx6;
		iy += dy6;
		iz += dz6;
		iw += dw6;
	}
}


// EXPORTS //

module.exports = ternary7d;
