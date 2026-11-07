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
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var max = require( '@stdlib/math/base/special/fast/max' );
var min = require( '@stdlib/math/base/special/fast/min' );


// MAIN //

/**
* Reflects the lower triangular part of a double-precision complex floating-point matrix `A` into the upper triangular part of another matrix `B`.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {integer} k - diagonal above which to ignore
* @param {Complex128Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Complex128Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Complex128Array} `B`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex128Array( 4 );
*
* ztril2triu( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Complex128Array>[ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 7.0, 8.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex128Array( 4 );
*
* ztril2triu( 2, 2, -1, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Complex128Array>[ 0.0, 0.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function ztril2triu( M, N, k, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var viewA;
	var viewB;
	var sa1;
	var sa2;
	var sb1;
	var sb2;
	var ia;
	var ib;
	var ja;
	var jb;
	var i0;
	var i1;

	viewA = reinterpret( A, 0 );
	viewB = reinterpret( B, 0 );

	sa1 = strideA1 * 2;
	sa2 = strideA2 * 2;
	sb1 = strideB1 * 2;
	sb2 = strideB2 * 2;
	ia = offsetA * 2;
	ib = offsetB * 2;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			for ( i0 = 0; i0 <= min( i1+k, N-1 ); i0++ ) {
				ja = ia + ( i0*sa2 );
				jb = ib + ( i0*sb1 );
				viewB[ jb ] = viewA[ ja ];
				viewB[ jb+1 ] = viewA[ ja+1 ];
			}
			ia += sa1;
			ib += sb2;
		}
		return B;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		for ( i0 = max( 0, i1-k ); i0 < M; i0++ ) {
			ja = ia + ( i0*sa1 );
			jb = ib + ( i0*sb2 );
			viewB[ jb ] = viewA[ ja ];
			viewB[ jb+1 ] = viewA[ ja+1 ];
		}
		ia += sa2;
		ib += sb1;
	}
	return B;
}


// EXPORTS //

module.exports = ztril2triu;
