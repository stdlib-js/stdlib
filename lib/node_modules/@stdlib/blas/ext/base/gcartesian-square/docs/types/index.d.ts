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
import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Output array.
*/
type OutputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface describing `gcartesianSquare`.
*/
interface Routine {
	/**
	* Computes the Cartesian square for a strided array.
	*
	* @param order - storage layout
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array
	* @param LDO - stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`)
	* @returns output array
	*
	* @example
	* var x = [ 1.0, 2.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gcartesianSquare( 'row-major', x.length, x, 1, out, 2 );
	* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
	*/
	<T = unknown, U extends OutputArray<T> = OutputArray<T>>( order: Layout, N: number, x: InputArray<T>, strideX: number, out: U, LDO: number ): U;

	/**
	* Computes the Cartesian square for a strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array
	* @param strideOut1 - stride length for the first dimension of `out`
	* @param strideOut2 - stride length for the second dimension of `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, 2.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gcartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, 0 );
	* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
	*/
	ndarray<T = unknown, U extends OutputArray<T> = OutputArray<T>>( N: number, x: InputArray<T>, strideX: number, offsetX: number, out: U, strideOut1: number, strideOut2: number, offsetOut: number ): U;
}

/**
* Computes the Cartesian square for a strided array.
*
* @param order - storage layout
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array
* @param LDO - stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`)
* @returns output array
*
* @example
* var x = [ 1.0, 2.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcartesianSquare( 'row-major', x.length, x, 1, out, 2 );
* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*
* @example
* var x = [ 1.0, 2.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, 0 );
* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/
declare var gcartesianSquare: Routine;


// EXPORTS //

export = gcartesianSquare;
