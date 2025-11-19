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
* Interface describing `nanrange`.
*/
interface Routine {
	/**
	* Computes the range of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = nanrange( x.length, x, 1 );
	* // returns 4.0
	*/
	( N: number, x: InputArray, strideX: number ): number;

	/**
	* Computes the range of a strided array, ignoring `NaN` values and using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offset - starting index
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = nanrange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	ndarray( N: number, x: InputArray, strideX: number, offset: number ): number;
}

/**
* Computes the range of a strided array, ignoring `NaN` values.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns range
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanrange( x.length, x, 1 );
* // returns 4.0
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanrange.ndarray( x.length, x, 1, 0 );
* // returns 4.0
*/
declare var nanrange: Routine;


// EXPORTS //

export = nanrange;
