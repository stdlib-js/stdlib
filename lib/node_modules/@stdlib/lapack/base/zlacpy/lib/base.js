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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
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
* @param {Float64Array} A - input matrix view
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} B - output matrix view
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Float64Array} `B`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyAll( 2, 2, A, 4, 2, 0, B, 4, 2, 0 );
* // B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyAll( 2, 2, A, 4, -2, 2, B, 4, 2, 0 );
* // B => <Float64Array>[ 3.0, 4.0, 1.0, 2.0, 7.0, 8.0, 5.0, 6.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyAll( 2, 2, A, -4, 2, 4, B, 4, 2, 0 );
* // B => <Float64Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyAll( 2, 2, A, -4, -2, 6, B, 4, 2, 0 );
* // B => <Float64Array>[ 7.0, 8.0, 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyAll( 2, 2, A, 2, 4, 0, B, 4, 2, 0 );
* // B => <Float64Array>[ 1.0, 2.0, 5.0, 6.0, 3.0, 4.0, 7.0, 8.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyAll( 2, 2, A, -2, 4, 2, B, 4, 2, 0 );
* // B => <Float64Array>[ 3.0, 4.0, 7.0, 8.0, 1.0, 2.0, 5.0, 6.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyAll( 2, 2, A, 2, -4, 4, B, 4, 2, 0 );
* // B => <Float64Array>[ 5.0, 6.0, 1.0, 2.0, 7.0, 8.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyAll( 2, 2, A, -2, -4, 6, B, 4, 2, 0 );
* // B => <Float64Array>[ 7.0, 8.0, 3.0, 4.0, 5.0, 6.0, 1.0, 2.0 ]
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
			B[ ib+1 ] = A[ ia+1 ];
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
* @param {Float64Array} A - input matrix view
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} B - output matrix view
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Float64Array} `B`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyUpper( 2, 2, A, 4, 2, 0, B, 4, 2, 0 );
* // B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 7.0, 8.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyUpper( 2, 2, A, 4, -2, 2, B, 4, 2, 0 );
* // B => <Float64Array>[ 3.0, 4.0, 1.0, 2.0, 0.0, 0.0, 5.0, 6.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyUpper( 2, 2, A, -4, 2, 4, B, 4, 2, 0 );
* // B => <Float64Array>[ 5.0, 6.0, 7.0, 8.0, 0.0, 0.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyUpper( 2, 2, A, -4, -2, 6, B, 4, 2, 0 );
* // B => <Float64Array>[ 7.0, 8.0, 5.0, 6.0, 0.0, 0.0, 1.0, 2.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyUpper( 2, 2, A, 2, 4, 0, B, 4, 2, 0 );
* // B => <Float64Array>[ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 7.0, 8.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyUpper( 2, 2, A, -2, 4, 2, B, 4, 2, 0 );
* // B => <Float64Array>[ 3.0, 4.0, 7.0, 8.0, 0.0, 0.0, 5.0, 6.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyUpper( 2, 2, A, 2, -4, 4, B, 4, 2, 0 );
* // B => <Float64Array>[ 5.0, 6.0, 1.0, 2.0, 0.0, 0.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyUpper( 2, 2, A, -2, -4, 6, B, 4, 2, 0 );
* // B => <Float64Array>[ 7.0, 8.0, 3.0, 4.0, 0.0, 0.0, 1.0, 2.0 ]
*/
function copyUpper( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var ia;
	var ib;
	var i0;
	var i1;
	var ja;
	var jb;

	ia = offsetA;
	ib = offsetB;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			ja = ia + ( i1*strideA2 );
			jb = ib + ( i1*strideB2 );
			for ( i0 = i1; i0 < N; i0++ ) {
				B[ jb ] = A[ ja ];
				B[ jb+1 ] = A[ ja+1 ];
				ja += strideA2;
				jb += strideB2;
			}
			ia += strideA1;
			ib += strideB1;
		}
		return B;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		jb = ib;
		ja = ia;
		for ( i0 = 0; i0 <= min( i1, M-1 ); i0++ ) {
			B[ jb ] = A[ ja ];
			B[ jb+1 ] = A[ ja+1 ];
			ja += strideA1;
			jb += strideB1;
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
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyLower( 2, 2, A, 4, 2, 0, B, 4, 2, 0 );
* // B => <Float64Array>[ 1.0, 2.0, 0.0, 0.0, 5.0, 6.0, 7.0, 8.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyLower( 2, 2, A, 4, -2, 2, B, 4, 2, 0 );
* // B => <Float64Array>[ 3.0, 4.0, 0.0, 0.0, 7.0, 8.0, 5.0, 6.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyLower( 2, 2, A, -4, 2, 4, B, 4, 2, 0 );
* // B => <Float64Array>[ 5.0, 6.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyLower( 2, 2, A, -4, -2, 6, B, 4, 2, 0 );
* // B => <Float64Array>[ 7.0, 8.0, 0.0, 0.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyLower( 2, 2, A, 2, 4, 0, B, 4, 2, 0 );
* // B => <Float64Array>[ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 7.0, 8.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyLower( 2, 2, A, -2, 4, 2, B, 4, 2, 0 );
* // B => <Float64Array>[ 3.0, 4.0, 0.0, 0.0, 1.0, 2.0, 5.0, 6.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyLower( 2, 2, A, 2, -4, 4, B, 4, 2, 0 );
* // B => <Float64Array>[ 5.0, 6.0, 0.0, 0.0, 7.0, 8.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Float64Array( 8 );
*
* copyLower( 2, 2, A, -2, -4, 6, B, 4, 2, 0 );
* // B => <Float64Array>[ 7.0, 8.0, 0.0, 0.0, 5.0, 6.0, 1.0, 2.0 ]
*/
function copyLower( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var ia;
	var ib;
	var i0;
	var i1;
	var ja;
	var jb;

	ia = offsetA;
	ib = offsetB;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			ja = ia;
			jb = ib;
			for ( i0 = 0; i0 <= min( i1, N-1 ); i0++ ) {
				B[ jb ] = A[ ja ];
				B[ jb+1 ] = A[ ja+1 ];
				ja += strideA2;
				jb += strideB2;
			}
			ia += strideA1;
			ib += strideB1;
		}
		return B;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		ja = ia + ( i1*strideA1 );
		jb = ib + ( i1*strideB1 );
		for ( i0 = i1; i0 < M; i0++ ) {
			B[ jb ] = A[ ja ];
			B[ jb+1 ] = A[ ja+1 ];
			ja += strideA1;
			jb += strideB1;
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
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex128Array( 4 );
*
* zlacpy( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
*
* var z = B.get( 0 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 1.0
*
* v = imag( z );
* // returns 2.0
*
* z = B.get( 1 );
* // returns <Complex128>
*
* v = real( z );
* // returns 3.0
*
* v = imag( z );
* // returns 4.0
*
* z = B.get( 2 );
* // returns <Complex128>
*
* v = real( z );
* // returns 5.0
*
* v = imag( z );
* // returns 6.0
*
* z = B.get( 3 );
* // returns <Complex128>
*
* v = real( z );
* // returns 7.0
*
* v = imag( z );
* // returns 8.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex128Array( 4 );
*
* zlacpy( 'upper', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Complex128Array>
*
* var z = B.get( 0 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 1.0
*
* v = imag( z );
* // returns 2.0
*
* z = B.get( 1 );
* // returns <Complex128>
*
* v = real( z );
* // returns 3.0
*
* v = imag( z );
* // returns 4.0
*
* z = B.get( 2 );
* // returns <Complex128>
*
* v = real( z );
* // returns 0.0
*
* v = imag( z );
* // returns 0.0
*
* z = B.get( 3 );
* // returns <Complex128>
*
* v = real( z );
* // returns 7.0
*
* v = imag( z );
* // returns 8.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex128Array( 4 );
*
* zlacpy( 'lower', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
*
* var z = B.get( 0 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 1.0
*
* v = imag( z );
* // returns 2.0
*
* z = B.get( 1 );
* // returns <Complex128>
*
* v = real( z );
* // returns 0.0
*
* v = imag( z );
* // returns 0.0
*
* z = B.get( 2 );
* // returns <Complex128>
*
* v = real( z );
* // returns 5.0
*
* v = imag( z );
* // returns 6.0
*
* z = B.get( 3 );
* // returns <Complex128>
*
* v = real( z );
* // returns 7.0
*
* v = imag( z );
* // returns 8.0
*/
function zlacpy( uplo, M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var viewA;
	var viewB;

	// Reinterpret the input and output arrays as real-valued arrays of interleaved real and imaginary components:
	viewA = reinterpret( A, 0 );
	viewB = reinterpret( B, 0 );

	// Adjust the strides and offsets accordingly:
	strideA1 *= 2;
	strideA2 *= 2;
	strideB1 *= 2;
	strideB2 *= 2;

	offsetA *= 2;
	offsetB *= 2;

	if ( uplo === 'upper' ) {
		copyUpper( M, N, viewA, strideA1, strideA2, offsetA, viewB, strideB1, strideB2, offsetB );
	} else if ( uplo === 'lower' ) {
		copyLower( M, N, viewA, strideA1, strideA2, offsetA, viewB, strideB1, strideB2, offsetB );
	} else {
		copyAll( M, N, viewA, strideA1, strideA2, offsetA, viewB, strideB1, strideB2, offsetB );
	}
	return B;
}


// EXPORTS //

module.exports = zlacpy;
