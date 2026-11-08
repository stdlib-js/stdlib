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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';
import { Layout } from '@stdlib/types/blas';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Output array.
*/
type OutputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface describing `gcartesianPower`.
*/
interface Routine {
	/**
	* Computes the Cartesian power for a strided array.
	*
	* ## Notes
	*
	* -   `k`-tuples are stored as rows in the output matrix, where the `j`-th column contains the `j`-th element of each tuple.
	*
	* @param order - storage layout
	* @param N - number of indexed elements
	* @param k - power
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
	* gcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 );
	* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
	*/
	<T = unknown, U extends OutputArray<T> = OutputArray<T>>( order: Layout, N: number, k: number, x: InputArray<T>, strideX: number, out: U, LDO: number ): U;

	/**
	* Computes the Cartesian power for a strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   `k`-tuples are stored as rows in the output matrix, where the `j`-th column contains the `j`-th element of each tuple.
	*
	* @param N - number of indexed elements
	* @param k - power
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
	* gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0 );
	* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
	*/
	ndarray<T = unknown, U extends OutputArray<T> = OutputArray<T>>( N: number, k: number, x: InputArray<T>, strideX: number, offsetX: number, out: U, strideOut1: number, strideOut2: number, offsetOut: number ): U;
}

/**
* Computes the Cartesian power for a strided array.
*
* @param order - storage layout
* @param N - number of indexed elements
* @param k - power
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
* gcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 );
* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*
* @example
* var x = [ 1.0, 2.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0 );
* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/
declare var gcartesianPower: Routine;


// EXPORTS //

export = gcartesianPower;
