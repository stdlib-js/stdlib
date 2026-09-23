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
* Fills a one-dimensional ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing a starting value.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = vector( [ 0.0, 0.0, 0.0, 0.0 ], 'generic' );
* // returns <ndarray>[ 0.0, 0.0, 0.0, 0.0 ]
*
* var start = scalar2ndarray( 3.0, {
*     'dtype': 'generic'
* });
*
* var out = gunitspace( [ x, start ] );
* // returns <ndarray>[ 3.0, 4.0, 5.0, 6.0 ]
*/
declare function gunitspace<T extends typedndarray<unknown> = typedndarray<unknown>>( arrays: [ T, typedndarray<unknown> ] ): T;


// EXPORTS //

export = gunitspace;
