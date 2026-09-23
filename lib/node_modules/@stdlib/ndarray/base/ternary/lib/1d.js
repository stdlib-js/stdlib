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
* Applies a ternary callback to elements in one-dimensional input ndarrays and assigns results to elements in an equivalently shaped output ndarray.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {*} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Object} y - object containing input ndarray meta data
* @param {*} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Object} z - object containing input ndarray meta data
* @param {*} z.dtype - data type
* @param {Collection} z.data - data buffer
* @param {NonNegativeIntegerArray} z.shape - dimensions
* @param {IntegerArray} z.strides - stride lengths
* @param {NonNegativeInteger} z.offset - index offset
* @param {string} z.order - specifies whether `z` is row-major (C-style) or column-major (Fortran-style)
* @param {Object} w - object containing output ndarray meta data
* @param {*} w.dtype - data type
* @param {Collection} w.data - data buffer
* @param {NonNegativeIntegerArray} w.shape - dimensions
* @param {IntegerArray} w.strides - stride lengths
* @param {NonNegativeInteger} w.offset - index offset
* @param {string} w.order - specifies whether `w` is row-major (C-style) or column-major (Fortran-style)
* @param {Callback} fcn - ternary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function fcn( a, b, c ) {
*     return a + b + c;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var ybuf = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var zbuf = new Float64Array( [ 0.5, 0.5, 0.5, 0.5, 0.5 ] );
* var wbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Define the shape of the input and output arrays:
* var shape = [ 5 ];
*
* // Define the array strides:
* var sx = [ 1 ];
* var sy = [ 1 ];
* var sz = [ 1 ];
* var sw = [ 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
* var ow = 0;
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
* var w = {
*     'dtype': 'float64',
*     'data': wbuf,
*     'shape': shape,
*     'strides': sw,
*     'offset': ow,
*     'order': 'row-major'
* };
*
* // Apply the ternary function:
* ternary1d( x, y, z, w, fcn );
*
* console.log( w.data );
* // => <Float64Array>[ 2.5, 3.5, 4.5, 5.5, 6.5 ]
*/
function ternary1d( x, y, z, w, fcn ) {
	var xbuf;
	var ybuf;
	var zbuf;
	var wbuf;
	var dx;
	var dy;
	var dz;
	var dw;
	var S0;
	var ix;
	var iy;
	var iz;
	var iw;
	var i;

	// Note on variable naming convention: S#, where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables: dimensions and loop offset (pointer) increments...
	S0 = x.shape[ 0 ];
	dx = x.strides[ 0 ];
	dy = y.strides[ 0 ];
	dz = z.strides[ 0 ];
	dw = w.strides[ 0 ];

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

	// Iterate over the ndarray dimensions...
	for ( i = 0; i < S0; i++ ) {
		wbuf[ iw ] = fcn( xbuf[ ix ], ybuf[ iy ], zbuf[ iz ] );
		ix += dx;
		iy += dy;
		iz += dz;
		iw += dw;
	}
}


// EXPORTS //

module.exports = ternary1d;
