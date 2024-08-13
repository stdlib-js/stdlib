/**
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
* Interface describing `dgetrans`.
*/
interface Routine {
	/**
	* Converts a matrix from row-major layout to column-major layout or vice versa.
	*
	* @param order - storage layout
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param out - output matrix
	* @param LDO - stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`)
	* @returns `out`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var out = new Float64Array( 6 );
	*
	* out = dgetrans( 'row-major', 2, 3, A, 3, out, 2 );
	* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
	*/
	( order: Layout, M: number, N: number, A: Float64Array, LDA: number, out: Float64Array, LDO: number ): Float64Array;

	/**
	* Converts a matrix from row-major layout to column-major layout or vice versa using alternative indexing semantics.
	*
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @param out - output matrix
	* @param strideO1 - stride of the first dimension of `out`
	* @param strideO2 - stride of the second dimension of `out`
	* @param offsetO - starting index for `out`
	* @returns `out`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var out = new Float64Array( 6 );
	*
	* out = dgetrans.ndarray( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
	* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
	*/
	ndarray( M: number, N: number, A: Float64Array, strideA1: number, strideA2: number, offsetA: number, out: Float64Array, strideO1: number, strideO2: number, offsetO: number ): Float64Array;
}

/**
* Converts a matrix from row-major layout to column-major layout or vice versa.
*
* @param order - storage layout
* @param M - number of rows in matrix `A`
* @param N - number of columns in matrix `A`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param out - output matrix
* @param LDO - stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`)
* @returns `out`
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Float64Array( 6 );
*
* out = dgetrans( 'row-major', 2, 3, A, 3, out, 2 );
* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Float64Array( 6 );
*
* out = dgetrans.ndarray( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*/
declare var dgetrans: Routine;


// EXPORTS //

export = dgetrans;
