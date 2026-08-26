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

'use strict';

// MAIN //

/**
* Assigns a scalar value to every element of a two-dimensional output ndarray.
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
* @param {Object} y - object containing output ndarray meta data
* @param {*} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} y.accessors - data buffer accessors
* @param {boolean} isRowMajor - boolean indicating if provided arrays are in row-major order
* @returns {void}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Create data buffers:
* var xbuf = new Complex64Array( [ 2.0, 2.0 ] );
* var ybuf = new Complex64Array( 6 );
*
* // Define the shape of the output array:
* var shape = [ 3, 2 ];
*
* // Define the array strides:
* var sx = [ 0 ];
* var sy = [ 2, 1 ];
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
*     'shape': [],
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
* var y = {
*     'dtype': 'complex64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
*
* // Assign scalar:
* assign2d( x, y, true );
*
* var v = y.data.get( 0 );
* // returns <Complex64>[ 2.0, 2.0 ]
*/
function assign2d( x, y, isRowMajor ) {
	var ybuf;
	var set;
	var dy0;
	var dy1;
	var sh;
	var S0;
	var S1;
	var sy;
	var iy;
	var i0;
	var i1;
	var v;

	// Note on variable naming convention: S#, dy#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sh = y.shape;
	sy = y.strides;
	if ( isRowMajor ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 1 ];
		S1 = sh[ 0 ];
		dy0 = sy[ 1 ];                // offset increment for innermost loop
		dy1 = sy[ 0 ] - ( S0*sy[1] ); // offset increment for outermost loop
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		dy0 = sy[ 0 ];                // offset increment for innermost loop
		dy1 = sy[ 1 ] - ( S0*sy[0] ); // offset increment for outermost loop
	}
	// Set a pointer to the first indexed element in the output ndarray:
	iy = y.offset;

	// Cache a reference to the output ndarray buffer:
	ybuf = y.data;

	// Cache the output accessor:
	set = y.accessors[ 1 ];

	// Cache the scalar value:
	v = x.accessors[ 0 ]( x.data, x.offset );

	// Iterate over the ndarray dimensions...
	for ( i1 = 0; i1 < S1; i1++ ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			set( ybuf, iy, v );
			iy += dy0;
		}
		iy += dy1;
	}
}


// EXPORTS //

module.exports = assign2d;
