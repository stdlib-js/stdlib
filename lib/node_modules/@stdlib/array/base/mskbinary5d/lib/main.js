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

/* eslint-disable max-depth */

'use strict';

// MAIN //

/**
* Applies a binary callback to elements in two five-dimensional nested input arrays according to elements in a five-dimensional nested mask array and assigns results to elements in a five-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject<Array<Collection>>} arrays - array-like object containing two input nested arrays, an input nested mask array, and one output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var ones5d = require( '@stdlib/array/base/ones5d' );
* var zeros5d = require( '@stdlib/array/base/zeros5d' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var shape = [ 1, 1, 1, 2, 2 ];
*
* var x = ones5d( shape );
* var y = ones5d( shape );
* var z = zeros5d( shape );
*
* var mask = [ [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ] ];
*
* mskbinary5d( [ x, y, mask, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ 2.0, 0.0 ], [ 2.0, 2.0 ] ] ] ] ]
*/
function mskbinary5d( arrays, shape, fcn ) {
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
	var x1;
	var x2;
	var x3;
	var y0;
	var y1;
	var y2;
	var y3;
	var z0;
	var z1;
	var z2;
	var z3;
	var m0;
	var m1;
	var m2;
	var m3;
	var x;
	var y;
	var z;
	var m;

	S0 = shape[ 4 ];
	S1 = shape[ 3 ];
	S2 = shape[ 2 ];
	S3 = shape[ 1 ];
	S4 = shape[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 || S3 <= 0 || S4 <= 0 ) {
		return;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	m = arrays[ 2 ];
	z = arrays[ 3 ];
	for ( i4 = 0; i4 < S4; i4++ ) {
		x3 = x[ i4 ];
		y3 = y[ i4 ];
		z3 = z[ i4 ];
		m3 = m[ i4 ];
		for ( i3 = 0; i3 < S3; i3++ ) {
			x2 = x3[ i3 ];
			y2 = y3[ i3 ];
			z2 = z3[ i3 ];
			m2 = m3[ i3 ];
			for ( i2 = 0; i2 < S2; i2++ ) {
				x1 = x2[ i2 ];
				y1 = y2[ i2 ];
				z1 = z2[ i2 ];
				m1 = m2[ i2 ];
				for ( i1 = 0; i1 < S1; i1++ ) {
					x0 = x1[ i1 ];
					y0 = y1[ i1 ];
					z0 = z1[ i1 ];
					m0 = m1[ i1 ];
					for ( i0 = 0; i0 < S0; i0++ ) {
						if ( m0[ i0 ] === 0 ) {
							z0[ i0 ] = fcn( x0[ i0 ], y0[ i0 ] );
						}
					}
				}
			}
		}
	}
}


// EXPORTS //

module.exports = mskbinary5d;
