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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Prepends elements to a one-dimensional input ndarray by circularly repeating existing elements and writes the results to a one-dimensional output ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray. Must have `N + k` elements, where `N` is the number of elements in the input ndarray, and `k` is the number of elements to pad.
*     -   a zero-dimensional ndarray specifying the number of elements to pad.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = vector( [ 1.0, 2.0, 3.0, 4.0 ], 'generic' );
* var y = zeros( [ 10 ], {
*     'dtype': 'generic'
* });
*
* var k = scalar2ndarray( 6, {
*     'dtype': 'generic'
* });
*
* var out = gleftPadCircular( [ x, y, k ] );
* // returns <ndarray>[ 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 ]
*/
declare function gleftPadCircular<T = unknown, U extends typedndarray<T> = typedndarray<T>, V = unknown, W extends typedndarray<T | V> = typedndarray<T | V>>( arrays: [ U, W, typedndarray<number> ] ): W;


// EXPORTS //

export = gleftPadCircular;
