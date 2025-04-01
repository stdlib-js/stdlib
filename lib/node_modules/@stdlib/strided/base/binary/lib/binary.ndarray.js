/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Applies a binary callback to strided input array elements and assigns results to elements in a strided output array.
*
* @private
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing two input arrays and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {NonNegativeIntegerArray} offsets - array-like object containing the starting indices (i.e., index offsets) for the input and output arrays
* @param {Callback} fcn - binary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1 ];
* var offsets = [ 0, 0, 0 ];
*
* binary( [ x, y, z ], shape, strides, offsets, add );
*
* console.log( z );
* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
function binary( arrays, shape, strides, offsets, fcn ) {
	var sx;
	var sy;
	var sz;
	var ix;
	var iy;
	var iz;
	var x;
	var y;
	var z;
	var N;
	var i;

	N = shape[ 0 ];
	if ( N <= 0 ) {
		return;
	}
	ix = offsets[ 0 ];
	iy = offsets[ 1 ];
	iz = offsets[ 2 ];
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	sz = strides[ 2 ];
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	z = arrays[ 2 ];
	for ( i = 0; i < N; i++ ) {
		z[ iz ] = fcn( x[ ix ], y[ iy ] );
		ix += sx;
		iy += sy;
		iz += sz;
	}
}


// EXPORTS //

module.exports = binary;
