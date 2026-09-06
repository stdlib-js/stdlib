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
* Interface describing `gconjoin`.
*/
interface Routine {
	/**
	* Returns a string created by joining strided array elements into a human-readable list using a conjunction.
	*
	* @param N - number of indexed elements
	* @param prefix - string to prepend
	* @param suffix - string to append
	* @param conjunction - conjunction before the last element
	* @param oxfordComma - boolean specifying whether to include an Oxford comma
	* @param x - input array
	* @param strideX - stride length
	* @returns joined string
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var str = gconjoin( x.length, '', '', 'and', true, x, 1 );
	* // returns '1, 2, 3, and 4'
	*/
	( N: number, prefix: string, suffix: string, conjunction: string, oxfordComma: boolean, x: InputArray, strideX: number ): string;

	/**
	* Returns a string created by joining strided array elements into a human-readable list using a conjunction and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param prefix - string to prepend
	* @param suffix - string to append
	* @param conjunction - conjunction before the last element
	* @param oxfordComma - boolean specifying whether to include an Oxford comma
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns joined string
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var str = gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, 0 );
	* // returns '1, 2, 3, and 4'
	*/
	ndarray( N: number, prefix: string, suffix: string, conjunction: string, oxfordComma: boolean, x: InputArray, strideX: number, offsetX: number ): string;
}

/**
* Returns a string created by joining strided array elements into a human-readable list using a conjunction.
*
* @param N - number of indexed elements
* @param prefix - string to prepend
* @param suffix - string to append
* @param conjunction - conjunction before the last element
* @param oxfordComma - boolean specifying whether to include an Oxford comma
* @param x - input array
* @param strideX - stride length
* @returns joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var str = gconjoin( x.length, '', '', 'and', true, x, 1 );
* // returns '1, 2, 3, and 4'
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var str = gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, 0 );
* // returns '1, 2, 3, and 4'
*/
declare var gconjoin: Routine;


// EXPORTS //

export = gconjoin;
