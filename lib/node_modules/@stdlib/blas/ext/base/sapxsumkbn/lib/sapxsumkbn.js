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
* Adds a constant to each single-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.
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
* @param {number} alpha - constant
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var N = x.length;
*
* var v = sapxsumkbn( N, 5.0, x, 1 );
* // returns 16.0
*/
function sapxsumkbn( N, alpha, x, stride ) {
	var sum;
	var ix;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	if ( N === 1 || stride === 0 ) {
		return float64ToFloat32( alpha + x[ 0 ] );
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	sum = 0.0;
	c = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = float64ToFloat32( alpha + x[ ix ] );
		t = float64ToFloat32( sum + v );
		if ( abs( sum ) >= abs( v ) ) {
			c = float64ToFloat32( c + float64ToFloat32( float64ToFloat32( sum-t ) + v ) ); // eslint-disable-line max-len
		} else {
			c = float64ToFloat32( c + float64ToFloat32( float64ToFloat32( v-t ) + sum ) ); // eslint-disable-line max-len
		}
		sum = t;
		ix += stride;
	}
	return float64ToFloat32( sum + c );
}


// EXPORTS //

module.exports = sapxsumkbn;
