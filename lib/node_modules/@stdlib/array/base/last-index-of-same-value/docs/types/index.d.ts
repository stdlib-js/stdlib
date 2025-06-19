/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Returns the index of the last element which equals a provided search element according to the same value algorithm.
*
* ## Notes
*
* -   The function uses the [SameValue Algorithm][ecma-262-same-value-algorithm], as specified in ECMAScript 5.
* -   In contrast to the strict equality operator `===`, `-0` and `+0` are distinguishable and `NaNs` are the same.
* -   The function scans an input array from the starting index to the beginning of the array (i.e., backward).
* -   If unable to find an element which equals a provided search element, the function returns `-1`.
* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.
*
* [ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12
*
* @param x - input array
* @param searchElement - search element
* @param fromIndex - starting index (inclusive)
* @returns index
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var idx = lastIndexOfSameValue( x, 2, 3 );
* // returns 1
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var idx = lastIndexOfSameValue( x, 2, 3 );
* // returns 1
*/
declare function lastIndexOfSameValue( x: Collection | AccessorArrayLike<unknown>, searchElement: unknown, fromIndex: number ): number;


// EXPORTS //

export = lastIndexOfSameValue;
