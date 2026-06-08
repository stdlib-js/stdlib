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

import { float32ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Multiplies a one-dimensional single-precision floating-point ndarray by a scalar constant and adds the result to a second one-dimensional single-precision floating-point ndarray multiplied by a scalar constant.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant by which to multiply the input ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant by which to multiply the output ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Vector( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var alpha = scalar2ndarray( 5.0, {
*     'dtype': 'float32'
* });
*
* var beta = scalar2ndarray( 2.0, {
*     'dtype': 'float32'
* });
*
* var out = saxpby( [ x, y, alpha, beta ] );
* // returns <ndarray>[ 9.0, 16.0, 23.0, 30.0, 37.0 ]
*/
declare function saxpby( arrays: [ float32ndarray, float32ndarray, typedndarray<number>, typedndarray<number> ] ): float32ndarray;


// EXPORTS //

export = saxpby;
