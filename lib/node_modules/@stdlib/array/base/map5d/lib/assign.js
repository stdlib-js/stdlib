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
* Applies a function to elements in a five-dimensional nested input array and assigns results to elements in a five-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject<Collection>} x - input nested array
* @param {ArrayLikeObject<Collection>} y - output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @returns {Array<Array>} output array
*
* @example
* var ones5d = require( '@stdlib/array/base/ones5d' );
* var zeros5d = require( '@stdlib/array/base/zeros5d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 1, 2, 2 ];
*
* var x = ones5d( shape );
* var y = zeros5d( shape );
*
* var out = map5d( x, y, shape, scale );
* // returns [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ]
*
* var bool = ( out === y );
* // returns true
*/
function map5d( x, y, shape, fcn, thisArg ) {
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var x0;
	var y0;
	var x1;
	var y1;
	var x2;
	var y2;
	var x3;
	var y3;

	S0 = shape[ 4 ];
	S1 = shape[ 3 ];
	S2 = shape[ 2 ];
	S3 = shape[ 1 ];
	S4 = shape[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 || S3 <= 0 || S4 <= 0 ) {
		return y;
	}
	for ( i4 = 0; i4 < S4; i4++ ) {
		x3 = x[ i4 ];
		y3 = y[ i4 ];
		for ( i3 = 0; i3 < S3; i3++ ) {
			x2 = x3[ i3 ];
			y2 = y3[ i3 ];
			for ( i2 = 0; i2 < S2; i2++ ) {
				x1 = x2[ i2 ];
				y1 = y2[ i2 ];
				for ( i1 = 0; i1 < S1; i1++ ) {
					x0 = x1[ i1 ];
					y0 = y1[ i1 ];
					for ( i0 = 0; i0 < S0; i0++ ) {
						y0[ i0 ] = fcn.call( thisArg, x0[ i0 ], [ i4, i3, i2, i1, i0 ], x ); // eslint-disable-line max-len
					}
				}
			}
		}
	}
	return y;
}


// EXPORTS //

module.exports = map5d;
