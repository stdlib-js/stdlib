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
var absf = require( '@stdlib/math/base/special/absf' );


// MAIN //

/**
* Computes the sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses a second-order iterative Kahan–Babuška algorithm, as described by Klein (2005).
*
* ## References
*
* -   Klein, Andreas. 2005. "A Generalized Kahan-Babuška-Summation-Algorithm." _Computing_ 76 (3): 279–93. doi:[10.1007/s00607-005-0139-x](https://doi.org/10.1007/s00607-005-0139-x).
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
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = ssumkbn2( 4, x, 2, 1 );
* // returns 5.0
*/
function ssumkbn2( N, x, strideX, offsetX ) {
	var sum;
	var ccs;
	var ix;
	var cs;
	var cc;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		return float64ToFloat32( N * x[ ix ] );
	}
	sum = 0.0;
	ccs = 0.0; // second order correction term for lost low order bits
	cs = 0.0; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		t = float64ToFloat32( sum+v );
		if ( absf( sum ) >= absf( v ) ) {
			c = float64ToFloat32( float64ToFloat32( sum-t ) + v );
		} else {
			c = float64ToFloat32( float64ToFloat32( v-t ) + sum );
		}
		sum = t;
		t = float64ToFloat32( cs+c );
		if ( absf( cs ) >= absf( c ) ) {
			cc = float64ToFloat32( float64ToFloat32( cs-t ) + c );
		} else {
			cc = float64ToFloat32( float64ToFloat32( c-t ) + cs );
		}
		cs = t;
		ccs = float64ToFloat32( ccs+cc );
		ix += strideX;
	}
	return float64ToFloat32( sum + float64ToFloat32( cs+ccs ) );
}


// EXPORTS //

module.exports = ssumkbn2;
