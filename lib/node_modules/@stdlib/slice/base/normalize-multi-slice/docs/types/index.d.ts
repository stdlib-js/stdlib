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
	code: 'ERR_OUT_OF_BOUNDS';
}

/**
* Normalization result.
*/
type SliceResult = MultiSlice | ErrorObject;

/**
* Returns a normalized MultiSlice object.
*
* ## Notes
*
* -   If `strict` is `true`, the function returns an error object when an input slice exceeds index bounds.
*
* @param slice - input slice
* @param shape - maximum allowed slice shape
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns MultiSlice object (or an error object)
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
* var MultiSlice = require( `@stdlib/slice/multi` );
*
* var shape = [ 10, 10, 10 ];
*
* var s1 = new MultiSlice( new Slice( 2, null, 2 ), null, -4 );
* var s2 = normalizeMultiSlice( s1, shape, false );
* // returns <MultiSlice>
*
* var d = s2.data;
* // returns [ <Slice>, <Slice>, <Slice> ]
*
* var v = d[ 0 ];
* // returns <Slice>
*
* var start = v.start;
* // returns 2
*
* var stop = v.stop;
* // returns 10
*
* var step = v.step;
* // returns 2
*
* v = d[ 1 ];
* // returns <Slice>
*
* start = v.start;
* // returns 0
*
* stop = v.stop;
* // returns 10
*
* step = v.step;
* // returns 1
*
* v = d[ 2 ];
* // returns <Slice>
*
* start = v.start;
* // returns 6
*
* stop = v.stop;
* // returns 7
*
* step = v.step;
* // returns 1
*/
declare function normalizeMultiSlice( slice: MultiSlice, shape: Collection<number>, strict: boolean ): SliceResult;


// EXPORTS //

export = normalizeMultiSlice;
