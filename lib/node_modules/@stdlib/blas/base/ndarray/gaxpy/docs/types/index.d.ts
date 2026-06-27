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
* Multiplies a one-dimensional ndarray `x` by a constant `alpha` and adds the result to a one-dimensional ndarray `y`.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*     -   a zero-dimensional ndarray containing a scalar constant.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'generic' );
* var y = vector( [ 1.0, 1.0, 1.0, 1.0, 1.0 ], 'generic' );
*
* var alpha = scalar2ndarray( 5.0, {
*     'dtype': 'generic'
* });
*
* var z = gaxpy( [ x, y, alpha ] );
* // returns <ndarray>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*
* var bool = ( z === y );
* // returns true
*/
declare function gaxpy<T extends typedndarray<number> = typedndarray<number>, U extends typedndarray<number> = typedndarray<number>>( arrays: [ T, U, typedndarray<number> ] ): U;


// EXPORTS //

export = gaxpy;
