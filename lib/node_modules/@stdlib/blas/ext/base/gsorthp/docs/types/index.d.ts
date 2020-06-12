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
* Interface describing `gsorthp`.
*/
interface Routine {
	/**
	* Sorts a strided array using heapsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param stride - stride length
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* gsorthp( x.length, 1, x, 1 );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	( N: number, order: number, x: NumericArray, stride: number ): NumericArray;

	/**
	* Sorts a strided array using heapsort and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* gsorthp.ndarray( x.length, 1, x, 1, 0 );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	ndarray( N: number, order: number, x: NumericArray, stride: number, offset: number ): NumericArray; // tslint:disable-line:max-line-length
}

/**
* Sorts a strided array using heapsort.
*
* @param N - number of indexed elements
* @param order - sort order
* @param x - input array
* @param stride - stride length
* @returns `x`
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* gsorthp( x.length, 1, x, 1 );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* gsorthp.ndarray( x.length, 1, x, 1, 0 );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*/
declare var gsorthp: Routine;


// EXPORTS //

export = gsorthp;
