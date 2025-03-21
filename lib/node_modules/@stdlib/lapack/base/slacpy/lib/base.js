/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var loopOrder = require( '@stdlib/ndarray/base/unary-loop-interchange-order' );
var min = require( '@stdlib/math/base/special/fast/min' );


// FUNCTIONS //

/**
* Copies all of a matrix `A` to another matrix `B`.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Float32Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float32Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Float32Array} `B`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyAll( 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyAll( 2, 2, A, 2, -1, 1, B, 2, 1, 0 );
* // B => <Float32Array>[ 2.0, 1.0, 4.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyAll( 2, 2, A, -2, 1, 2, B, 2, 1, 0 );
* // B => <Float32Array>[ 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyAll( 2, 2, A, -2, -1, 3, B, 2, 1, 0 );
* // B => <Float32Array>[ 4.0, 3.0, 2.0, 1.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyAll( 2, 2, A, 1, 2, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 3.0, 2.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyAll( 2, 2, A, -1, 2, 1, B, 2, 1, 0 );
* // B => <Float32Array>[ 2.0, 4.0, 1.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyAll( 2, 2, A, 1, -2, 2, B, 2, 1, 0 );
* // B => <Float32Array>[ 3.0, 1.0, 4.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyAll( 2, 2, A, -1, -2, 3, B, 2, 1, 0 );
* // B => <Float32Array>[ 4.0, 2.0, 3.0, 1.0 ]
*/
function copyAll( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var da0;
	var da1;
	var db0;
	var db1;
	var sh;
	var S0;
	var S1;
	var sa;
	var sb;
	var ia;
	var ib;
	var i0;
	var i1;
	var o;

	// Resolve the loop interchange order:
	o = loopOrder( [ M, N ], [ strideA1, strideA2 ], [ strideB1, strideB2 ] );
	sh = o.sh;
	sa = o.sx;
	sb = o.sy;

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	S0 = sh[ 0 ];
	S1 = sh[ 1 ];
	da0 = sa[ 0 ];
	da1 = sa[ 1 ] - ( S0*sa[0] );
	db0 = sb[ 0 ];
	db1 = sb[ 1 ] - ( S0*sb[0] );

	// Set the pointers to the first indexed elements in the respective matrices...
	ia = offsetA;
	ib = offsetB;

	// Iterate over the matrix dimensions...
	for ( i1 = 0; i1 < S1; i1++ ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			B[ ib ] = A[ ia ];
			ia += da0;
			ib += db0;
		}
		ia += da1;
		ib += db1;
	}
	return B;
}

/**
* Copies the upper triangular/trapezoidal part of a matrix `A` to another matrix `B`.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Float32Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float32Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Float32Array} `B`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyUpper( 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 2.0, 0.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyUpper( 2, 2, A, 2, -1, 1, B, 2, 1, 0 );
* // B => <Float32Array>[ 2.0, 1.0, 0.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyUpper( 2, 2, A, -2, 1, 2, B, 2, 1, 0 );
* // B => <Float32Array>[ 3.0, 4.0, 0.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyUpper( 2, 2, A, -2, -1, 3, B, 2, 1, 0 );
* // B => <Float32Array>[ 4.0, 3.0, 0.0, 1.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyUpper( 2, 2, A, 1, 2, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 3.0, 0.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyUpper( 2, 2, A, -1, 2, 1, B, 2, 1, 0 );
* // B => <Float32Array>[ 2.0, 4.0, 0.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyUpper( 2, 2, A, 1, -2, 2, B, 2, 1, 0 );
* // B => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyUpper( 2, 2, A, -1, -2, 3, B, 2, 1, 0 );
* // B => <Float32Array>[ 4.0, 2.0, 0.0, 1.0 ]
*/
function copyUpper( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var ia;
	var ib;
	var i0;
	var i1;

	ia = offsetA;
	ib = offsetB;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			for ( i0 = i1; i0 < N; i0++ ) {
				B[ ib+(i0*strideB2) ] = A[ ia+(i0*strideA2) ];
			}
			ia += strideA1;
			ib += strideB1;
		}
		return B;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		for ( i0 = 0; i0 <= min( i1, M-1 ); i0++ ) {
			B[ ib+(i0*strideB1) ] = A[ ia+(i0*strideA1) ];
		}
		ia += strideA2;
		ib += strideB2;
	}
	return B;
}

/**
* Copies the lower triangular/trapezoidal part of a matrix `A` to another matrix `B`.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Float32Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float32Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Float32Array} `B`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyLower( 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 0.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyLower( 2, 2, A, 2, -1, 1, B, 2, 1, 0 );
* // B => <Float32Array>[ 2.0, 0.0, 4.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyLower( 2, 2, A, -2, 1, 2, B, 2, 1, 0 );
* // B => <Float32Array>[ 3.0, 0.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyLower( 2, 2, A, -2, -1, 3, B, 2, 1, 0 );
* // B => <Float32Array>[ 4.0, 0.0, 2.0, 1.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyLower( 2, 2, A, 1, 2, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 0.0, 2.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyLower( 2, 2, A, -1, 2, 1, B, 2, 1, 0 );
* // B => <Float32Array>[ 2.0, 0.0, 1.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyLower( 2, 2, A, 1, -2, 2, B, 2, 1, 0 );
* // B => <Float32Array>[ 3.0, 0.0, 4.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* copyLower( 2, 2, A, -1, -2, 3, B, 2, 1, 0 );
* // B => <Float32Array>[ 4.0, 0.0, 3.0, 1.0 ]
*/
function copyLower( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var ia;
	var ib;
	var i0;
	var i1;

	ia = offsetA;
	ib = offsetB;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			for ( i0 = 0; i0 <= min( i1, N-1 ); i0++ ) {
				B[ ib+(i0*strideB2) ] = A[ ia+(i0*strideA2) ];
			}
			ia += strideA1;
			ib += strideB1;
		}
		return B;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		for ( i0 = i1; i0 < M; i0++ ) {
			B[ ib+(i0*strideB1) ] = A[ ia+(i0*strideA1) ];
		}
		ia += strideA2;
		ib += strideB2;
	}
	return B;
}


// MAIN //

/**
* Copies all or part of a matrix `A` to another matrix `B`.
*
* @private
* @param {string} uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Float32Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float32Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Float32Array} `B`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* slacpy( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* slacpy( 'upper', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 2.0, 0.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* slacpy( 'lower', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float32Array>[ 1.0, 0.0, 3.0, 4.0 ]
*/
function slacpy( uplo, M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	if ( uplo === 'upper' ) {
		return copyUpper( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB );
	}
	if ( uplo === 'lower' ) {
		return copyLower( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB );
	}
	return copyAll( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB );
}


// EXPORTS //

module.exports = slacpy;
