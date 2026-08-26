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

/**
* Input array.
*/
type InputArray = Collection<unknown> | AccessorArrayLike<unknown>;

/**
* Interface describing `gfirstIndexNotEqual`.
*/
interface Routine {
	/**
	* Returns the index of the first element in a strided array which is not equal to the corresponding element in another strided array.
	*
	* ## Notes
	*
	* -   If unable to find an element in `x` which is not equal to the corresponding element in `y`, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @returns index
	*
	* @example
	* var x = [ 0, 0, 1, 0 ];
	* var y = [ 0, 0, 0, 0 ];
	*
	* var idx = gfirstIndexNotEqual( x.length, x, 1, y, 1 );
	* // returns 2
	*/
	( N: number, x: InputArray, strideX: number, y: InputArray, strideY: number ): number;

	/**
	* Returns the index of the first element in a strided array which is not equal to the corresponding element in another strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If unable to find an element in `x` which is not equal to the corresponding element in `y`, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @returns index
	*
	* @example
	* var x = [ 0, 0, 1, 0 ];
	* var y = [ 0, 0, 0, 0 ];
	*
	* var idx = gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns 2
	*/
	ndarray( N: number, x: InputArray, strideX: number, offsetX: number, y: InputArray, strideY: number, offsetY: number ): number;
}

/**
* Returns the index of the first element in a strided array which is not equal to the corresponding element in another strided array.
*
* ## Notes
*
* -   If unable to find an element in `x` which is not equal to the corresponding element in `y`, the function returns `-1`.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - stride length for `x`
* @param y - second input array
* @param strideY - stride length for `y`
* @returns index
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 0, 0 ];
*
* var idx = gfirstIndexNotEqual( x.length, x, 1, y, 1 );
* // returns 2
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 0, 0 ];
*
* var idx = gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns 2
*/
declare var gfirstIndexNotEqual: Routine;


// EXPORTS //

export = gfirstIndexNotEqual;
