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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var loopOrder = require( '@stdlib/ndarray/base/nullary-loop-interchange-order' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var min = require( '@stdlib/math/base/special/fast/min' );


// FUNCTIONS //

/**
* Sets the diagonal of a single-precision complex floating-point matrix `A` to a specified value.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {number} breal - real component of the value to assign to diagonal elements
* @param {number} bimag - imaginary component of the value to assign to diagonal elements
* @param {Float32Array} A - input matrix view
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float32Array} `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* setDiagonal( 2, 3, 1.0, 2.0, A, 6, 2, 0 );
* // A => <Float32Array>[ 1.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 0.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* setDiagonal( 2, 2, 1.0, 2.0, A, 4, 2, 0 );
* // A => <Float32Array>[ 1.0, 2.0, 0.0, 0.0, 0.0, 0.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* setDiagonal( 3, 2, 1.0, 2.0, A, 4, 2, 0 );
* // A => <Float32Array>[ 1.0, 2.0, 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function setDiagonal( M, N, breal, bimag, A, strideA1, strideA2, offsetA ) {
	var sa;
	var ia;
	var i;

	sa = strideA1 + strideA2;
	ia = offsetA;
	for ( i = 0; i < min( M, N ); i++ ) {
		A[ ia ] = breal;
		A[ ia+1 ] = bimag;
		ia += sa;
	}
	return A;
}

/**
* Sets all elements of a single-precision complex floating-point matrix `A` to specified values.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {number} areal - real component of the value to assign to off-diagonal elements
* @param {number} aimag - imaginary component of the value to assign to off-diagonal elements
* @param {number} breal - real component of the value to assign to diagonal elements
* @param {number} bimag - imaginary component of the value to assign to diagonal elements
* @param {Float32Array} A - input matrix view
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float32Array} `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setAll( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 4, 2, 0 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setAll( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 4, -2, 2 );
* // A => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setAll( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -4, 2, 4 );
* // A => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setAll( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -4, -2, 6 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setAll( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 2, 4, 0 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setAll( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -2, 4, 2 );
* // A => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setAll( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 2, -4, 4 );
* // A => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setAll( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -2, -4, 6 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function setAll( M, N, areal, aimag, breal, bimag, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-len
	var da0;
	var da1;
	var sh;
	var S0;
	var S1;
	var sa;
	var ia;
	var i0;
	var i1;
	var o;

	// Resolve the loop interchange order:
	o = loopOrder( [ M, N ], [ strideA1, strideA2 ] );
	sh = o.sh;
	sa = o.sx;

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	S0 = sh[ 0 ];
	S1 = sh[ 1 ];
	da0 = sa[ 0 ];
	da1 = sa[ 1 ] - ( S0*sa[0] );

	// Set the pointer to the first indexed element:
	ia = offsetA;

	// Fill the array with a scalar value...
	for ( i1 = 0; i1 < S1; i1++ ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			A[ ia ] = areal;
			A[ ia+1 ] = aimag;
			ia += da0;
		}
		ia += da1;
	}
	// Replace the diagonal:
	setDiagonal( M, N, breal, bimag, A, strideA1, strideA2, offsetA );

	return A;
}

/**
* Sets the upper triangular/trapezoidal part of a single-precision complex floating-point matrix `A` to specified values.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {number} areal - real component of the value to assign to off-diagonal elements
* @param {number} aimag - imaginary component of the value to assign to off-diagonal elements
* @param {number} breal - real component of the value to assign to diagonal elements
* @param {number} bimag - imaginary component of the value to assign to diagonal elements
* @param {Float32Array} A - input matrix view
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float32Array} `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setUpper( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 4, 2, 0 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 0.0, 0.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setUpper( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 4, -2, 2 );
* // A => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 0.0, 0.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setUpper( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -4, 2, 4 );
* // A => <Float32Array>[ 0.0, 0.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setUpper( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -4, -2, 6 );
* // A => <Float32Array>[ 3.0, 4.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setUpper( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 2, 4, 0 );
* // A => <Float32Array>[ 3.0, 4.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setUpper( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -2, 4, 2 );
* // A => <Float32Array>[ 0.0, 0.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setUpper( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 2, -4, 4 );
* // A => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 0.0, 0.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setUpper( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -2, -4, 6 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 0.0, 0.0, 3.0, 4.0 ]
*/
function setUpper( M, N, areal, aimag, breal, bimag, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-len
	var idx;
	var ia;
	var i0;
	var i1;

	ia = offsetA;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			idx = ia + ( i1*strideA2 );
			for ( i0 = i1; i0 < N; i0++ ) {
				A[ idx ] = areal;
				A[ idx+1 ] = aimag;
				idx += strideA2;
			}
			ia += strideA1;
		}
		setDiagonal( M, N, breal, bimag, A, strideA1, strideA2, offsetA );
		return A;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		idx = ia;
		for ( i0 = 0; i0 <= min( i1, M-1 ); i0++ ) {
			A[ idx ] = areal;
			A[ idx+1 ] = aimag;
			idx += strideA1;
		}
		ia += strideA2;
	}
	setDiagonal( M, N, breal, bimag, A, strideA1, strideA2, offsetA );
	return A;
}

/**
* Sets the lower triangular/trapezoidal part of a single-precision complex floating-point matrix `A` to specified values.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {number} areal - real component of the value to assign to off-diagonal elements
* @param {number} aimag - imaginary component of the value to assign to off-diagonal elements
* @param {number} breal - real component of the value to assign to diagonal elements
* @param {number} bimag - imaginary component of the value to assign to diagonal elements
* @param {Float32Array} A - input matrix view
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float32Array} `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setLower( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 4, 2, 0 );
* // A => <Float32Array>[ 3.0, 4.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setLower( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 4, -2, 2 );
* // A => <Float32Array>[ 0.0, 0.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setLower( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -4, 2, 4 );
* // A => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 0.0, 0.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setLower( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -4, -2, 6 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 0.0, 0.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setLower( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 2, 4, 0 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 0.0, 0.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setLower( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -2, 4, 2 );
* // A => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 0.0, 0.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setLower( 2, 2, 1.0, 2.0, 3.0, 4.0, A, 2, -4, 4 );
* // A => <Float32Array>[ 0.0, 0.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( 8 );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* setLower( 2, 2, 1.0, 2.0, 3.0, 4.0, A, -2, -4, 6 );
* // A => <Float32Array>[ 3.0, 4.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function setLower( M, N, areal, aimag, breal, bimag, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-len
	var idx;
	var ia;
	var i0;
	var i1;

	ia = offsetA;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			idx = ia;
			for ( i0 = 0; i0 <= min( i1, N-1 ); i0++ ) {
				A[ idx ] = areal;
				A[ idx+1 ] = aimag;
				idx += strideA2;
			}
			ia += strideA1;
		}
		setDiagonal( M, N, breal, bimag, A, strideA1, strideA2, offsetA );
		return A;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		idx = ia + ( i1*strideA1 );
		for ( i0 = i1; i0 < M; i0++ ) {
			A[ idx ] = areal;
			A[ idx+1 ] = aimag;
			idx += strideA1;
		}
		ia += strideA2;
	}
	setDiagonal( M, N, breal, bimag, A, strideA1, strideA2, offsetA );
	return A;
}


// MAIN //

/**
* Sets elements of matrix `A` to specified values.
*
* @private
* @param {string} uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Complex64} alpha - value assigned to off-diagonal elements
* @param {Complex64} beta - value assigned to diagonal elements
* @param {Complex64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Complex64Array} `A`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( 4 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'all', 2, 2, alpha, beta, A, 2, 1, 0 );
*
* var z = A.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 1 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( 4 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'upper', 2, 2, alpha, beta, A, 2, 1, 0 );
*
* var z = A.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 1 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 0.0
*
* im = imagf( z );
* // returns 0.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( 4 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'lower', 2, 2, alpha, beta, A, 2, 1, 0 );
*
* var z = A.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 1 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 0.0
*
* im = imagf( z );
* // returns 0.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*/
function claset( uplo, M, N, alpha, beta, A, strideA1, strideA2, offsetA ) {
	var viewA;
	var ar;
	var ai;
	var br;
	var bi;

	// Reinterpret the input array as a real-valued array of interleaved real and imaginary components:
	viewA = reinterpret( A, 0 );

	// Adjust the strides and offset accordingly:
	strideA1 *= 2;
	strideA2 *= 2;

	offsetA *= 2;

	// Decompose the scalars to real and imaginary components:
	ar = realf( alpha );
	ai = imagf( alpha );
	br = realf( beta );
	bi = imagf( beta );

	if ( uplo === 'upper' ) {
		setUpper( M, N, ar, ai, br, bi, viewA, strideA1, strideA2, offsetA );
	} else if ( uplo === 'lower' ) {
		setLower( M, N, ar, ai, br, bi, viewA, strideA1, strideA2, offsetA );
	} else {
		setAll( M, N, ar, ai, br, bi, viewA, strideA1, strideA2, offsetA );
	}
	return A;
}


// EXPORTS //

module.exports = claset;
