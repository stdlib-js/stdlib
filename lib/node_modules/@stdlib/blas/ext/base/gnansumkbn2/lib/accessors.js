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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the sum of strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses a second-order iterative Kahan–Babuška algorithm, as described by Klein (2005).
*
* ## References
*
* -   Klein, Andreas. 2005. "A Generalized Kahan-Babuška-Summation-Algorithm." _Computing_ 76 (3): 279–93. doi:[10.1007/s00607-005-0139-x](https://doi.org/10.1007/s00607-005-0139-x).
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {number} sum
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = gnansumkbn2( 4, arraylike2object( x ), 2, 1 );
* // returns 5.0
*/
function gnansumkbn2( N, x, strideX, offsetX ) {
	var xbuf;
	var xget;
	var sum;
	var ccs;
	var cs;
	var cc;
	var ix;
	var v;
	var t;
	var c;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache reference to the element accessors:
	xget = x.accessors[ 0 ];

	ix = offsetX;
	if ( strideX === 0 ) {
		if ( isnan( xget( xbuf, ix ) ) ) {
			return 0.0;
		}
		return N * xget( xbuf, ix );
	}
	sum = 0.0;
	ccs = 0.0; // second order correction term for lost low order bits
	cs = 0.0; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = xget( xbuf, ix );
		if ( isnan( v ) === false ) {
			t = sum + v;
			if ( abs( sum ) >= abs( v ) ) {
				c = (sum-t) + v;
			} else {
				c = (v-t) + sum;
			}
			sum = t;
			t = cs + c;
			if ( abs( cs ) >= abs( c ) ) {
				cc = (cs-t) + c;
			} else {
				cc = (c-t) + cs;
			}
			cs = t;
			ccs += cc;
		}
		ix += strideX;
	}
	return sum + cs + ccs;
}


// EXPORTS //

module.exports = gnansumkbn2;
