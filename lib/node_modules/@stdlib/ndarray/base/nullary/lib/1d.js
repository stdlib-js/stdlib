/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Applies a nullary function and assigns results to elements in an output ndarray.
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Callback} fcn - nullary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function fcn() {
*     return 10.0;
* }
*
* // Create a data buffer:
* var xbuf = new Float64Array( 8 );
*
* // Define the shape of the output array:
* var shape = [ 4 ];
*
* // Define the array strides:
* var sx = [ 2 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the output ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Apply the nullary function:
* nullary1d( x, fcn );
*
* console.log( x.data );
* // => <Float64Array>[ 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0 ]
*/
function nullary1d( x, fcn ) {
	var xbuf;
	var dx0;
	var S0;
	var ix;
	var i0;

	// Note on variable naming convention: S#, dx#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables: dimensions and loop offset (pointer) increments:
	S0 = x.shape[ 0 ];
	dx0 = x.strides[ 0 ];

	// Set a pointer to the first indexed element:
	ix = x.offset;

	// Cache a reference to the output ndarray buffer:
	xbuf = x.data;

	// Iterate over the ndarray dimensions...
	for ( i0 = 0; i0 < S0; i0++ ) {
		xbuf[ ix ] = fcn();
		ix += dx0;
	}
}


// EXPORTS //

module.exports = nullary1d;
