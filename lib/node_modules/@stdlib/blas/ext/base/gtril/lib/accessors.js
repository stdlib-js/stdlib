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
* Copies the lower triangular part of a matrix `A` to another matrix `B`.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {integer} k - diagonal above which to ignore
* @param {Object} A - input matrix object
* @param {Collection} A.data - input matrix data
* @param {Array<Function>} A.accessors - matrix element accessors
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Object} B - output matrix object
* @param {Collection} B.data - output matrix data
* @param {Array<Function>} B.accessors - matrix element accessors
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Object} `B`
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var A = arraylike2object( toAccessorArray( [ 1.0, 2.0, 3.0, 4.0 ] ) );
* var B = arraylike2object( toAccessorArray( [ 0.0, 0.0, 0.0, 0.0 ] ) );
*
* gtril( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B.data => [ 1.0, 0.0, 3.0, 4.0 ]
*/
function gtril( M, N, k, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var abuf;
	var bbuf;
	var aget;
	var bset;
	var ia;
	var ib;
	var i0;
	var i1;

	// Cache references to array data:
	abuf = A.data;
	bbuf = B.data;

	// Cache references to the element accessors:
	aget = A.accessors[ 0 ];
	bset = B.accessors[ 1 ];

	ia = offsetA;
	ib = offsetB;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		// Copy row-by-row in order to ensure cache-optimal traversal...
		for ( i1 = 0; i1 < M; i1++ ) {
			for ( i0 = 0; i0 <= min( i1+k, N-1 ); i0++ ) {
				bset( bbuf, ib+(i0*strideB2), aget( abuf, ia+(i0*strideA2) ) );
			}
			ia += strideA1;
			ib += strideB1;
		}
		return B;
	}
	// Copy column-by-column in order to ensure cache-optimal traversal...
	for ( i1 = 0; i1 < N; i1++ ) {
		for ( i0 = max( 0, i1-k ); i0 < M; i0++ ) {
			bset( bbuf, ib+(i0*strideB1), aget( abuf, ia+(i0*strideA1) ) );
		}
		ia += strideA2;
		ib += strideB2;
	}
	return B;
}


// EXPORTS //

module.exports = gtril;
