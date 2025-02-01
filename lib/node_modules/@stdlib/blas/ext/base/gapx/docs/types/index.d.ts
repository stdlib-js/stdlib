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

import { NumericArray } from '@stdlib/types/array';

/**
* Interface describing `gapx`.
*/
interface Routine {
	/**
	* Adds a scalar constant to each element in a strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* gapx( x.length, 5.0, x, 1 );
	* // x => [ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*/
	( N: number, alpha: number, x: NumericArray, strideX: number ): NumericArray;

	/**
	* Adds a scalar constant to each element in a strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* gapx.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => [ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*/
	ndarray( N: number, alpha: number, x: NumericArray, strideX: number, offsetX: number ): NumericArray;
}

/**
* Adds a scalar constant to each element in a strided array.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - stride length
* @returns `x`
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gapx( x.length, 5.0, x, 1 );
* // x => [ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gapx.ndarray( x.length, 5.0, x, 1, 0 );
* // x => [ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
*/
declare var gapx: Routine;


// EXPORTS //

export = gapx;
