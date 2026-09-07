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
* Interface describing `gwhere`.
*/
interface Routine {
	/**
	* Takes elements from one of two strided arrays depending on a condition.
	*
	* @param N - number of indexed elements
	* @param condition - condition array
	* @param strideC - stride length for `condition`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var condition = [ 1, 0, 1 ];
	* var x = [ 1.0, 2.0, 3.0 ];
	* var y = [ 4.0, 5.0, 6.0 ];
	* var out = [ 0.0, 0.0, 0.0 ];
	*
	* gwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
	* // out => [ 1.0, 5.0, 3.0 ]
	*/
	<T = unknown, U = unknown, V = unknown, W extends OutputArray<U | V> = OutputArray<U | V>>( N: number, condition: InputArray<T>, strideC: number, x: InputArray<U>, strideX: number, y: InputArray<V>, strideY: number, out: W, strideOut: number ): W;

	/**
	* Takes elements from one of two strided arrays depending on a condition using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param condition - condition array
	* @param strideC - stride length for `condition`
	* @param offsetC - starting index for `condition`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var condition = [ 1, 0, 1 ];
	* var x = [ 1.0, 2.0, 3.0 ];
	* var y = [ 4.0, 5.0, 6.0 ];
	* var out = [ 0.0, 0.0, 0.0 ];
	*
	* gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	* // out => [ 1.0, 5.0, 3.0 ]
	*/
	ndarray<T = unknown, U = unknown, V = unknown, W extends OutputArray<U | V> = OutputArray<U | V>>( N: number, condition: InputArray<T>, strideC: number, offsetC: number, x: InputArray<U>, strideX: number, offsetX: number, y: InputArray<V>, strideY: number, offsetY: number, out: W, strideOut: number, offsetOut: number ): W;
}

/**
* Takes elements from one of two strided arrays depending on a condition.
*
* @param N - number of indexed elements
* @param condition - condition array
* @param strideC - stride length for `condition`
* @param x - first input array
* @param strideX - stride length for `x`
* @param y - second input array
* @param strideY - stride length for `y`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var condition = [ 1, 0, 1 ];
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 4.0, 5.0, 6.0 ];
* var out = [ 0.0, 0.0, 0.0 ];
*
* gwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
* // out => [ 1.0, 5.0, 3.0 ]
*
* @example
* var condition = [ 1, 0, 1 ];
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 4.0, 5.0, 6.0 ];
* var out = [ 0.0, 0.0, 0.0 ];
*
* gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
* // out => [ 1.0, 5.0, 3.0 ]
*/
declare var gwhere: Routine;


// EXPORTS //

export = gwhere;
