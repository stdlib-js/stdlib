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
* Interface describing `gapxsum`.
*/
interface Routine {
	/**
	* Adds a scalar constant to each strided array element and computes the sum.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = gapxsum( x.length, 5.0, x, 1 );
	* // returns 16.0
	*/
	( N: number, alpha: number, x: InputArray, strideX: number ): number;

	/**
	* Adds a scalar constant to each strided array element and computes the sum using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = gapxsum.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	ndarray( N: number, alpha: number, x: InputArray, strideX: number, offsetX: number ): number;
}

/**
* Adds a scalar constant to each strided array element and computes the sum.
*
* @param N - number of indexed elements
* @param alpha - constant
* @param x - input array
* @param strideX - stride length
* @returns sum
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = gapxsum( x.length, 5.0, x, 1 );
* // returns 16.0
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = gapxsum.ndarray( x.length, 5.0, x, 1, 0 );
* // returns 16.0
*/
declare var gapxsum: Routine;


// EXPORTS //

export = gapxsum;
