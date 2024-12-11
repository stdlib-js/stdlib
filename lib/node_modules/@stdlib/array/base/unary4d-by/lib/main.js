/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Applies a unary function to each element retrieved from a four-dimensional nested input array according to a callback function and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject<Array>} arrays - array-like object containing one input nested array and one output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Function} fcn - unary function to apply to callback return values
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @returns {void}
*
* @example
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
*
* function accessor( v ) {
*     return v - 2.0;
* }
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = ones4d( shape );
* var y = zeros4d( shape );
*
* unary4dBy( [ x, y ], shape, scale, accessor );
*
* console.log( y );
* // => [ [ [ [ -10.0, -10.0 ], [ -10.0, -10.0 ] ] ] ]
*/
function unary4dBy( arrays, shape, fcn, clbk ) {
	var thisArg;
	var S0;
	var S1;
	var S2;
	var S3;
	var i0;
	var i1;
	var i2;
	var i3;
	var x0;
	var x1;
	var x2;
	var y0;
	var y1;
	var y2;
	var x;
	var y;
	var v;

	S0 = shape[ 3 ];
	S1 = shape[ 2 ];
	S2 = shape[ 1 ];
	S3 = shape[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 || S3 <= 0 ) {
		return;
	}
	if ( arguments.length > 4 ) {
		thisArg = arguments[ 4 ];
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	for ( i3 = 0; i3 < S3; i3++ ) {
		x2 = x[ i3 ];
		y2 = y[ i3 ];
		for ( i2 = 0; i2 < S2; i2++ ) {
			x1 = x2[ i2 ];
			y1 = y2[ i2 ];
			for ( i1 = 0; i1 < S1; i1++ ) {
				x0 = x1[ i1 ];
				y0 = y1[ i1 ];
				for ( i0 = 0; i0 < S0; i0++ ) {
					v = clbk.call( thisArg, x0[ i0 ], [ i3, i2, i1, i0 ], [ x, y ] ); // eslint-disable-line max-len
					if ( v !== void 0 ) {
						y0[ i0 ] = fcn( v );
					}
				}
			}
		}
	}
}


// EXPORTS //

module.exports = unary4dBy;
