/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex64Array } from '@stdlib/types/array';
import { Complex64 } from '@stdlib/types/complex';
import { Layout } from '@stdlib/types/blas';

/**
* Interface describing `claset`.
*/
interface Routine {
	/**
	* Sets the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.
	*
	* @param order - storage layout of `A`
	* @param uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param alpha - value assigned to off-diagonal elements
	* @param beta - value assigned to diagonal elements
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var A = new Complex64Array( 4 );
	*
	* var alpha = new Complex64( 1.0, 2.0 );
	* var beta = new Complex64( 3.0, 4.0 );
	*
	* claset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 );
	* // A => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
	*/
	( order: Layout, uplo: string, M: number, N: number, alpha: Complex64, beta: Complex64, A: Complex64Array, LDA: number ): Complex64Array;

	/**
	* Sets the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values using alternative indexing semantics.
	*
	* @param uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param alpha - value assigned to off-diagonal elements
	* @param beta - value assigned to diagonal elements
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @returns `A`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/float32' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var A = new Complex64Array( 4 );
	*
	* var alpha = new Complex64( 1.0, 2.0 );
	* var beta = new Complex64( 3.0, 4.0 );
	*
	* claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, 0 );
	* // A => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
	*/
	ndarray( uplo: string, M: number, N: number, alpha: Complex64, beta: Complex64, A: Complex64Array, strideA1: number, strideA2: number, offsetA: number ): Complex64Array;
}

/**
* Sets the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.
*
* @param order - storage layout of `A`
* @param uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
* @param M - number of rows in matrix `A`
* @param N - number of columns in matrix `A`
* @param alpha - value assigned to off-diagonal elements
* @param beta - value assigned to diagonal elements
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @returns `A`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var A = new Complex64Array( 4 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 );
* // A => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var A = new Complex64Array( 5 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset.ndarray( 'all', 2, 2, A, 2, 1, 1 );
* // A => <Complex64Array>[ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
*/
declare var claset: Routine;


// EXPORTS //

export = claset;
