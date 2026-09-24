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

import { float64ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Multiplies each element in a one-dimensional double-precision floating-point ndarray by a scalar constant and adds a scalar constant to each result.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant to multiply.
*     -   a zero-dimensional ndarray containing the scalar constant to add.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float64Vector( [ -2.0, 1.0, 3.0, -5.0 ] );
*
* var alpha = scalar2ndarray( 5.0, {
*     'dtype': 'float64'
* });
*
* var beta = scalar2ndarray( 3.0, {
*     'dtype': 'float64'
* });
*
* var out = daxpb( [ x, alpha, beta ] );
* // returns <ndarray>[ -7.0, 8.0, 18.0, -22.0 ]
*/
declare function daxpb( arrays: [ float64ndarray, typedndarray<number>, typedndarray<number> ] ): float64ndarray;


// EXPORTS //

export = daxpb;
