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
	code: 'ERR_SLICE_OUT_OF_BOUNDS';
}

/**
* Normalization result.
*/
type SliceResult = Slice<number, number | null, number> | ErrorObject;

/**
* Returns a normalized Slice object.
*
* ## Notes
*
* -   If `strict` is `true`, the function returns an error object when an input slice exceeds index bounds.
*
* @param slice - input slice
* @param len - maximum number of elements allowed in a slice
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns Slice object (or an error object)
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = normalizeSlice( new Slice(), 10, false );
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
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = normalizeSlice( new Slice( null, 20, 2 ), 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 2
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = normalizeSlice( new Slice( -5, -1, 1 ), 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 5
*
* v = s.stop;
* // returns 9
*
* v = s.step;
* // returns 1
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = normalizeSlice( new Slice( -5, null, -1 ), 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 5
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*/
declare function normalizeSlice( slice: Slice, len: number, strict: boolean ): SliceResult;


// EXPORTS //

export = normalizeSlice;
