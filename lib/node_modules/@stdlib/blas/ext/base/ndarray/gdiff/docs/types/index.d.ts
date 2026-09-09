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
* Calculates the k-th discrete forward difference of a one-dimensional ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional ndarray containing values to prepend.
*     -   a one-dimensional ndarray containing values to append.
*     -   a one-dimensional output ndarray.
*     -   a one-dimensional workspace ndarray.
*     -   a zero-dimensional ndarray specifying the number of times to recursively compute differences.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = vector( [ 2.0, 4.0, 6.0, 8.0, 10.0 ], 'generic' );
* var prepend = vector( [ 1.0 ], 'generic' );
* var append = vector( [ 11.0 ], 'generic' );
* var out = vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 'generic' );
* var workspace = vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 'generic' );
* var k = scalar2ndarray( 1, {
*     'dtype': 'generic'
* });
*
* var y = gdiff( [ x, prepend, append, out, workspace, k ] );
* // returns <ndarray>[ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ]
*/
declare function gdiff<T extends typedndarray<number> = typedndarray<number>>( arrays: [ T, T, T, T, T, typedndarray<number> ] ): T;


// EXPORTS //

export = gdiff;
