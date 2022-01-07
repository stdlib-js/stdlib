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

var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.
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
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} y - output array
* @param {integer} strideY - `y` stride length
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* var v = gcusumkbn( x.length, 0.0, x, 1, y, 1 );
* // returns [ 1.0, -1.0, 1.0 ]
*/
function gcusumkbn( N, sum, x, strideX, y, strideY ) {
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
		t = s + v;
		if ( abs( s ) >= abs( v ) ) {
			c += (s-t) + v;
		} else {
			c += (v-t) + s;
		}
		s = t;
		y[ iy ] = s + c;
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = gcusumkbn;
