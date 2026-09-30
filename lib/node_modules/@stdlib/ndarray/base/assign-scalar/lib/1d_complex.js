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
* Assigns a scalar value to every element of a reinterpreted complex number one-dimensional output ndarray.
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
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a data buffer:
* var ybuf = new Float64Array( 12 );
*
* // Define the shape of the output array:
* var shape = [ 6 ];
*
* // Define the array strides:
* var sy = [ 2 ];
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
* assign1d( 2.0, 2.0, y );
*
* console.log( y.data );
* // => <Float64Array>[ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ]
*/
function assign1d( re, im, y ) {
	var ybuf;
	var dy0;
	var S0;
	var iy;
	var i0;

	// Note on variable naming convention: S#, dy#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables: dimensions and loop offset (pointer) increments...
	S0 = y.shape[ 0 ];
	dy0 = y.strides[ 0 ];

	// Set a pointer to the first indexed element in the output ndarray:
	iy = y.offset;

	// Cache a reference to the output ndarray buffer:
	ybuf = y.data;

	// Iterate over the ndarray dimensions...
	for ( i0 = 0; i0 < S0; i0++ ) {
		ybuf[ iy ] = re;
		ybuf[ iy+1 ] = im;
		iy += dy0;
	}
}


// EXPORTS //

module.exports = assign1d;
