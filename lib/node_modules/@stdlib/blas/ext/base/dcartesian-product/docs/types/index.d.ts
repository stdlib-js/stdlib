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
* Interface describing `dcartesianProduct`.
*/
interface Routine {
	/**
	* Computes the Cartesian product for two double-precision floating-point strided arrays.
	*
	* ## Notes
	*
	* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
	*
	* @param order - storage layout
	* @param M - number of indexed elements in `x`
	* @param N - number of indexed elements in `y`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param out - output array
	* @param LDO - stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`)
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, 2.0 ] );
	* var y = new Float64Array( [ 3.0, 4.0 ] );
	* var out = new Float64Array( 8 );
	*
	* dcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );
	* // out => <Float64Array>[ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ]
	*/
	( order: Layout, M: number, N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number, out: Float64Array, LDO: number ): Float64Array;

	/**
	* Computes the Cartesian product for two double-precision floating-point strided arrays using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
	*
	* @param M - number of indexed elements in `x`
	* @param N - number of indexed elements in `y`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @param out - output array
	* @param strideOut1 - stride length for the first dimension of `out`
	* @param strideOut2 - stride length for the second dimension of `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, 2.0 ] );
	* var y = new Float64Array( [ 3.0, 4.0 ] );
	* var out = new Float64Array( 8 );
	*
	* dcartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	* // out => <Float64Array>[ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ]
	*/
	ndarray( M: number, N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number, out: Float64Array, strideOut1: number, strideOut2: number, offsetOut: number ): Float64Array;
}

/**
* Computes the Cartesian product for two double-precision floating-point strided arrays.
*
* ## Notes
*
* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
*
* @param order - storage layout
* @param M - number of indexed elements in `x`
* @param N - number of indexed elements in `y`
* @param x - first input array
* @param strideX - stride length for `x`
* @param y - second input array
* @param strideY - stride length for `y`
* @param out - output array
* @param LDO - stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`)
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, 2.0 ] );
* var y = new Float64Array( [ 3.0, 4.0 ] );
* var out = new Float64Array( 8 );
*
* dcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );
* // out => <Float64Array>[ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, 2.0 ] );
* var y = new Float64Array( [ 3.0, 4.0 ] );
* var out = new Float64Array( 8 );
*
* dcartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
* // out => <Float64Array>[ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ]
*/
declare var dcartesianProduct: Routine;


// EXPORTS //

export = dcartesianProduct;
