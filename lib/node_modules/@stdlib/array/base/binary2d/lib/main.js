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
* Applies a binary callback to elements in two two-dimensional nested input arrays and assigns results to elements in a two-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject<Array<Collection>>} arrays - array-like object containing two input nested arrays and one output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} fcn - binary callback
* @returns {void}
*
* @example
* var ones2d = require( '@stdlib/array/base/ones2d' );
* var zeros2d = require( '@stdlib/array/base/zeros2d' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var shape = [ 2, 2 ];
*
* var x = ones2d( shape );
* var y = ones2d( shape );
* var z = zeros2d( shape );
*
* binary2d( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ]
*/
function binary2d( arrays, shape, fcn ) {
	var S0;
	var S1;
	var i0;
	var i1;
	var x0;
	var y0;
	var z0;
	var x;
	var y;
	var z;

	S0 = shape[ 1 ];
	S1 = shape[ 0 ];
	if ( S0 <= 0 || S1 <= 0 ) {
		return;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	z = arrays[ 2 ];
	for ( i1 = 0; i1 < S1; i1++ ) {
		x0 = x[ i1 ];
		y0 = y[ i1 ];
		z0 = z[ i1 ];
		for ( i0 = 0; i0 < S0; i0++ ) {
			z0[ i0 ] = fcn( x0[ i0 ], y0[ i0 ] );
		}
	}
}


// EXPORTS //

module.exports = binary2d;
