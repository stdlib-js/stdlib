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

import { NumericArray, Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `gxsadb`.
*/
interface Routine {
	/**
	* Subtracts a scalar constant from each element in a strided array and divides each result by a scalar constant.
	*
	* @param N - number of indexed elements
	* @param alpha - first scalar constant
	* @param beta - second scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @returns input array
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* gxsadb( x.length, 3.0, 2.0, x, 1 );
	* // x => [ -2.5, -1.0, 0.0, -4.0, 0.5, -1.5, -2.0, -3.0 ]
	*/
	<T extends InputArray>( N: number, alpha: number, beta: number, x: T, strideX: number ): T;

	/**
	* Subtracts a scalar constant from each element in a strided array and divides each result by a scalar constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - first scalar constant
	* @param beta - second scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0 );
	* // x => [ -2.5, -1.0, 0.0, -4.0, 0.5, -1.5, -2.0, -3.0 ]
	*/
	ndarray<T extends InputArray>( N: number, alpha: number, beta: number, x: T, strideX: number, offsetX: number ): T;
}

/**
* Subtracts a scalar constant from each element in a strided array and divides each result by a scalar constant.
*
* @param N - number of indexed elements
* @param alpha - first scalar constant
* @param beta - second scalar constant
* @param x - input array
* @param strideX - stride length
* @returns `x`
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gxsadb( x.length, 3.0, 2.0, x, 1 );
* // x => [ -2.5, -1.0, 0.0, -4.0, 0.5, -1.5, -2.0, -3.0 ]
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0 );
* // x => [ -2.5, -1.0, 0.0, -4.0, 0.5, -1.5, -2.0, -3.0 ]
*/
declare var gxsadb: Routine;


// EXPORTS //

export = gxsadb;
