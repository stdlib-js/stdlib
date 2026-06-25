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
* Interface describing `gwxpy`.
*/
interface Routine {
	/**
	* Adds elements of a strided array `x` to the corresponding elements of a strided array `y` and assigns the results to elements in a strided array `w`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param w - output array
	* @param strideW - `w` stride length
	* @returns `w`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gwxpy( x.length, x, 1, y, 1, w, 1 );
	* // w => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*/
	<T extends InputArray, U extends InputArray, V extends InputArray>( N: number, x: T, strideX: number, y: U, strideY: number, w: V, strideW: number ): V;

	/**
	* Adds elements of a strided array `x` to the corresponding elements of a strided array `y` and assigns the results to elements in a strided array `w` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param w - output array
	* @param strideW - `w` stride length
	* @param offsetW - starting index for `w`
	* @returns `w`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	* // w => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*/
	ndarray<T extends InputArray, U extends InputArray, V extends InputArray>( N: number, x: T, strideX: number, offsetX: number, y: U, strideY: number, offsetY: number, w: V, strideW: number, offsetW: number ): V;
}

/**
* Adds elements of a strided array `x` to the corresponding elements of a strided array `y` and assigns the results to elements in a strided array `w`.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @param w - output array
* @param strideW - `w` stride length
* @returns `w`
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxpy( x.length, x, 1, y, 1, w, 1 );
* // w => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
declare var gwxpy: Routine;


// EXPORTS //

export = gwxpy;
