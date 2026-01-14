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
* Applies a unary callback to elements in a three-dimensional nested input array and assigns results to elements in a three-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject<Array<Array<Collection>>>} arrays - array-like object containing one input nested array and one output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var ones3d = require( '@stdlib/array/base/ones3d' );
* var zeros3d = require( '@stdlib/array/base/zeros3d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 2, 2 ];
*
* var x = ones3d( shape );
* var y = zeros3d( shape );
*
* unary3d( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ]
*/
function unary3d( arrays, shape, fcn ) {
	var S0;
	var S1;
	var S2;
	var i0;
	var i1;
	var i2;
	var x0;
	var x1;
	var y0;
	var y1;
	var x;
	var y;

	S0 = shape[ 2 ];
	S1 = shape[ 1 ];
	S2 = shape[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 ) {
		return;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	for ( i2 = 0; i2 < S2; i2++ ) {
		x1 = x[ i2 ];
		y1 = y[ i2 ];
		for ( i1 = 0; i1 < S1; i1++ ) {
			x0 = x1[ i1 ];
			y0 = y1[ i1 ];
			for ( i0 = 0; i0 < S0; i0++ ) {
				y0[ i0 ] = fcn( x0[ i0 ] );
			}
		}
	}
}


// EXPORTS //

module.exports = unary3d;
