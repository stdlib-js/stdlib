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
* Interface describing `gwxsa`.
*/
interface Routine {
	/**
	* Subtracts a scalar constant from each element in a strided array `x` and assigns the results to a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gwxsa( x.length, 5.0, x, 1, y, 1 );
	* // y => [ -7.0, -4.0, -2.0, -10.0, -1.0, -5.0, -6.0, -8.0 ]
	*/
	<T extends InputArray, U extends InputArray>( N: number, alpha: number, x: T, strideX: number, y: U, strideY: number ): U;

	/**
	* Subtracts a scalar constant from each element in a strided array `x` and assigns the results to a strided array `y` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - output array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gwxsa.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => [ -7.0, -4.0, -2.0, -10.0, -1.0, -5.0, -6.0, -8.0 ]
	*/
	ndarray<T extends InputArray, U extends InputArray>( N: number, alpha: number, x: T, strideX: number, offsetX: number, y: U, strideY: number, offsetY: number ): U;
}

/**
* Subtracts a scalar constant from each element in a strided array `x` and assigns the results to a strided array `y`.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - `x` stride length
* @param y - output array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxsa( x.length, 5.0, x, 1, y, 1 );
* // y => [ -7.0, -4.0, -2.0, -10.0, -1.0, -5.0, -6.0, -8.0 ]
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxsa.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
* // y => [ -7.0, -4.0, -2.0, -10.0, -1.0, -5.0, -6.0, -8.0 ]
*/
declare var gwxsa: Routine;


// EXPORTS //

export = gwxsa;
