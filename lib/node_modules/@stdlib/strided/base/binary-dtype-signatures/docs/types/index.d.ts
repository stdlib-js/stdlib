/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { ArrayLike } from '@stdlib/types/array';

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Boolean flag indicating whether to return signatures as a list of enumeration constants.
	*/
	enums?: boolean;
}

/**
* Generates a list of binary interface signatures from strided array data types.
*
* ## Notes
*
* -   The function returns a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
* -   For each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
* -   All signatures follow type promotion rules.
*
* @param dtypes1 - list of supported data types for the first argument
* @param dtypes2 - list of supported data types for the second argument
* @param dtypes3 - list of supported data types for the output
* @param options - options
* @param options.enums - boolean flag indicating whether to return signatures as a list of enumeration constants
* @throws must provide recognized data types
* @returns strided array containing binary interface signatures
*
* @example
* var dtypes = [
*     'float64',
*     'float32',
*     'int32',
*     'uint8'
* ];
*
* var sigs = signatures( dtypes, dtypes, dtypes );
* // returns [ 'float32', 'float32', 'float32', ... ]
*/
declare function signatures( dtypes1: ArrayLike<any>, dtypes2: ArrayLike<any>, dtypes3: ArrayLike<any>, options?: Options ): ArrayLike<string | number>;


// EXPORTS //

export = signatures;
