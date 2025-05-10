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
* Interface describing `gsort2sh`.
*/
interface Routine {
	/**
	* Simultaneously sorts two strided arrays based on the sort order of the first array using Shellsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* gsort2sh( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*/
	<T extends InputArray>( N: number, order: number, x: InputArray, strideX: number, y: T, strideY: number ): T;

	/**
	* Simultaneously sorts two strided arrays based on the sort order of the first array using Shellsort and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* gsort2sh.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*/
	ndarray<T extends InputArray>( N: number, order: number, x: InputArray, strideX: number, offsetX: number, y: T, strideY: number, offsetY: number ): T;
}

/**
* Simultaneously sorts two strided arrays based on the sort order of the first array using Shellsort.
*
* @param N - number of indexed elements
* @param order - sort order
* @param x - first input array
* @param strideX - stride length for `x`
* @param y - second input array
* @param strideY - stride length for `y`
* @returns `x`
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
* var y = [ 0.0, 1.0, 2.0, 3.0 ];
*
* gsort2sh( x.length, 1, x, 1, y, 1 );
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
* gsort2sh.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => [ 3.0, 1.0, 0.0, 2.0 ]
*/
declare var gsort2sh: Routine;


// EXPORTS //

export = gsort2sh;
