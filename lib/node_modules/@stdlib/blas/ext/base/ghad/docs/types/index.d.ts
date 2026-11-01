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
* Interface describing `ghad`.
*/
interface Routine {
	/**
	* Multiplies the Hadamard product of strided arrays `x` and `y` by a constant and adds the result to a strided array `z` multiplied by a constant.
	*
	* @param N - number of indexed elements
	* @param alpha - first scalar constant
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param beta - second scalar constant
	* @param z - output array
	* @param strideZ - `z` stride length
	* @returns `z`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var z = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	*
	* ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, 1 );
	* // z => [ 7.0, 15.0, 27.0, 43.0, 63.0 ]
	*/
	<T extends InputArray = InputArray>( N: number, alpha: number, x: InputArray, strideX: number, y: InputArray, strideY: number, beta: number, z: T, strideZ: number ): T;

	/**
	* Multiplies the Hadamard product of strided arrays `x` and `y` by a constant and adds the result to a strided array `z` multiplied by a constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - first scalar constant
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param beta - second scalar constant
	* @param z - output array
	* @param strideZ - `z` stride length
	* @param offsetZ - starting index for `z`
	* @returns `z`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var z = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	*
	* ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 );
	* // z => [ 7.0, 15.0, 27.0, 43.0, 63.0 ]
	*/
	ndarray<T extends InputArray = InputArray>( N: number, alpha: number, x: InputArray, strideX: number, offsetX: number, y: InputArray, strideY: number, offsetY: number, beta: number, z: T, strideZ: number, offsetZ: number ): T;
}

/**
* Multiplies the Hadamard product of strided arrays `x` and `y` by a constant and adds the result to a strided array `z` multiplied by a constant.
*
* @param N - number of indexed elements
* @param alpha - first scalar constant
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @param beta - second scalar constant
* @param z - output array
* @param strideZ - `z` stride length
* @returns `z`
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var z = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
*
* ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, 1 );
* // z => [ 7.0, 15.0, 27.0, 43.0, 63.0 ]
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var z = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
*
* ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 );
* // z => [ 7.0, 15.0, 27.0, 43.0, 63.0 ]
*/
declare var ghad: Routine;


// EXPORTS //

export = ghad;
