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
* Interface describing `gxmy`.
*/
interface Routine {
	/**
	* Multiplies elements of a strided array `x` by the corresponding elements of a strided array `y` and assigns the results to `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	*
	* gxmy( x.length, x, 1, y, 1 );
	* // y => [ 2.0, 6.0, 12.0, 20.0, 30.0 ]
	*/
	<T extends InputArray = InputArray>( N: number, x: InputArray, strideX: number, y: T, strideY: number ): T;

	/**
	* Multiplies elements of a strided array `x` by the corresponding elements of a strided array `y` and assigns the results to `y` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - output array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	*
	* gxmy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 2.0, 6.0, 12.0, 20.0, 30.0 ]
	*/
	ndarray<T extends InputArray = InputArray>( N: number, x: InputArray, strideX: number, offsetX: number, y: T, strideY: number, offsetY: number ): T;
}

/**
* Multiplies elements of a strided array `x` by the corresponding elements of a strided array `y` and assigns the results to `y`.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - output array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
*
* gxmy( x.length, x, 1, y, 1 );
* // y => [ 2.0, 6.0, 12.0, 20.0, 30.0 ]
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
*
* gxmy.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => [ 2.0, 6.0, 12.0, 20.0, 30.0 ]
*/
declare var gxmy: Routine;


// EXPORTS //

export = gxmy;
