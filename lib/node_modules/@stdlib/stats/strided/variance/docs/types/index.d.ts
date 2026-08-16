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
* Interface describing `variance`.
*/
interface Routine {
	/**
	* Computes the variance of a strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = variance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*/
	( N: number, correction: number, x: InputArray, strideX: number ): number;

	/**
	* Computes the variance of a strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = variance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	ndarray( N: number, correction: number, x: InputArray, strideX: number, offsetX: number ): number;
}

/**
* Computes the variance of a strided array.
*
* @param N - number of indexed elements
* @param correction - degrees of freedom adjustment
* @param x - input array
* @param strideX - stride length
* @returns variance
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = variance( x.length, 1, x, 1 );
* // returns ~4.3333
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = variance.ndarray( x.length, 1, x, 1, 0 );
* // returns ~4.3333
*/
declare var variance: Routine;


// EXPORTS //

export = variance;
