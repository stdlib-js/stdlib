/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { ndarray } from '@stdlib/types/ndarray';

/**
* Flags and other meta information (e.g., memory layout of the array).
*/
interface Flags {
	/**
	* Boolean indicating if an array is row-major contiguous.
	*/
	ROW_MAJOR_CONTIGUOUS?: boolean;

	/**
	* Boolean indicating if an array is column-major contiguous.
	*/
	COLUMN_MAJOR_CONTIGUOUS?: boolean;

	/**
	* Boolean indicating if an array is read-only.
	*/
	READONLY?: boolean;
}

/**
* Returns the flags of a provided ndarray.
*
* ## Notes
*
* -   When `copy` is `false`, changes to the returned object may mutate the input ndarray flags. If there is a chance that the returned object will be mutated (either directly or by downstream consumers), set `copy` to `true` to prevent unintended side effects.
*
* @param x - input ndarray
* @param copy - boolean indicating whether to explicitly copy the value assigned to the input ndarray's `flags` property
* @returns flags
*
* @example
* var zeros = require( `@stdlib/ndarray/zeros` );
*
* var o = flags( zeros( [ 3, 3, 3 ] ), false );
* // returns {...}
*/
declare function flags( x: ndarray, copy: boolean ): Flags;


// EXPORTS //

export = flags;
