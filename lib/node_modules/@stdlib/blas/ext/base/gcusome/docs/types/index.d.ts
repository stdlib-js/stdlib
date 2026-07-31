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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Output array.
*/
type OutputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface describing `gcusome`.
*/
interface Routine {
	/**
	* Cumulatively tests whether at least `k` elements in a strided array are truthy.
	*
	* @param N - number of indexed elements
	* @param k - minimum number of truthy elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var x = [ 0, 0, 1, 1, 1 ];
	* var out = [ false, false, false, false, false ];
	*
	* gcusome( x.length, 2, x, 1, out, 1 );
	* // out => [ false, false, false, true, true ]
	*/
	<T = unknown, U extends OutputArray<T> = OutputArray<T>>( N: number, k: number, x: InputArray<unknown>, strideX: number, out: U, strideOut: number ): U;

	/**
	* Cumulatively tests whether at least `k` elements in a strided array are truthy using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param k - minimum number of truthy elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var x = [ 0, 0, 1, 1, 1 ];
	* var out = [ false, false, false, false, false ];
	*
	* gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
	* // out => [ false, false, false, true, true ]
	*/
	ndarray<T = unknown, U extends OutputArray<T> = OutputArray<T>>( N: number, k: number, x: InputArray<unknown>, strideX: number, offsetX: number, out: U, strideOut: number, offsetOut: number ): U;
}

/**
* Cumulatively tests whether at least `k` elements in a strided array are truthy.
*
* @param N - number of indexed elements
* @param k - minimum number of truthy elements
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var x = [ 0, 0, 1, 1, 1 ];
* var out = [ false, false, false, false, false ];
*
* gcusome( x.length, 2, x, 1, out, 1 );
* // out => [ false, false, false, true, true ]
*
* @example
* var x = [ 0, 0, 1, 1, 1 ];
* var out = [ false, false, false, false, false ];
*
* gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
* // out => [ false, false, false, true, true ]
*/
declare var gcusome: Routine;


// EXPORTS //

export = gcusome;
