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
* Computes the mean and standard deviation of a one-dimensional double-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*     -   a zero-dimensional ndarray specifying the degrees of freedom adjustment.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var opts = {
*     'dtype': 'float64'
* };
*
* var x = new Float64Vector( [ 1.0, 3.0, 4.0, 2.0 ] );
* var out = new Float64Vector( 2 );
*
* var correction = scalar2ndarray( 1.0, opts );
*
* var v = dmeanstdev( [ x, out, correction ] );
* // returns <ndarray>[ 2.5, ~1.2910 ]
*/
declare function dmeanstdev( arrays: [ float64ndarray, float64ndarray, typedndarray<number> ] ): float64ndarray;


// EXPORTS //

export = dmeanstdev;
