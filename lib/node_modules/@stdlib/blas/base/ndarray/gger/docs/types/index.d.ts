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
* Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` and `y` are one-dimensional ndarrays, and `A` is an `M` by `N` matrix.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray corresponding to `x`.
*     -   a one-dimensional input ndarray corresponding to `y`.
*     -   a two-dimensional input/output ndarray corresponding to `A`.
*     -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = vector( [ 1.0, 2.0 ], 'generic' );
* var y = vector( [ 3.0, 4.0, 5.0 ], 'generic' );
* var A = matrix( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ], 'generic' );
*
* var alpha = scalar2ndarray( 1.0, {
*     'dtype': 'generic'
* });
*
* var z = gger( [ x, y, A, alpha ] );
* // returns <ndarray>[ [ 4.0, 6.0, 8.0 ], [ 10.0, 13.0, 16.0 ] ]
*
* var bool = ( z === A );
* // returns true
*/
declare function gger<T extends typedndarray<number> = typedndarray<number>>( arrays: [ typedndarray<number>, typedndarray<number>, T, typedndarray<number> ] ): T;


// EXPORTS //

export = gger;
