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
* Interface describing `gcuevery`.
*/
interface Routine {
	/**
	* Cumulatively tests whether every element in a strided array is truthy.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var x = [ 1, 1, 0, 0 ];
	* var out = [ false, false, false, false ];
	*
	* gcuevery( x.length, x, 1, out, 1 );
	* // out => [ true, true, false, false ]
	*/
	<T = unknown, U extends OutputArray<T> = OutputArray<T>>( N: number, x: InputArray<unknown>, strideX: number, out: U, strideOut: number ): U;

	/**
	* Cumulatively tests whether every element in a strided array is truthy using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var x = [ 1, 1, 0, 0 ];
	* var out = [ false, false, false, false ];
	*
	* gcuevery.ndarray( x.length, x, 1, 0, out, 1, 0 );
	* // out => [ true, true, false, false ]
	*/
	ndarray<T = unknown, U extends OutputArray<T> = OutputArray<T>>( N: number, x: InputArray<unknown>, strideX: number, offsetX: number, out: U, strideOut: number, offsetOut: number ): U;
}

/**
* Cumulatively tests whether every element in a strided array is truthy.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var x = [ 1, 1, 0, 0 ];
* var out = [ false, false, false, false ];
*
* gcuevery( x.length, x, 1, out, 1 );
* // out => [ true, true, false, false ]
*
* @example
* var x = [ 1, 1, 0, 0 ];
* var out = [ false, false, false, false ];
*
* gcuevery.ndarray( x.length, x, 1, 0, out, 1, 0 );
* // out => [ true, true, false, false ]
*/
declare var gcuevery: Routine;


// EXPORTS //

export = gcuevery;
