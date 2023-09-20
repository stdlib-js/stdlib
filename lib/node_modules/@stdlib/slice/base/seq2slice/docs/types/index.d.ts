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

import { Slice } from '@stdlib/types/slice';

/**
* Interface describing an error object.
*/
interface ErrorObject {
	/**
	* Error code.
	*/
	code: 'ERR_SLICE_INVALID_SUBSEQUENCE' | 'ERR_SLICE_INVALID_INCREMENT' | 'ERR_SLICE_OUT_OF_BOUNDS';
}

/**
* Conversion result.
*/
type SliceResult = Slice<number, number | null, number> | ErrorObject;

/**
* Converts a subsequence string to a Slice object.
*
* ## Notes
*
* -   A subsequence string has the following format:
*
*     ```text
*     <start>:<stop>:<increment>
*     ```
*
*     where
*
*     -   If an `increment` is not specified, the default increment is `1`. An increment of zero is **not** allowed.
*     -   The `start` index is **inclusive**.
*     -   The `stop` index is **exclusive**.
*     -   Both `start` and `stop` indices are _optional_. If not provided, `start` and `stop` default to index extremes. Which extremes correspond to which index depends on whether the `increment` is positive or negative.
*     -   Both `start` and `stop` can be negative; in which case, the corresponding index is resolved by subtracting the respective value from the provided length `len`.
*     -   Both `start` and `stop` can use the `end` keyword (e.g., `end-2::2`, `end-3:`, etc), which supports basic subtraction and division.
*     -   The `end` keyword resolves to the provided length `len`. Thus, `:-1` is equivalent to `:end-1`, `:-2` is equivalent to `:end-2`, and so on and so forth. The exception is when performing a division operation when the `increment` is less than zero; in which case, `end` is equal to `len-1` in order to preserve user expectations when `end/d` equals a whole number and slicing from right-to-left. The result from a division operation is **rounded down** to the nearest integer value.
*
* -   When `strict` is `false`, the resolved slice start is clamped to the slice index bounds (i.e., `[0, len)`).
*
* -   When `strict` is `false`, the resolved slice end is upper bound clamped to `len` (i.e., one greater than the last possible index).
*
* -   When the increment is negative, the resolved slice end value may be `null`, thus indicating that a non-empty slice should include the first index.
*
* -   The function ensures that results satisfy the convention that `:n` combined with `n:` is equivalent to `:` (i.e., selecting all elements).
*
* -   When `len` is zero, the function always returns a Slice object equivalent to `0:0:<increment>`.
*
* -   The function returns an error object if provided an invalid subsequence string.
*
* -   If `strict` is `true`, the function returns an error object if provided a subsequence string which exceeds index bounds.
*
* @param str - input string
* @param len - maximum number of elements allowed in the slice
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns Slice object or an error object
*
* @example
* var s = seq2slice( '0:10:1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( '::-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 9
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( 'end::-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 9
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*/
declare function seq2slice( str: string, len: number, strict: boolean ): SliceResult;


// EXPORTS //

export = seq2slice;
