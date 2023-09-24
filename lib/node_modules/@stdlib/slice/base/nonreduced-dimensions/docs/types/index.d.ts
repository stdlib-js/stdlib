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

/**
* Returns a list of non-reduced dimensions in an un-normalized multi-slice.
*
* @param slice - input slice
* @returns list of indices
*
* @example
* var MultiSlice = require( `@stdlib/slice/multi` );
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = new MultiSlice( 1, null, 2, void 0, new Slice( 0, 10, 1 ) );
* // returns <MultiSlice>
*
* var indices = nonreducedDimensions( s );
* // returns [ 1, 3, 4 ]
*/
declare function nonreducedDimensions( slice: MultiSlice ): Array<number>;


// EXPORTS //

export = nonreducedDimensions;
