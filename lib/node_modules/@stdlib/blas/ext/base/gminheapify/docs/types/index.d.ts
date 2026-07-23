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
* Interface describing `gminheapify`.
*/
interface Routine {
	/**
	* Converts a strided array to a min-heap.
	*
	* ## Notes
	*
	* -   The min-heap algorithm is sensitive to the presence of `NaN` values. Since `NaN` comparisons always return `false`, if `NaN` values are present in the input array, the results may be unpredictable.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	*
	* gminheapify( 5, x, 1 );
	* // x => [ 1.0, 5.0, 3.0, 7.0, 9.0 ]
	*/
	<T extends InputArray = InputArray>( N: number, x: T, strideX: number ): T;

	/**
	* Converts a strided array to a min-heap using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   The min-heap algorithm is sensitive to the presence of `NaN` values. Since `NaN` comparisons always return `false`, if `NaN` values are present in the input array, the results may be unpredictable.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	*
	* gminheapify.ndarray( 5, x, 1, 0 );
	* // x => [ 1.0, 5.0, 3.0, 7.0, 9.0 ]
	*/
	ndarray<T extends InputArray = InputArray>( N: number, x: T, strideX: number, offsetX: number ): T;
}

/**
* Converts a strided array to a min-heap.
*
* ## Notes
*
* -   The min-heap algorithm is sensitive to the presence of `NaN` values. Since `NaN` comparisons always return `false`, if `NaN` values are present in the input array, the results may be unpredictable.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
*
* gminheapify( 5, x, 1 );
* // x => [ 1.0, 5.0, 3.0, 7.0, 9.0 ]
*
* @example
* var x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
*
* gminheapify.ndarray( 5, x, 1, 0 );
* // x => [ 1.0, 5.0, 3.0, 7.0, 9.0 ]
*/
declare var gminheapify: Routine;


// EXPORTS //

export = gminheapify;
