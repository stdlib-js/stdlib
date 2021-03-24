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

'use strict';

// MAIN //

/**
* Applies a unary callback to elements in a four-dimensional input ndarray and assigns results to elements in an equivalently shaped output ndarray.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Function} x.getter - callback for accessing `x` data buffer elements
* @param {Object} y - object containing output ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Function} y.setter - callback for setting `y` data buffer elements
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* function scale( z ) {
*     return new Complex64( real(z)*10.0, imag(z)*10.0 );
* }
*
* // Create data buffers:
* var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var ybuf = new Complex64Array( 4 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 1, 1, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 2, 1 ];
* var sy = [ 2, 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Define getters and setters:
* function getter( buf, idx ) {
*     return buf.get( idx );
* }
*
* function setter( buf, idx, value ) {
*     buf.set( value, idx );
* }
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'dtype': 'complex64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'getter': getter
* };
* var y = {
*     'dtype': 'complex64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'setter': setter
* };
*
* // Apply the unary function:
* unary4d( x, y, scale );
*
* var v = y.data.get( 0 );
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 20.0
*/
function unary4d( x, y, fcn ) {
	var xbuf;
	var ybuf;
	var get;
	var set;
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dy0;
	var dy1;
	var dy2;
	var dy3;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var sx;
	var sy;
	var ix;
	var iy;
	var i0;
	var i1;
	var i2;
	var i3;

	// Note on variable naming convention: S#, dx#, dy#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sh = x.shape;
	sx = x.strides;
	sy = y.strides;
	if ( x.order === 'row-major' ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 3 ];
		S1 = sh[ 2 ];
		S2 = sh[ 1 ];
		S3 = sh[ 0 ];
		dx0 = sx[ 3 ];                // offset increment for innermost loop
		dx1 = sx[ 2 ] - ( S0*sx[3] );
		dx2 = sx[ 1 ] - ( S1*sx[2] );
		dx3 = sx[ 0 ] - ( S2*sx[1] ); // offset increment for outermost loop
		dy0 = sy[ 3 ];
		dy1 = sy[ 2 ] - ( S0*sy[3] );
		dy2 = sy[ 1 ] - ( S1*sy[2] );
		dy3 = sy[ 0 ] - ( S2*sy[1] );
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		S2 = sh[ 2 ];
		S3 = sh[ 3 ];
		dx0 = sx[ 0 ];                // offset increment for innermost loop
		dx1 = sx[ 1 ] - ( S0*sx[0] );
		dx2 = sx[ 2 ] - ( S1*sx[1] );
		dx3 = sx[ 3 ] - ( S2*sx[2] ); // offset increment for outermost loop
		dy0 = sy[ 0 ];
		dy1 = sy[ 1 ] - ( S0*sy[0] );
		dy2 = sy[ 2 ] - ( S1*sy[1] );
		dy3 = sy[ 3 ] - ( S2*sy[2] );
	}
	// Set the pointers to the first indexed elements in the respective ndarrays...
	ix = x.offset;
	iy = y.offset;

	// Cache references to the input and output ndarray buffers...
	xbuf = x.data;
	ybuf = y.data;

	// Cache accessors:
	get = x.getter;
	set = y.setter;

	// Iterate over the ndarray dimensions...
	for ( i3 = 0; i3 < S3; i3++ ) {
		for ( i2 = 0; i2 < S2; i2++ ) {
			for ( i1 = 0; i1 < S1; i1++ ) {
				for ( i0 = 0; i0 < S0; i0++ ) {
					set( ybuf, iy, fcn( get( xbuf, ix ) ) );
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
}


// EXPORTS //

module.exports = unary4d;
