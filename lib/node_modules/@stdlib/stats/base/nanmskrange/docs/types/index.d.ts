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
* Interface describing `nanmskrange`.
*/
interface Routine {
	/**
	* Computes the range of a strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = nanmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*/
	( N: number, x: InputArray, strideX: number, mask: InputArray, strideMask: number ): number;

	/**
	* Computes the range of a strided array according to a mask, ignoring `NaN` values and using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - `x` starting index
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @param offsetMask - `mask` starting index
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = nanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	ndarray( N: number, x: InputArray, strideX: number, offsetX: number, mask: InputArray, strideMask: number, offsetMask: number ): number;
}

/**
* Computes the range of a strided array according to a mask, ignoring `NaN` values.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param mask - mask array
* @param strideMask - stride length for `x`
* @returns range
*
* @example
* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
* var mask = [ 0, 0, 1, 0, 0 ];
*
* var v = nanmskrange( x.length, x, 1, mask, 1 );
* // returns 4.0
*
* @example
* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
* var mask = [ 0, 0, 1, 0, 0 ];
*
* var v = nanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
* // returns 4.0
*/
declare var nanmskrange: Routine;


// EXPORTS //

export = nanmskrange;
