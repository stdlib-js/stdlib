/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Layout } from '@stdlib/types/blas';

/**
* Interface describing `slacpy`.
*/
interface Routine {
	/**
	* Copies all or part of a matrix `A` to another matrix `B`.
	*
	* @param order - storage layout of `A` and `B`
	* @param uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param B - output matrix
	* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
	* @returns `B`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Float32Array( 4 );
	*
	* slacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
	* // B => <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*/
	( order: Layout, uplo: string, M: number, N: number, A: Float32Array, LDA: number, B: Float32Array, LDB: number ): Float32Array;

	/**
	* Copies all or part of a matrix `A` to another matrix `B` using alternative indexing semantics.
	*
	* @param uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @param B - output matrix
	* @param strideB1 - stride of the first dimension of `B`
	* @param strideB2 - stride of the second dimension of `B`
	* @param offsetB - starting index for `B`
	* @returns `B`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Float32Array( [ 0.0, 0.0, 99.0, 99.0, 99.0, 99.0 ] );
	*
	* slacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
	* // B => <Float32Array>[ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	ndarray( uplo: string, M: number, N: number, A: Float32Array, strideA1: number, strideA2: number, offsetA: number, B: Float32Array, strideB1: number, strideB2: number, offsetB: number ): Float32Array;
}

/**
* Copies all or part of a matrix `A` to another matrix `B`.
*
* @param order - storage layout of `A` and `B`
* @param uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
* @param M - number of rows in matrix `A`
* @param N - number of columns in matrix `A`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param B - output matrix
* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @returns `B`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* slacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
* // B => <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( [ 0.0, 0.0, 99.0, 99.0, 99.0, 99.0 ] );
*
* slacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
* // B => <Float32Array>[ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ]
*/
declare var slacpy: Routine;


// EXPORTS //

export = slacpy;
