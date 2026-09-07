/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Interface describing `dvander`.
*/
interface Routine {
	/**
	* Generates a double-precision floating-point Vandermonde matrix.
	*
	* @param order - storage layout
	* @param mode - mode indicating whether to generate increasing or decreasing powers
	* @param M - number of rows in `out`
	* @param N - number of columns in `out`
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output matrix
	* @param ldo - stride between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of the matrix `out`)
	* @returns output matrix
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var out = new Float64Array( 9 );
	*
	* dvander( 'row-major', -1, 3, 3, x, 1, out, 3 );
	* // out => <Float64Array>[ 1.0, 1.0, 1.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ]
	*/
	( order: Layout, mode: number, M: number, N: number, x: Float64Array, strideX: number, out: Float64Array, ldo: number ): Float64Array;

	/**
	* Generates a double-precision floating-point Vandermonde matrix using alternative indexing semantics.
	*
	* @param mode - mode indicating whether to generate increasing or decreasing powers
	* @param M - number of rows in `out`
	* @param N - number of columns in `out`
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output matrix
	* @param strideOut1 - stride length for the first dimension of `out`
	* @param strideOut2 - stride length for the second dimension of `out`
	* @param offsetOut - starting index for `out`
	* @returns output matrix
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var out = new Float64Array( 9 );
	*
	* dvander.ndarray( -1, 3, 3, x, 1, 0, out, 3, 1, 0 );
	* // out => <Float64Array>[ 1.0, 1.0, 1.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ]
	*/
	ndarray( mode: number, M: number, N: number, x: Float64Array, strideX: number, offsetX: number, out: Float64Array, strideOut1: number, strideOut2: number, offsetOut: number ): Float64Array;
}

/**
* Generates a double-precision floating-point Vandermonde matrix.
*
* @param order - storage layout
* @param mode - mode indicating whether to generate increasing or decreasing powers
* @param M - number of rows in `out`
* @param N - number of columns in `out`
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output matrix
* @param ldo - stride between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of the matrix `out`)
* @returns output matrix
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var out = new Float64Array( 9 );
*
* dvander( 'row-major', -1, 3, 3, x, 1, out, 3 );
* // out => <Float64Array>[ 1.0, 1.0, 1.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var out = new Float64Array( 9 );
*
* dvander.ndarray( -1, 3, 3, x, 1, 0, out, 3, 1, 0 );
* // out => <Float64Array>[ 1.0, 1.0, 1.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ]
*/
declare var dvander: Routine;


// EXPORTS //

export = dvander;
