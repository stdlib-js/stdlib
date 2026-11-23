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

import { complex64ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Copies the upper triangular part of a single-precision complex floating-point matrix `A` to another matrix `B`.
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
* var Complex64Matrix = require( '@stdlib/ndarray/matrix/complex64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var A = new Complex64Matrix( [ [ 1.0, 2.0, 3.0, 4.0 ], [ 5.0, 6.0, 7.0, 8.0 ] ] );
* var B = new Complex64Matrix( [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0, 0.0 ] ] );
*
* var k = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var out = ctriu( [ A, B, k ] );
* // returns <ndarray>[ [ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 3.0, 4.0 ] ], [ <Complex64>[ 0.0, 0.0 ], <Complex64>[ 7.0, 8.0 ] ] ]
*
* var bool = ( out === B );
* // returns true
*/
declare function ctriu( arrays: [ complex64ndarray, complex64ndarray, typedndarray<number> ] ): complex64ndarray;


// EXPORTS //

export = ctriu;
