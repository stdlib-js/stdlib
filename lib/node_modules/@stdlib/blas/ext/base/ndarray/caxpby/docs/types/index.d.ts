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
* Multiplies a one-dimensional single-precision complex floating-point ndarray by a scalar constant and adds the result to a second one-dimensional single-precision complex floating-point ndarray multiplied by a scalar constant.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*     -   a zero-dimensional ndarray containing the constant by which to multiply the input ndarray.
*     -   a zero-dimensional ndarray containing the constant by which to multiply the output ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var Complex64Tensor0D = require( '@stdlib/ndarray/tensor0d/complex64' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex64Vector( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var alpha = new Complex64Tensor0D( 2.0, 1.0 );
* var beta = new Complex64Tensor0D( 1.0, -1.0 );
*
* var out = caxpby( [ x, y, alpha, beta ] );
* // returns <ndarray>[ <Complex64>[ 3.0, 4.0 ], <Complex64>[ 9.0, 5.0 ], <Complex64>[ 3.0, -2.0 ] ]
*/
declare function caxpby( arrays: [ complex64ndarray, complex64ndarray, typedndarray<Complex64>, typedndarray<Complex64> ] ): complex64ndarray;


// EXPORTS //

export = caxpby;
