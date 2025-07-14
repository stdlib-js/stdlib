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
* Applies a binary callback to elements in one-dimensional input ndarrays and assigns results to elements in an equivalently shaped output ndarray.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Object} y - object containing input ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Object} z - object containing output ndarray meta data
* @param {string} z.dtype - data type
* @param {Collection} z.data - data buffer
* @param {NonNegativeIntegerArray} z.shape - dimensions
* @param {IntegerArray} z.strides - stride lengths
* @param {NonNegativeInteger} z.offset - index offset
* @param {string} z.order - specifies whether `z` is row-major (C-style) or column-major (Fortran-style)
* @param {Callback} fcn - binary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function fcn( x, y ) {
*     return x + y;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var zbuf = new Float64Array( 12 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 12 ];
*
* // Define the array strides:
* var sx = [ 1 ];
* var sy = [ 1 ];
* var sz = [ 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
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
* var z = {
*     'dtype': 'float64',
*     'data': zbuf,
*     'shape': shape,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major'
* };
*
* // Apply the binary function:
* binary1d( x, y, z, fcn );
*
* console.log( z.data );
* // => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0 ]
*/
function binary1d( x, y, z, fcn ) {
	var xbuf;
	var ybuf;
	var zbuf;
	var dx0;
	var dy0;
	var dz0;
	var S0;
	var ix;
	var iy;
	var iz;
	var i0;

	// Note on variable naming convention: S#, dx#, dy#, dz#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables: dimensions and loop offset (pointer) increments...
	S0 = x.shape[ 0 ];
	dx0 = x.strides[ 0 ];
	dy0 = y.strides[ 0 ];
	dz0 = z.strides[ 0 ];

	// Set the pointers to the first indexed elements in the respective ndarrays...
	ix = x.offset;
	iy = y.offset;
	iz = z.offset;

	// Cache references to the input and output ndarray buffers...
	xbuf = x.data;
	ybuf = y.data;
	zbuf = z.data;

	// Iterate over the ndarray dimensions...
	for ( i0 = 0; i0 < S0; i0++ ) {
		zbuf[ iz ] = fcn( xbuf[ ix ], ybuf[ iy ] );
		ix += dx0;
		iy += dy0;
		iz += dz0;
	}
}


// EXPORTS //

module.exports = binary1d;
