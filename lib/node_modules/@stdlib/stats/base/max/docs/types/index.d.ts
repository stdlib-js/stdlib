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
* Interface describing `max`.
*/
interface Routine {
	/**
	* Computes the maximum value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = max( x.length, x, 1 );
	* // returns 2.0
	*/
	( N: number, x: NumericArray, stride: number ): number;

	/**
	* Computes the maximum value of a strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = max.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	ndarray( N: number, x: NumericArray, stride: number, offset: number ): number; // tslint:disable-line:max-line-length
}

/**
* Computes the maximum value of a strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - stride length
* @returns maximum value
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = max( x.length, x, 1 );
* // returns 2.0
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = max.ndarray( x.length, x, 1, 0 );
* // returns 2.0
*/
declare var max: Routine;


// EXPORTS //

export = max;
