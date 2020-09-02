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
* Interface describing `gsort2hp`.
*/
interface Routine {
	/**
	* Simultaneously sorts two strided arrays based on the sort order of the first array using heapsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* gsort2hp( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*/
	( N: number, order: number, x: NumericArray, strideX: number, y: NumericArray, strideY: number ): NumericArray; // tslint:disable-line:max-line-length

	/**
	* Simultaneously sorts two strided arrays based on the sort order of the first array using heapsort and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - `x` starting index
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - `y` starting index
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* gsort2hp.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*/
	ndarray( N: number, order: number, x: NumericArray, strideX: number, offsetX: number, y: NumericArray, strideY: number, offsetY: number ): NumericArray; // tslint:disable-line:max-line-length
}

/**
* Simultaneously sorts two strided arrays based on the sort order of the first array using heapsort.
*
* @param N - number of indexed elements
* @param order - sort order
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @returns `x`
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
* var y = [ 0.0, 1.0, 2.0, 3.0 ];
*
* gsort2hp( x.length, 1, x, 1, y, 1 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => [ 3.0, 1.0, 0.0, 2.0 ]
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
* var y = [ 0.0, 1.0, 2.0, 3.0 ];
*
* gsort2hp.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => [ 3.0, 1.0, 0.0, 2.0 ]
*/
declare var gsort2hp: Routine;


// EXPORTS //

export = gsort2hp;
