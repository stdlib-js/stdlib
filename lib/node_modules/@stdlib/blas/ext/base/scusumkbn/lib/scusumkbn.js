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

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the cumulative sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} sum - initial sum
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float32Array( x.length );
* var N = x.length;
*
* var v = scusumkbn( N, 0.0, x, 1, y, 1 );
* // returns <Float32Array>[ 1.0, -1.0, 1.0 ]
*/
function scusumkbn( N, sum, x, strideX, y, strideY ) {
	var ix;
	var iy;
	var s;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	s = sum;
	c = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		t = float64ToFloat32( s + v );
		if ( abs( s ) >= abs( v ) ) {
			c = float64ToFloat32( c + float64ToFloat32( float64ToFloat32( s-t ) + v ) ); // eslint-disable-line max-len
		} else {
			c = float64ToFloat32( c + float64ToFloat32( float64ToFloat32( v-t ) + s ) ); // eslint-disable-line max-len
		}
		s = t;
		y[ iy ] = float64ToFloat32( s + c );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = scusumkbn;
