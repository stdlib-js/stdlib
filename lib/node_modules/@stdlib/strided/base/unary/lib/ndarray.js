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
* Applies a unary callback to elements in a strided input array and assigns results to elements in a strided output array.
*
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing one input array and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {NonNegativeIntegerArray} offsets - array-like object containing the starting indices (i.e., index offsets) for the input and output arrays
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1 ];
* var offsets = [ 0, 0 ];
*
* unary( [ x, y ], shape, strides, offsets, scale );
*
* console.log( y );
* // => <Float64Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
*/
function unary( arrays, shape, strides, offsets, fcn ) {
	var sx;
	var sy;
	var ix;
	var iy;
	var x;
	var y;
	var N;
	var i;

	N = shape[ 0 ];
	if ( N <= 0 ) {
		return;
	}
	ix = offsets[ 0 ];
	iy = offsets[ 1 ];
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	for ( i = 0; i < N; i++ ) {
		y[ iy ] = fcn( x[ ix ] );
		ix += sx;
		iy += sy;
	}
}


// EXPORTS //

module.exports = unary;
