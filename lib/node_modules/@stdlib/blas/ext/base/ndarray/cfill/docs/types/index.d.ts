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
import { Complex64 } from '@stdlib/types/complex';

/**
* Fills a one-dimensional single-precision complex floating-point ndarray with a specified scalar constant.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant.
*     -   a zero-dimensional ndarray containing the starting index (inclusive).
*     -   a zero-dimensional ndarray containing the ending index (exclusive).
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, -2.0, 3.0, 4.0, -6.0, 5.0, 7.0 ] );
*
* var alpha = scalar2ndarray( new Complex64( 5.0, 5.0 ), {
*     'dtype': 'complex64'
* });
*
* var start = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var end = scalar2ndarray( 2, {
*     'dtype': 'generic'
* });
*
* var out = cfill( [ x, alpha, start, end ] );
* // returns <ndarray>[ <Complex64>[ 5.0, 5.0 ], <Complex64>[ 5.0, 5.0 ], <Complex64>[ 4.0, -6.0 ], <Complex64>[ 5.0, 7.0 ] ]
*/
declare function cfill( arrays: [ complex64ndarray, typedndarray<Complex64>, typedndarray<number>, typedndarray<number> ] ): complex64ndarray;


// EXPORTS //

export = cfill;
