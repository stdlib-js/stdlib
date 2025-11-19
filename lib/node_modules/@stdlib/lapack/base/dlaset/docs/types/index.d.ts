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

import { Layout } from '@stdlib/types/blas';

/**
* Interface describing `dlaset`.
*/
interface Routine {
	/**
	* Sets the off-diagonal elements and the diagonal elements of a double-precision floating-point matrix to specified values.
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
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( 4 );
	*
	* dlaset( 'row-major', 'all', 2, 2, 2.0, 1.0, A, 2 );
	* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
	*/
	( order: Layout, uplo: string, M: number, N: number, alpha: number, beta: number, A: Float64Array, LDA: number ): Float64Array;

	/**
	* Sets the off-diagonal elements and the diagonal elements of a double-precision floating-point matrix to specified values using alternative indexing semantics.
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
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( 4 );
	*
	* dlaset.ndarray( 'all', 2, 2, 2.0, 1.0, A, 2, 1, 0 );
	* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
	*/
	ndarray( uplo: string, M: number, N: number, alpha: number, beta: number, A: Float64Array, strideA1: number, strideA2: number, offsetA: number ): Float64Array;
}

/**
* Sets the off-diagonal elements and the diagonal elements of a double-precision floating-point matrix to specified values.
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
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* dlaset( 'row-major', 'all', 2, 2, 2.0, 1.0, A, 2 );
* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( 4 );
*
* dlaset.ndarray( 'all', 2, 2, 2.0, 1.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
*/
declare var dlaset: Routine;


// EXPORTS //

export = dlaset;
