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
* Output array.
*/
type OutputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `gnannsumkbn`.
*/
interface Routine {
	/**
	* Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	* var out = [ 0.0, 0 ];
	*
	* var v = gnannsumkbn( x.length, x, 1, out, 1 );
	* // returns [ 1.0, 3 ]
	*/
	<T extends OutputArray>( N: number, x: InputArray, strideX: number, out: T, strideOut: number ): T;

	/**
	* Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	* var out = [ 0.0, 0 ];
	*
	* var v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );
	* // returns [ 1.0, 3 ]
	*/
	ndarray<T extends OutputArray>( N: number, x: InputArray, strideX: number, offsetX: number, out: T, strideOut: number, offsetOut: number ): T;
}

/**
* Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
* var out = [ 0.0, 0 ];
*
* var v = gnannsumkbn( x.length, x, 1, out, 1 );
* // returns [ 1.0, 3 ]
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
* var out = [ 0.0, 0 ];
*
* var v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );
* // returns [ 1.0, 3 ]
*/
declare var gnannsumkbn: Routine;


// EXPORTS //

export = gnannsumkbn;
