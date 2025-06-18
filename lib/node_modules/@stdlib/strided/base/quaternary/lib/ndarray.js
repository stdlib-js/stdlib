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
* Applies a quaternary callback to strided input array elements and assigns results to elements in a strided output array.
*
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing four input arrays and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {NonNegativeIntegerArray} offsets - array-like object containing the starting indices (i.e., index offsets) for the input and output arrays
* @param {Callback} fcn - quaternary callback
* @returns {void}
*
* @example
* var add = require( '@stdlib/number/float64/base/add4' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var u = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1, 1, 1 ];
* var offsets = [ 0, 0, 0, 0, 0 ];
*
* quaternary( [ x, y, z, w, u ], shape, strides, offsets, add );
*
* console.log( u );
* // => <Float64Array>[ 4.0, 8.0, 12.0, 16.0, 20.0 ]
*/
function quaternary( arrays, shape, strides, offsets, fcn ) {
	var sx;
	var sy;
	var sz;
	var sw;
	var su;
	var ix;
	var iy;
	var iz;
	var iw;
	var iu;
	var x;
	var y;
	var z;
	var w;
	var u;
	var N;
	var i;

	N = shape[ 0 ];
	if ( N <= 0 ) {
		return;
	}
	ix = offsets[ 0 ];
	iy = offsets[ 1 ];
	iz = offsets[ 2 ];
	iw = offsets[ 3 ];
	iu = offsets[ 4 ];
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	sz = strides[ 2 ];
	sw = strides[ 3 ];
	su = strides[ 4 ];
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	z = arrays[ 2 ];
	w = arrays[ 3 ];
	u = arrays[ 4 ];
	for ( i = 0; i < N; i++ ) {
		u[ iu ] = fcn( x[ ix ], y[ iy ], z[ iz ], w[ iw ] );
		ix += sx;
		iy += sy;
		iz += sz;
		iw += sw;
		iu += su;
	}
}


// EXPORTS //

module.exports = quaternary;
