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
* Applies a function to elements in a four-dimensional nested input array and assigns results to elements in a new four-dimensional nested output array.
*
* @param {ArrayLikeObject<Collection>} x - input nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @returns {Array<Array>} output array
*
* @example
* var ones4d = require( '@stdlib/array/base/ones4d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = ones4d( shape );
* var y = map4d( x, shape, scale );
* // returns [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
*/
function map4d( x, shape, fcn, thisArg ) {
	var S0;
	var S1;
	var S2;
	var S3;
	var i0;
	var i1;
	var i2;
	var i3;
	var x0;
	var y0;
	var x1;
	var y1;
	var x2;
	var y2;
	var y;

	S0 = shape[ 3 ];
	S1 = shape[ 2 ];
	S2 = shape[ 1 ];
	S3 = shape[ 0 ];
	y = [];
	for ( i3 = 0; i3 < S3; i3++ ) {
		x2 = x[ i3 ];
		y2 = [];
		for ( i2 = 0; i2 < S2; i2++ ) {
			x1 = x2[ i2 ];
			y1 = [];
			for ( i1 = 0; i1 < S1; i1++ ) {
				x0 = x1[ i1 ];
				y0 = [];
				for ( i0 = 0; i0 < S0; i0++ ) {
					y0.push( fcn.call( thisArg, x0[ i0 ], [ i3, i2, i1, i0 ], x ) ); // eslint-disable-line max-len
				}
				y1.push( y0 );
			}
			y2.push( y1 );
		}
		y.push( y2 );
	}
	return y;
}


// EXPORTS //

module.exports = map4d;
