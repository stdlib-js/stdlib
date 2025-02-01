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
import { Complex128Array } from '@stdlib/types/array';

/**
* Interface describing `zlacpy`.
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
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var B = new Complex128Array( 4 );
	*
	* zlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
	*
	* var z = B.get( 0 );
	* // returns <Complex128>
	*
	* var v = real( z );
	* // returns 1.0
	*
	* v = imag( z );
	* // returns 2.0
	*/
	( order: Layout, uplo: string, M: number, N: number, A: Complex128Array, LDA: number, B: Complex128Array, LDB: number ): Complex128Array;

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
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	* var B = new Complex128Array( 12 );
	*
	* zlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
	*
	* var z = B.get( 2 );
	* // returns <Complex128>
	*
	* var v = real( z );
	* // returns 3.0
	*
	* v = imag( z );
	* // returns 4.0
	*/
	ndarray( uplo: string, M: number, N: number, A: Complex128Array, strideA1: number, strideA2: number, offsetA: number, B: Complex128Array, strideB1: number, strideB2: number, offsetB: number ): Complex128Array;
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
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Complex128Array( 4 );
*
* zlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
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
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex128Array( 12 );
*
* zlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 3.0
*
* v = imag( z );
* // returns 4.0
*/
declare var zlacpy: Routine;


// EXPORTS //

export = zlacpy;
