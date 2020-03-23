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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { NumericArray } from '@stdlib/types/array';

/**
* Interface describing `gswap`.
*/
interface Routine {
	/**
	* Interchanges vectors `x` and `y`.
	*
	* @param N - number of values to swap
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* gswap( x.length, x, 1, y, 1 );
	* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	( N: number, x: NumericArray, strideX: number, y: NumericArray, strideY: number ): NumericArray; // tslint:disable-line:max-line-length

	/**
	* Interchanges vectors `x` and `y` using alternative indexing semantics.
	*
	* @param N - number of values to swap
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* gswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	ndarray( N: number, x: NumericArray, strideX: number, offsetX: number, y: NumericArray, strideY: number, offsetY: number ): NumericArray; // tslint:disable-line:max-line-length
}

/**
* Interchanges vectors `x` and `y`.
*
* @param N - number of values to swap
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
*
* gswap( x.length, x, 1, y, 1 );
* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
*
* gswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
declare var gswap: Routine;


// EXPORTS //

export = gswap;
