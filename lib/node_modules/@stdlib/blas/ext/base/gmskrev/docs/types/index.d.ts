/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { Collection } from '@stdlib/types/array';

/**
* Interface describing `gmskrev`.
*/
interface Routine {
	/**
	* Reverses a strided array in-place according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns input array
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	* var mask = [ 0, 0, 0, 1, 0, 0, 0, 0 ];
	*
	* gmskrev( x.length, x, 1, mask, 1 );
	* // x => [ -3.0, -1.0, 0.0, -5.0, 4.0, 3.0, 1.0, -2.0 ]
	*/
	<T = unknown, U extends Collection<T> = Collection<T>>( N: number, x: U, strideX: number, mask: Collection<number>, strideMask: number ): U;

	/**
	* Reverses a strided array in-place according to a mask and using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @param offsetMask - starting index for `mask`
	* @returns input array
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	* var mask = [ 0, 0, 0, 1, 0, 0, 0, 0 ];
	*
	* gmskrev.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // x => [ -3.0, -1.0, 0.0, -5.0, 4.0, 3.0, 1.0, -2.0 ]
	*/
	ndarray<T = unknown, U extends Collection<T> = Collection<T>>( N: number, x: U, strideX: number, offsetX: number, mask: Collection<number>, strideMask: number, offsetMask: number ): U;
}

/**
* Reverses a strided array in-place according to a mask.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param mask - mask array
* @param strideMask - stride length for `mask`
* @returns input array
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
* var mask = [ 0, 0, 0, 1, 0, 0, 0, 0 ];
*
* gmskrev( x.length, x, 1, mask, 1 );
* // x => [ -3.0, -1.0, 0.0, -5.0, 4.0, 3.0, 1.0, -2.0 ]
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
* var mask = [ 0, 0, 0, 1, 0, 0, 0, 0 ];
*
* gmskrev.ndarray( x.length, x, 1, 0, mask, 1, 0 );
* // x => [ -3.0, -1.0, 0.0, -5.0, 4.0, 3.0, 1.0, -2.0 ]
*/
declare var gmskrev: Routine;


// EXPORTS //

export = gmskrev;
