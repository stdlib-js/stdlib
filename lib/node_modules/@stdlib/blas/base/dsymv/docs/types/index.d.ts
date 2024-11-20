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
* Interface describing `dsymv`.
*/
interface Routine {
	/**
	* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is to be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param beta - scalar constant
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	*
	* dsymv( 'row-major', 'lower', 3, 1.0, A, 3, x, 1, 0.0, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0 ]
	*/
	( order: Layout, uplo: MatrixTriangle, N: number, alpha: number, A: Float64Array, LDA: number, x: Float64Array, strideX: number, beta: number, y: Float64Array, strideY: number ): Float64Array;

	/**
	* Performs the matrix-vector operation `y = alpha*A*x + beta*y` using alternative indexing semantics and where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting `x` index
	* @param beta - scalar constant
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting `y` index
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	*
	* dsymv.ndarray( 'row-major', 'lower', 3, 1.0, A, 3, x, 1, 0, 0.0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0 ]
	*/
	ndarray( order: Layout, uplo: MatrixTriangle, N: number, alpha: number, A: Float64Array, LDA: number, x: Float64Array, strideX: number, offsetX: number, beta: number, y: Float64Array, strideY: number, offsetY: number ): Float64Array;
}

/**
* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
*
* @param order - storage layout
* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is to be referenced
* @param N - number of elements along each dimension in the matrix `A`
* @param alpha - scalar constant
* @param A - matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param x - first input array
* @param strideX - `x` stride length
* @param beta - scalar constant
* @param y - second input array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* dsymv( 'row-major', 'upper', 3, 2.0, A, 3, x, 1, 1.0, y, 2 );
* // y => <Float64Array>[ 3.0, 2.0, 11.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* dsymv.ndarray( 'row-major', 'upper', 3, 2.0, A, 3, x, 1, 0, 1.0, y, 2, 0 );
* // y => <Float64Array>[ 3.0, 2.0, 11.0 ]
*/
declare var dsymv: Routine;


// EXPORTS //

export = dsymv;
