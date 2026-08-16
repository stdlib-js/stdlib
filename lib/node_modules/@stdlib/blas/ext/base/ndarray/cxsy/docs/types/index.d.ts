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

import { complex64ndarray } from '@stdlib/types/ndarray';

/**
* Subtracts the elements of an output one-dimensional single-precision complex floating-point ndarray from the corresponding elements in an input one-dimensional single-precision complex floating-point ndarray and assigns the results to the output ndarray.
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
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex64Vector( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var out = cxsy( [ x, y ] );
* // returns <ndarray>[ <Complex64>[ -1.0, 1.0 ], <Complex64>[ 4.0, -4.0 ], <Complex64>[ -4.0, 1.0 ] ]
*/
declare function cxsy( arrays: [ complex64ndarray, complex64ndarray ] ): complex64ndarray;


// EXPORTS //

export = cxsy;
