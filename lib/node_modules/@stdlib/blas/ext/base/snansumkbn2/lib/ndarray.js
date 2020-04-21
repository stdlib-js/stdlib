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
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
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
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var N = floor( x.length / 2 );
*
* var v = snansumkbn2( N, x, 2, 1 );
* // returns 5.0
*/
function snansumkbn2( N, x, stride, offset ) {
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
	if ( N === 1 || stride === 0 ) {
		if ( isnanf( x[ offset ] ) ) {
			return 0.0;
		}
		return x[ offset ];
	}
	ix = offset;
	sum = 0.0;
	ccs = 0.0; // second order correction term for lost low order bits
	cs = 0.0; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( isnanf( v ) === false ) {
			t = float64ToFloat32( sum + v );
			if ( abs( sum ) >= abs( v ) ) {
				c = float64ToFloat32( float64ToFloat32( sum-t ) + v );
			} else {
				c = float64ToFloat32( float64ToFloat32( v-t ) + sum );
			}
			sum = t;
			t = float64ToFloat32( cs + c );
			if ( abs( cs ) >= abs( c ) ) {
				cc = float64ToFloat32( float64ToFloat32(cs-t) + c );
			} else {
				cc = float64ToFloat32( float64ToFloat32(c-t) + cs );
			}
			cs = t;
			ccs = float64ToFloat32( ccs + cc );
		}
		ix += stride;
	}
	return float64ToFloat32( sum + float64ToFloat32( cs + ccs ) );
}


// EXPORTS //

module.exports = snansumkbn2;
