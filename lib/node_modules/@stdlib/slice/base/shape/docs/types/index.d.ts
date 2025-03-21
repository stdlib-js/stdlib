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
* Returns the shape of a normalized multi-slice.
*
* @param slice - input multi-slice
* @returns slice shape
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var normalizeMultiSlice = require( '@stdlib/slice/base/normalize-multi-slice' );
*
* var s = new MultiSlice( new Slice( 2, null, 1 ), null, 10 );
*
* var v = sliceShape( normalizeMultiSlice( s, [ 10, 5, 20 ], false ) );
* // returns [ 8, 5, 1 ]
*
* v = sliceShape( normalizeMultiSlice( s, [ 11, 3, 12 ], false ) );
* // returns [ 9, 3, 1 ]
*
* v = sliceShape( normalizeMultiSlice( s, [ 5, 10, 15 ], false ) );
* // returns [ 3, 10, 1 ]
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var normalizeMultiSlice = require( '@stdlib/slice/base/normalize-multi-slice' );
*
* var s = new MultiSlice( null, new Slice( -1, 3, -2 ) );
*
* var v = sliceShape( normalizeMultiSlice( s, [ 10, 5 ], false ) );
* // returns [ 10, 1 ]
*
* v = sliceShape( normalizeMultiSlice( s, [ 11, 10 ], false ) );
* // returns [ 11, 3 ]
*
* v = sliceShape( normalizeMultiSlice( s, [ 5, 15 ], false ) );
* // returns [ 5, 6 ]
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var normalizeMultiSlice = require( '@stdlib/slice/base/normalize-multi-slice' );
*
* var s = new MultiSlice( 1, new Slice( 0, 0, 1 ) );
*
* var v = sliceShape( normalizeMultiSlice( s, [ 10, 5 ], false ) );
* // returns [ 1, 0 ]
*
* v = sliceShape( normalizeMultiSlice( s, [ 11, 10 ], false ) );
* // returns [ 1, 0 ]
*
* v = sliceShape( normalizeMultiSlice( s, [ 5, 15 ], false ) );
* // returns [ 1, 0 ]
*/
declare function sliceShape( slice: MultiSlice ): Array<number>;


// EXPORTS //

export = sliceShape;
