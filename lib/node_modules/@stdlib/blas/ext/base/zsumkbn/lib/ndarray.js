/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.
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
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex128} sum
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = zsumkbn( x.length, x, 1, 0 );
* // returns <Complex128>[ 3.0, 1.0 ]
*/
function zsumkbn( N, x, strideX, offsetX ) {
	var rsum;
	var isum;
	var sx;
	var ix;
	var vr;
	var vi;
	var tr;
	var ti;
	var cr;
	var ci;
	var i;
	var j;
	var k;

	if ( N <= 0 ) {
		return new Complex128( 0.0, 0.0 );
	}
	x = reinterpret( x, 0 );
	ix = offsetX * 2;
	if ( strideX === 0 ) {
		return new Complex128( N * x[ ix ], N * x[ ix+1 ] );
	}
	sx = strideX * 2;

	vr = x[ ix ];
	vi = x[ ix+1 ];
	rsum = vr;
	isum = vi;

	// In order to preserve the sign of zero which can be lost during compensated summation below, find the first non-zero components...
	if ( vr === 0.0 || vi === 0.0 ) {
		j = -1;
		k = -1;
		for ( i = 0; i < N; i++ ) {
			if ( j < 0 ) {
				vr = x[ ix ];
				if ( vr === 0.0 ) {
					rsum += vr;
				} else {
					j = i;
				}
			}
			if ( k < 0 ) {
				vi = x[ ix+1 ];
				if ( vi === 0.0 ) {
					isum += vi;
				} else {
					k = i;
				}
			}
			if ( j >= 0 && k >= 0 ) {
				break;
			}
			ix += sx;
		}
	} else {
		j = 0;
		k = 0;
	}
	// Reset the pointer:
	ix = ( offsetX * 2 ) + sx;

	// Initialize correction terms:
	cr = 0.0;
	ci = 0.0;

	for ( i = 1; i < N; i++ ) {
		if ( i >= j ) {
			vr = x[ ix ];
			tr = rsum + vr;
			if ( abs( rsum ) >= abs( vr ) ) {
				cr += (rsum-tr) + vr;
			} else {
				cr += (vr-tr) + rsum;
			}
			rsum = tr;
		}
		if ( i >= k ) {
			vi = x[ ix+1 ];
			ti = isum + vi;
			if ( abs( isum ) >= abs( vi ) ) {
				ci += (isum-ti) + vi;
			} else {
				ci += (vi-ti) + isum;
			}
			isum = ti;
		}
		ix += sx;
	}
	if ( j >= 0 ) {
		rsum += cr;
	}
	if ( k >= 0 ) {
		isum += ci;
	}
	return new Complex128( rsum, isum );
}


// EXPORTS //

module.exports = zsumkbn;
