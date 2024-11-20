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
* Applies a function to elements in a three-dimensional nested input array and assigns results to elements in a new three-dimensional nested output array.
*
* @param {ArrayLikeObject<Collection>} x - input nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @returns {Array<Array>} output array
*
* @example
* var ones3d = require( '@stdlib/array/base/ones3d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 2, 2 ];
*
* var x = ones3d( shape );
* var y = map3d( x, shape, scale );
* // returns [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ]
*/
function map3d( x, shape, fcn, thisArg ) {
	var S0;
	var S1;
	var S2;
	var i0;
	var i1;
	var i2;
	var x0;
	var y0;
	var x1;
	var y1;
	var y;

	S0 = shape[ 2 ];
	S1 = shape[ 1 ];
	S2 = shape[ 0 ];
	y = [];
	for ( i2 = 0; i2 < S2; i2++ ) {
		x1 = x[ i2 ];
		y1 = [];
		for ( i1 = 0; i1 < S1; i1++ ) {
			x0 = x1[ i1 ];
			y0 = [];
			for ( i0 = 0; i0 < S0; i0++ ) {
				y0.push( fcn.call( thisArg, x0[ i0 ], [ i2, i1, i0 ], x ) );
			}
			y1.push( y0 );
		}
		y.push( y1 );
	}
	return y;
}


// EXPORTS //

module.exports = map3d;
