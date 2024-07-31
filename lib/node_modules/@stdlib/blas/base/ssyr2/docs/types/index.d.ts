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
* Interface describing `ssyr2`.
*/
interface Routine {
	/**
	* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ssyr2( 'row-major', 'upper', 3, 1.0, x, 1, y, 1, A, 3 );
	* // A => <Float32Array>[ 3.0, 6.0, 9.0, 0.0, 9.0, 14.0, 0.0, 0.0, 19.0 ]
	*/
	( order: Layout, uplo: MatrixTriangle, N: number, alpha: number, x: Float32Array, strideX: number, y: Float32Array, strideY: number, A: Float32Array, LDA: number ): Float32Array;

	/**
	* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
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
	* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ssyr2.ndarray( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
	* // A => <Float32Array>[ 3.0, 6.0, 9.0, 0.0, 9.0, 14.0, 0.0, 0.0, 19.0 ]
	*/
	ndarray( uplo: MatrixTriangle, N: number, alpha: number, x: Float32Array, strideX: number, offsetX: number, y: Float32Array, strideY: number, offsetY: number, A: Float32Array, strideA1: number, strideA2: number, offsetA: number ): Float32Array;
}

/**
* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
*
* @param order - storage layout
* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N - number of elements along each dimension in the matrix `A`
* @param alpha - scalar constant
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @param A - matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @returns `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 0.0, 0.0, 2.0, 1.0, 0.0, 3.0, 2.0, 1.0 ] );
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr2( 'column-major', 'upper', 3, 1.0, x, 1, y, 1, A, 3 );
* // A => <Float32Array>[ 3.0, 0.0, 0.0, 6.0, 9.0, 0.0, 9.0, 14.0, 19.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr2.ndarray( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A, 1, 3, 0 );
* // A => <Float32Array>[ 3.0, 0.0, 0.0, 6.0, 9.0, 0.0, 9.0, 14.0, 19.0 ]
*/
declare var ssyr2: Routine;


// EXPORTS //

export = ssyr2;
