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
* Interface describing `gaxpb`.
*/
interface Routine {
	/**
	* Multiplies each element in a strided array by a scalar constant and adds a scalar constant to each result.
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
	* gaxpb( x.length, 5.0, 3.0, x, 1 );
	* // x => [ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
	*/
	<T extends InputArray>( N: number, alpha: number, beta: number, x: T, strideX: number ): T;

	/**
	* Multiplies each element in a strided array by a scalar constant and adds a scalar constant to each result using alternative indexing semantics.
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
	* gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0 );
	* // x => [ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
	*/
	ndarray<T extends InputArray>( N: number, alpha: number, beta: number, x: T, strideX: number, offsetX: number ): T;
}

/**
* Multiplies each element in a strided array by a scalar constant and adds a scalar constant to each result.
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
* gaxpb( x.length, 5.0, 3.0, x, 1 );
* // x => [ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0 );
* // x => [ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
*/
declare var gaxpb: Routine;


// EXPORTS //

export = gaxpb;
