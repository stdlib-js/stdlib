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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var absf = require( '@stdlib/math/base/special/absf' );


// MAIN //

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
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
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = snansumkbn( 5, x, 2, 1 );
* // returns 5.0
*/
function snansumkbn( N, x, strideX, offsetX ) {
	var sum;
	var ix;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		if ( isnanf( x[ ix ] ) ) {
			return 0.0;
		}
		return float64ToFloat32( N * x[ ix ] );
	}
	sum = 0.0;
	c = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( isnanf( v ) === false ) {
			t = sum + v;
			if ( absf( sum ) >= absf( v ) ) {
				c = float64ToFloat32( c + float64ToFloat32( float64ToFloat32( sum-t ) + v ) ); // eslint-disable-line max-len
			} else {
				c = float64ToFloat32( c + float64ToFloat32( float64ToFloat32( v-t ) + sum ) ); // eslint-disable-line max-len
			}
			sum = t;
		}
		ix += strideX;
	}
	return float64ToFloat32( sum + c );
}


// EXPORTS //

module.exports = snansumkbn;
