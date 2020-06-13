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
* Interface describing `gfill`.
*/
interface Routine {
	/**
	* Fills a strided array with a specified scalar value.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* gfill( x.length, 5.0, x, 1 );
	* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	( N: number, alpha: number, x: NumericArray, stride: number ): NumericArray;

	/**
	* Fills a strided array with a specified scalar value using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* gfill.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	ndarray( N: number, alpha: number, x: NumericArray, stride: number, offset: number ): NumericArray; // tslint:disable-line:max-line-length
}

/**
* Fills a strided array with a specified scalar value.
*
* @param N - number of indexed elements
* @param alpha - constant
* @param x - input array
* @param stride - stride length
* @returns `x`
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gfill( x.length, 5.0, x, 1 );
* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gfill.ndarray( x.length, 5.0, x, 1, 0 );
* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
*/
declare var gfill: Routine;


// EXPORTS //

export = gfill;
