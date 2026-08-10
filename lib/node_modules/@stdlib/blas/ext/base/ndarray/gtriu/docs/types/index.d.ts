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
* Copies the upper triangular part of a matrix `A` to another matrix `B`.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a two-dimensional input ndarray corresponding to `A`.
*     -   a two-dimensional output ndarray corresponding to `B`.
*     -   a zero-dimensional ndarray specifying the diagonal below which to ignore.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var A = matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], 'generic' );
* var B = matrix( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ], 'generic' );
*
* var k = scalar2ndarray( 0, {
*    'dtype': 'generic'
* });
*
* var out = gtriu( [ A, B, k ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 0.0, 4.0 ] ]
*
* var bool = ( out === B );
* // returns true
*/
declare function gtriu<T extends typedndarray<unknown> = typedndarray<unknown>>( arrays: [ typedndarray<unknown>, T, typedndarray<number> ] ): T;


// EXPORTS //

export = gtriu;
