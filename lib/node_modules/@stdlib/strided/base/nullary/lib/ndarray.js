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
* Applies a nullary callback and assigns results to elements in a strided output array.
*
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride length for the output array
* @param {NonNegativeIntegerArray} offsets - array-like object containing the starting index (i.e., index offset) for the output array
* @param {Callback} fcn - nullary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function fill() {
*     return 3.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var shape = [ x.length ];
* var strides = [ 1 ];
* var offsets = [ 0 ];
*
* nullary( [ x ], shape, strides, offsets, fill );
*
* console.log( x );
* // => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
*/
function nullary( arrays, shape, strides, offsets, fcn ) {
	var sx;
	var ix;
	var x;
	var N;
	var i;

	N = shape[ 0 ];
	if ( N <= 0 ) {
		return;
	}
	ix = offsets[ 0 ];
	sx = strides[ 0 ];
	x = arrays[ 0 ];
	for ( i = 0; i < N; i++ ) {
		x[ ix ] = fcn();
		ix += sx;
	}
}


// EXPORTS //

module.exports = nullary;
