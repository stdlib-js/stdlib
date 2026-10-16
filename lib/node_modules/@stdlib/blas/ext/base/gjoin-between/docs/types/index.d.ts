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
type InputArray = Collection<unknown> | AccessorArrayLike<unknown>;

/**
* Interface describing `gjoinBetween`.
*/
interface Routine {
	/**
	* Returns a string by joining strided array elements using a specified separator for each pair of consecutive elements.
	*
	* @param N - number of indexed elements
	* @param prefix - string to prepend to the output string
	* @param suffix - string to append to the output string
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param separators - separators array
	* @param strideS - stride length for `separators`
	* @returns joined string
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var sep = [ ' + ', ' - ', ' != ' ];
	*
	* var str = gjoinBetween( x.length, 'op: ', '', x, 1, sep, 1 );
	* // returns 'op: 1 + 2 - 3 != 4'
	*/
	( N: number, prefix: string, suffix: string, x: InputArray, strideX: number, separators: Collection<string>, strideS: number ): string;

	/**
	* Returns a string by joining strided array elements using a specified separator for each pair of consecutive elements and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param prefix - string to prepend to the output string
	* @param suffix - string to append to the output string
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param separators - separators array
	* @param strideS - stride length for `separators`
	* @param offsetS - starting index for `separators`
	* @returns joined string
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var sep = [ ' + ', ' - ', ' != ' ];
	*
	* var str = gjoinBetween.ndarray( x.length, 'op: ', '', x, 1, 0, sep, 1, 0 );
	* // returns 'op: 1 + 2 - 3 != 4'
	*/
	ndarray( N: number, prefix: string, suffix: string, x: InputArray, strideX: number, offsetX: number, separators: Collection<string>, strideS: number, offsetS: number ): string;
}

/**
* Returns a string by joining strided array elements using a specified separator for each pair of consecutive elements.
*
* @param N - number of indexed elements
* @param prefix - string to prepend to the output string
* @param suffix - string to append to the output string
* @param x - input array
* @param strideX - stride length for `x`
* @param separators - separators array
* @param strideS - stride length for `separators`
* @returns joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var sep = [ ' + ', ' - ', ' != ' ];
*
* var str = gjoinBetween( x.length, 'op: ', '', x, 1, sep, 1 );
* // returns 'op: 1 + 2 - 3 != 4'
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var sep = [ ' + ', ' - ', ' != ' ];
*
* var str = gjoinBetween.ndarray( x.length, 'op: ', '', x, 1, 0, sep, 1, 0 );
* // returns 'op: 1 + 2 - 3 != 4'
*/
declare var gjoinBetween: Routine;


// EXPORTS //

export = gjoinBetween;
