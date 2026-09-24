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

import { typedndarray, complex128ndarray } from '@stdlib/types/ndarray';

/**
* Calculates the k-th discrete forward difference of a one-dimensional double-precision complex floating-point ndarray.
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
* var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Complex128Vector( [ 2.0, 2.0, 4.0, 4.0 ] );
* var prepend = new Complex128Vector( [ 1.0, 1.0 ] );
* var append = new Complex128Vector( [ 7.0, 7.0 ] );
* var out = new Complex128Vector( 3 );
* var workspace = new Complex128Vector( 3 );
* var k = scalar2ndarray( 1, {
*     'dtype': 'generic'
* });
*
* var y = zdiff( [ x, prepend, append, out, workspace, k ] );
* // returns <ndarray>[ <Complex128>[ 1.0, 1.0 ], <Complex128>[ 2.0, 2.0 ], <Complex128>[ 3.0, 3.0 ] ]
*/
declare function zdiff( arrays: [ complex128ndarray, complex128ndarray, complex128ndarray, complex128ndarray, complex128ndarray, typedndarray<number> ] ): complex128ndarray;


// EXPORTS //

export = zdiff;
