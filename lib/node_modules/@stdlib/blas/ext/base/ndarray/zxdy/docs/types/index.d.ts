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

import { complex128ndarray } from '@stdlib/types/ndarray';

/**
* Divides elements of a one-dimensional double-precision complex floating-point ndarray by the corresponding elements of a second one-dimensional double-precision complex floating-point ndarray and assigns the results to the second ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
*
* var x = new Complex128Vector( [ -1.0, 3.0, -2.0, 14.0, -4.0, 44.0 ] );
* var y = new Complex128Vector( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );
*
* var out = zxdy( [ x, y ] );
* // returns <ndarray>[ <Complex128>[ 1.0, 2.0 ], <Complex128>[ 3.0, 4.0 ], <Complex128>[ 5.0, 6.0 ] ]
*/
declare function zxdy( arrays: [ complex128ndarray, complex128ndarray ] ): complex128ndarray;


// EXPORTS //

export = zxdy;
