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
* Reflects the lower triangular part of a single-precision complex floating-point matrix `A` into the upper triangular part of another matrix `B` using alternative indexing semantics.
*
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {integer} k - diagonal above which to ignore
* @param {Complex64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Complex64Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Complex64Array} `B`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex64Array( 4 );
*
* ctril2triu( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Complex64Array>[ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 7.0, 8.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex64Array( 4 );
*
* ctril2triu( 2, 2, -1, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Complex64Array>[ 0.0, 0.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function ctril2triu( M, N, k, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) { // eslint-disable-line max-len, max-params
	return base( M, N, k, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = ctril2triu;
