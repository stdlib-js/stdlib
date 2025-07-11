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
var loopOrder = require( '@stdlib/ndarray/base/nullary-loop-interchange-order' );
var min = require( '@stdlib/math/base/special/fast/min' );


// FUNCTIONS //

/**
* Sets the diagonal of a double-precision floating-point matrix `A` to a specified value.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {number} beta - value to assign to diagonal elements
* @param {Float64Array} A - input matrix view
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 6 );
*
* setDiagonal( 2, 3, 1.0, A, 3, 1, 0 );
* // A => <Float64Array>[ 1.0, 0.0, 0.0, 0.0, 1.0, 0.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* setDiagonal( 2, 2, 1.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 1.0, 0.0, 0.0, 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 6 );
*
* setDiagonal( 3, 2, 1.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 1.0, 0.0, 0.0, 1.0, 0.0, 0.0 ]
*/
function setDiagonal( M, N, beta, A, strideA1, strideA2, offsetA ) {
	var sa;
	var ia;
	var i;

	sa = strideA1 + strideA2;
	ia = offsetA;
	for ( i = 0; i < min( M, N ); i++ ) {
		A[ ia ] = beta;
		ia += sa;
	}
	return A;
}

/**
* Sets all elements of a double-precision floating-point matrix `A` to specified values.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {number} alpha - value to assign to off-diagonal elements
* @param {number} beta - value to assign to diagonal elements
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* setAll( 2, 2, 2.0, 1.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* setAll( 2, 2, 2.0, 1.0, A, 1, 2, 0 );
* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
*/
function setAll( M, N, alpha, beta, A, strideA1, strideA2, offsetA ) {
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

	// Iterate over the matrix dimensions...
	for ( i1 = 0; i1 < S1; i1++ ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			A[ ia ] = alpha;
			ia += da0;
		}
		ia += da1;
	}
	setDiagonal( M, N, beta, A, strideA1, strideA2, offsetA );
	return A;
}

/**
* Sets the upper triangular/trapezoidal part of a double-precision floating-point matrix `A` to specified values.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {number} alpha - value to assign to off-diagonal elements
* @param {number} beta - value to assign to diagonal elements
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* setUpper( 2, 2, 1.0, 2.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 2.0, 1.0, 0.0, 2.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* setUpper( 2, 2, 1.0, 2.0, A, 1, 2, 0 );
* // A => <Float64Array>[ 2.0, 0.0, 1.0, 2.0 ]
*/
function setUpper( M, N, alpha, beta, A, strideA1, strideA2, offsetA ) {
	var idx;
	var ia;
	var i0;
	var i1;

	ia = offsetA;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			idx = ia + ( i1*strideA2 );
			for ( i0 = i1; i0 < N; i0++ ) {
				A[ idx ] = alpha;
				idx += strideA2;
			}
			ia += strideA1;
		}
	} else {
		for ( i1 = 0; i1 < N; i1++ ) {
			idx = ia;
			for ( i0 = 0; i0 <= min( i1, M-1 ); i0++ ) {
				A[ idx ] = alpha;
				idx += strideA1;
			}
			ia += strideA2;
		}
	}
	setDiagonal( M, N, beta, A, strideA1, strideA2, offsetA );
	return A;
}

/**
*  Sets the lower triangular/trapezoidal part of a double-precision floating-point matrix `A` to specified values.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {number} alpha - value to assign to off-diagonal elements
* @param {number} beta - value to assign to diagonal elements
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* setLower( 2, 2, 1.0, 2.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 2.0, 0.0, 1.0, 2.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* setLower( 2, 2, 1.0, 2.0, A, 1, 2, 0 );
* // A => <Float64Array>[ 2.0, 1.0, 0.0, 2.0 ]
*/
function setLower( M, N, alpha, beta, A, strideA1, strideA2, offsetA ) {
	var idx;
	var ia;
	var i0;
	var i1;

	ia = offsetA;
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			idx = ia;
			for ( i0 = 0; i0 <= min( i1, N-1 ); i0++ ) {
				A[ idx ] = alpha;
				idx += strideA2;
			}
			ia += strideA1;
		}
	} else {
		for ( i1 = 0; i1 < N; i1++ ) {
			idx = ia + ( i1*strideA1 );
			for ( i0 = i1; i0 < M; i0++ ) {
				A[ idx ] = alpha;
				idx += strideA1;
			}
			ia += strideA2;
		}
	}
	setDiagonal( M, N, beta, A, strideA1, strideA2, offsetA );
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
* @param {number} alpha - value to assign to off-diagonal elements
* @param {number} beta - value to assign to diagonal elements
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* dlaset( 'all', 2, 2, 2.0, 1.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* dlaset( 'upper', 2, 2, 2.0, 1.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 1.0, 2.0, 0.0, 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* dlaset( 'lower', 2, 2, 2.0, 1.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 1.0, 0.0, 2.0, 1.0 ]
*/
function dlaset( uplo, M, N, alpha, beta, A, strideA1, strideA2, offsetA ) {
	if ( uplo === 'upper' ) {
		return setUpper( M, N, alpha, beta, A, strideA1, strideA2, offsetA );
	}
	if ( uplo === 'lower' ) {
		return setLower( M, N, alpha, beta, A, strideA1, strideA2, offsetA );
	}
	return setAll( M, N, alpha, beta, A, strideA1, strideA2, offsetA );
}


// EXPORTS //

module.exports = dlaset;
