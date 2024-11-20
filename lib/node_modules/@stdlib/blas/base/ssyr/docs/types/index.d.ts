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

import { Layout, MatrixTriangle } from '@stdlib/types/blas';

/**
* Interface describing `ssyr`.
*/
interface Routine {
	/**
	* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - input vector
	* @param strideX - `x` stride length
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ssyr( 'row-major', 'upper', 3, 1.0, x, 1, A, 3 );
	* // A => <Float32Array>[ 2.0, 4.0, 6.0, 0.0, 5.0, 8.0, 0.0, 0.0, 10.0 ]
	*/
	( order: Layout, uplo: MatrixTriangle, N: number, alpha: number, x: Float32Array, strideX: number, A: Float32Array, LDA: number ): Float32Array;

	/**
	* Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - input vector
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param A - matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @returns `A`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ssyr.ndarray( 'upper', 3, 1.0, x, 1, 0, A, 3, 1, 0 );
	* // A => <Float32Array>[ 2.0, 4.0, 6.0, 0.0, 5.0, 8.0, 0.0, 0.0, 10.0 ]
	*/
	ndarray( uplo: MatrixTriangle, N: number, alpha: number, x: Float32Array, strideX: number, offsetX: number, A: Float32Array, strideA1: number, strideA2: number, offsetA: number ): Float32Array;
}

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
*
* @param order - storage layout
* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N - number of elements along each dimension in the matrix `A`
* @param alpha - scalar constant
* @param x - input vector
* @param strideX - `x` stride length
* @param A - matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @returns `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr( 'column-major', 'lower', 3, 2.0, x, 1, A, 3 );
* // y => <Float32Array>[ 3.0, 5.0, 7.0, 0.0, 10.0, 14.0, 0.0, 0.0, 21.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr.ndarray( 'lower', 3, 2.0, x, 1, 0, A, 3, 1, 0 );
* // y => <Float32Array>[ 3.0, 5.0, 7.0, 0.0, 10.0, 14.0, 0.0, 0.0, 21.0 ]
*/
declare var ssyr: Routine;


// EXPORTS //

export = ssyr;
