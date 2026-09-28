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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
var max = require( '@stdlib/math/base/special/fast/max' );
var min = require( '@stdlib/math/base/special/fast/min' );


// MAIN //

/**
* Copies the lower triangular part of a double-precision floating-point matrix `A` to another matrix `B`.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {integer} k - diagonal above which to ignore
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Float64Array} `B`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* dtril( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float64Array>[ 1.0, 0.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* dtril( 2, 2, 1, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
function dtril( M, N, k, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var ia;
	var ib;
	var i0;
	var i1;

	ia = offsetA;
	ib = offsetB;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			for ( i0 = 0; i0 <= min( i1+k, N-1 ); i0++ ) {
				B[ ib+(i0*strideB2) ] = A[ ia+(i0*strideA2) ];
			}
			ia += strideA1;
			ib += strideB1;
		}
		return B;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		for ( i0 = max( 0, i1-k ); i0 < M; i0++ ) {
			B[ ib+(i0*strideB1) ] = A[ ia+(i0*strideA1) ];
		}
		ia += strideA2;
		ib += strideB2;
	}
	return B;
}


// EXPORTS //

module.exports = dtril;
