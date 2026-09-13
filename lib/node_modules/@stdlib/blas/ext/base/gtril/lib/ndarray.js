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

var base = require( './base.js' );


// MAIN //

/**
* Copies the lower triangular part of a matrix `A` to another matrix `B` using alternative indexing semantics.
*
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {integer} k - diagonal above which to ignore
* @param {Collection} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Collection} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Collection} `B`
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0 ];
* var B = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gtril( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => [ 1.0, 0.0, 3.0, 4.0 ]
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0 ];
* var B = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gtril( 2, 2, 1, A, 2, 1, 0, B, 2, 1, 0 );
* // B => [ 1.0, 2.0, 3.0, 4.0 ]
*/
function gtril( M, N, k, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) { // eslint-disable-line max-len, max-params
	return base( M, N, k, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gtril;
