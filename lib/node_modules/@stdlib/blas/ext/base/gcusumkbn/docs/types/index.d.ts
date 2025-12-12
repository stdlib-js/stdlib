/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Output array.
*/
type OutputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `gcusumkbn`.
*/
interface Routine {
	/**
	* Computes the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* gcusumkbn( x.length, 0.0, x, 1, y, 1 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	<T extends OutputArray>( N: number, sum: number, x: InputArray, strideX: number, y: T, strideY: number ): T;

	/**
	* Computes the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* gcusumkbn.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	ndarray<T extends OutputArray>( N: number, sum: number, x: InputArray, strideX: number, offsetX: number, y: T, strideY: number, offsetY: number ): T;
}

/**
* Computes the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.
*
* @param N - number of indexed elements
* @param sum - initial sum
* @param x - input array
* @param strideX - stride length for `x`
* @param y - output array
* @param strideY - stride length for `y`
* @returns output array
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* gcusumkbn( x.length, 0.0, x, 1, y, 1 );
* // y => [ 1.0, -1.0, 1.0 ]
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* gcusumkbn.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
* // y => [ 1.0, -1.0, 1.0 ]
*/
declare var gcusumkbn: Routine;


// EXPORTS //

export = gcusumkbn;
