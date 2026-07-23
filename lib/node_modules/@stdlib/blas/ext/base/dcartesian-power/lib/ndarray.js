/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Computes the Cartesian power for a double-precision floating-point strided array using alternative indexing semantics.
*
* ## Notes
*
* -   `k`-tuples are stored as rows in the output matrix, where the `j`-th column contains the `j`-th element of each tuple.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {NonNegativeInteger} k - power
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} out - output array
* @param {integer} strideOut1 - stride length for the first dimension of `out`
* @param {integer} strideOut2 - stride length for the second dimension of `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0 ] );
* var out = new Float64Array( 8 );
*
* dcartesianPower( x.length, 2, x, 1, 0, out, 2, 1, 0 );
* // out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/
function dcartesianPower( N, k, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ) { // eslint-disable-line max-len
	var len;
	var oj;
	var io;
	var ix;
	var sj;
	var i;
	var j;
	var s;
	var t;

	if ( N <= 0 || k <= 0 ) {
		return out;
	}
	len = pow( N, k );
	if ( isRowMajor( [ strideOut1, strideOut2 ] ) ) {
		io = offsetOut;
		for ( i = 0; i < len; i++ ) {
			t = i;
			for ( j = k-1; j >= 0; j-- ) {
				s = t % N;
				t = (t-s) / N;
				ix = offsetX + (s*strideX);
				oj = io + (j*strideOut2);
				out[ oj ] = x[ ix ];
			}
			io += strideOut1;
		}
	} else { // isColMajor
		sj = len;
		for ( j = 0; j < k; j++ ) {
			sj /= N;
			io = offsetOut + (j*strideOut2);
			for ( i = 0; i < len; i++ ) {
				s = ((i-(i%sj))/sj) % N;
				ix = offsetX + (s*strideX);
				out[ io ] = x[ ix ];
				io += strideOut1;
			}
		}
	}
	return out;
}


// EXPORTS //

module.exports = dcartesianPower;
