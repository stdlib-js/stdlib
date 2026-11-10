/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { typedndarray, boolndarray } from '@stdlib/types/ndarray';

/**
* Cumulatively tests whether at least `k` elements in a one-dimensional ndarray are truthy.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*     -   a zero-dimensional ndarray containing the minimum number of truthy elements.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = vector( [ 0.0, 1.0, 1.0, 0.0 ], 'generic' );
* var out = new BooleanVector( 4 );
*
* var k = scalar2ndarray( 2 );
*
* var z = gcusome( [ x, out, k ] );
* // returns <ndarray>[ false, false, true, true ]
*
* var bool = ( z === out );
* // returns true
*/
declare function gcusome( arrays: [ typedndarray<unknown>, boolndarray, typedndarray<number> ] ): boolndarray;


// EXPORTS //

export = gcusome;
