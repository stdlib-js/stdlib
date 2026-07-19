/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Interface describing `covarmtk`.
*/
interface Routine {
	/**
	* Computes the covariance of two strided arrays provided known means and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param meanx - mean of `x`
	* @param x - first input array
	* @param strideX - stride length of `x`
	* @param meany - mean of `y`
	* @param y - second input array
	* @param strideY - stride length of `y`
	* @returns covariance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 2.0, -2.0, 1.0 ];
	*
	* var v = covarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, y, 1 );
	* // returns ~3.8333
	*/
	( N: number, correction: number, meanx: number, x: InputArray, strideX: number, meany: number, y: InputArray, strideY: number ): number;

	/**
	* Computes the covariance of two strided arrays provided known means and using a one-pass textbook algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param meanx - mean of `x`
	* @param x - first input array
	* @param strideX - stride length of `x`
	* @param offsetX - starting index of `x`
	* @param meany - mean of `y`
	* @param y - second input array
	* @param strideY - stride length of `y`
	* @param offsetY - starting index of `y`
	* @returns covariance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 2.0, -2.0, 1.0 ];
	*
	* var v = covarmtk.ndarray( x.length, 1, 1.0/3.0, x, 1, 0, 1.0/3.0, y, 1, 0 );
	* // returns ~3.8333
	*/
	ndarray( N: number, correction: number, meanx: number, x: InputArray, strideX: number, offsetX: number, meany: number, y: InputArray, strideY: number, offsetY: number ): number;
}

/**
* Computes the covariance of two strided arrays provided known means and using a one-pass textbook algorithm.
*
* @param N - number of indexed elements
* @param correction - degrees of freedom adjustment
* @param meanx - mean of `x`
* @param x - first input array
* @param strideX - stride length of `x`
* @param meany - mean of `y`
* @param y - second input array
* @param strideY - stride length of `y`
* @returns covariance
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 2.0, -2.0, 1.0 ];
*
* var v = covarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, y, 1 );
* // returns ~3.8333
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 2.0, -2.0, 1.0 ];
*
* var v = covarmtk.ndarray( x.length, 1, 1.0/3.0, x, 1, 0, 1.0/3.0, y, 1, 0 );
* // returns ~3.8333
*/
declare var covarmtk: Routine;


// EXPORTS //

export = covarmtk;
