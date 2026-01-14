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

import { MultiSlice } from '@stdlib/types/slice';
import { Collection } from '@stdlib/types/array';

/**
* Interface describing an error object.
*/
interface ErrorObject {
	/**
	* Error code.
	*/
	code: 'ERR_SLICE_INVALID_SUBSEQUENCE' | 'ERR_SLICE_INVALID_INCREMENT' | 'ERR_SLICE_OUT_OF_BOUNDS' | 'ERR_SLICE_TOO_MANY_DIMENSIONS' | 'ERR_SLICE_INSUFFICIENT_DIMENSIONS' | 'ERR_SLICE_INVALID_ELLIPSIS';
}

/**
* Conversion result.
*/
type SliceResult = MultiSlice | ErrorObject;

/**
* Converts a multidimensional subsequence string to a MultiSlice object.
*
* ## Notes
*
* -   A multidimensional subsequence string is a comma-separated list of single-dimension indexing expressions (i.e., integers and/or subsequence strings). For example, the following
*
*     ```text
*     2
*     :
*     2:
*     :10
*     2:10
*     ::-1
*     10:2:-1
*     :2:
*     2:10:
*     2::2
*     :10:2
*     :, :, :
*     1, 2, 3
*     0:10, 1:20:2, ::-1
*     ...
*     :, ..., 2
*     ```
*
*     are all valid multidimensional subsequence strings.
*
* -   Providing a single nonnegative integer `i` as a single-dimension index indexes the same elements as the subsequence `i:i+1`.
*
* -   Providing a single negative integer `i` as a single-dimension index indexes the same elements as the subsequence `n+i:n+i+i`, where `n` is the dimension size.
*
* -   While integers index the same elements as equivalent subsequences, providing an integer as a single-dimension index indicates to reduce the number of dimensions by one (e.g., if the provided shape corresponds to an array having rank `2`, then `rank(A)-1 == rank(A['0,:'])`). In contrast, providing a subsequence indicates to retain a respective dimension (e.g., if the provided shape corresponds to an array having rank `2`, then `rank(A) == rank(A[':,:'])`).
*
* -   A multidimensional subsequence string can only contain **one** ellipsis ('...') operator. An ellipsis indicates to apply `:` to each dimension necessary to index all dimensions (e.g., if `A` has rank `4`, `A['1:, ..., 2:5'] == A['1:, :, :, 2:5']`).
*
* -   Except in the case of providing a single ellipsis, the number of single-dimension indexing expressions must equal the number of dimensions in the input shape.
*
* -   The function returns an error object if provided an invalid subsequence string.
*
* -   If `strict` is `true`, the function returns an error object if a single-dimension index expression which exceeds index bounds.
*
* @param str - input string
* @param shape - maximum allowed slice shape
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns MultiSlice object or an error object
*
* @example
* var s = seq2multislice( '0:10:2', [ 10 ], false );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice> ]
*
* var s0 = data[ 0 ];
* // returns <Slice>
*
* var v = s0.start;
* // returns 0
*
* v = s0.stop;
* // returns 10
*
* v = s0.step;
* // returns 2
*
* @example
* var s = seq2multislice( 'end-3::-1', [ 10 ], false );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice> ]
*
* var s0 = data[ 0 ];
* // returns <Slice>
*
* var v = s0.start;
* // returns 7
*
* v = s0.stop;
* // returns null
*
* v = s0.step;
* // returns -1
*
* @example
* var s = seq2multislice( '2,0:10:2,-4', [ 10, 10, 10 ], false );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ 2, <Slice>, -4 ]
*
* @example
* var s = seq2multislice( '::-2,...,:', [ 10, 10, 10, 10, 10 ], false );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, <Slice>, <Slice>, <Slice>, <Slice> ]
*
* var s1 = data[ 1 ];
* // returns <Slice>
*
* var v = s1.start;
* // returns 0
*
* v = s1.stop;
* // returns 10
*
* v = s1.step;
* // returns 1
*/
declare function seq2multislice( str: string, shape: Collection<number>, strict: boolean ): SliceResult;


// EXPORTS //

export = seq2multislice;
