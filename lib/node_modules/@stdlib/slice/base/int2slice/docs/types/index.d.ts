/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
	code: 'ERR_SLICE_OUT_OF_BOUNDS';
}

/**
* Slice return value.
*/
type SliceResult = Slice | ErrorObject;

/**
* Converts an integer to a Slice object.
*
* ## Notes
*
* -   If `strict` is `true`, the function returns an error object when an input value exceeds index bounds.
*
* @param value - input value
* @param max - index upper bound (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns Slice object (or an error object)
*
* @example
* var s = int2slice( -4, 10, false );
* // returns <Slice>
*
* var start = s.start;
* // returns 6
*
* var stop = s.stop;
* // returns 7
*
* var step = s.step;
* // returns 1
*/
declare function int2slice( value: number, max: number, strict: boolean ): SliceResult;


// EXPORTS //

export = int2slice;
