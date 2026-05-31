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
* Interface describing `gaxpby`.
*/
interface Routine {
	/**
	* Multiplies a strided array `x` by a constant and adds the result to a strided array `y` multiplied by a constant.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant for `x`
	* @param x - input array
	* @param strideX - `x` stride length
	* @param beta - scalar constant for `y`
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	*
	* gaxpby( x.length, 5.0, x, 1, 2.0, y, 1 );
	* // y => [ 9.0, 16.0, 23.0, 30.0, 37.0 ]
	*/
	<T extends InputArray, U extends InputArray>( N: number, alpha: number, x: T, strideX: number, beta: number, y: U, strideY: number ): U;

	/**
	* Multiplies a strided array `x` by a constant and adds the result to a strided array `y` multiplied by a constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant for `x`
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param beta - scalar constant for `y`
	* @param y - output array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	*
	* gaxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 );
	* // y => [ 9.0, 16.0, 23.0, 30.0, 37.0 ]
	*/
	ndarray<T extends InputArray, U extends InputArray>( N: number, alpha: number, x: T, strideX: number, offsetX: number, beta: number, y: U, strideY: number, offsetY: number ): U;
}

/**
* Multiplies a strided array `x` by a constant and adds the result to a strided array `y` multiplied by a constant.
*
* @param N - number of indexed elements
* @param alpha - scalar constant for `x`
* @param x - input array
* @param strideX - `x` stride length
* @param beta - scalar constant for `y`
* @param y - output array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
*
* gaxpby( x.length, 5.0, x, 1, 2.0, y, 1 );
* // y => [ 9.0, 16.0, 23.0, 30.0, 37.0 ]
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
*
* gaxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 );
* // y => [ 9.0, 16.0, 23.0, 30.0, 37.0 ]
*/
declare var gaxpby: Routine;


// EXPORTS //

export = gaxpby;
