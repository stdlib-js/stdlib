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
* Subtracts a scalar constant from each element in a one-dimensional single-precision complex floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant to subtract.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Complex64Vector( [ -2.0, 1.0, 3.0, -5.0 ] );
*
* var alpha = scalar2ndarray( new Complex64( 5.0, 0.0 ), {
*     'dtype': 'complex64'
* });
*
* var out = cxsa( [ x, alpha ] );
* // returns <ndarray>[ <Complex64>[ -7.0, 1.0 ], <Complex64>[ -2.0, -5.0 ] ]
*/
declare function cxsa( arrays: [ complex64ndarray, typedndarray<Complex64> ] ): complex64ndarray;


// EXPORTS //

export = cxsa;
