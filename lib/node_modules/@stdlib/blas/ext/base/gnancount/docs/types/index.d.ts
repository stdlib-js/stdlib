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
* Interface describing `gnancount`.
*/
interface Routine {
	/**
	* Computes the number of non-`NaN` elements in a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns count
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = gnancount( x.length, x, 1 );
	* // returns 3
	*/
	( N: number, x: InputArray, strideX: number ): number;

	/**
	* Computes the number of non-`NaN` elements in a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns count
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = gnancount.ndarray( x.length, x, 1, 0 );
	* // returns 3
	*/
	ndarray( N: number, x: InputArray, strideX: number, offsetX: number ): number;
}

/**
* Computes the number of non-`NaN` elements in a strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns count
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = gnancount( x.length, x, 1 );
* // returns 3
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = gnancount.ndarray( x.length, x, 1, 0 );
* // returns 3
*/
declare var gnancount: Routine;


// EXPORTS //

export = gnancount;
