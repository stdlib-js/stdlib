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
* Fills a one-dimensional double-precision floating-point ndarray with logarithmically spaced values over a specified interval.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray specifying the base of the logarithmic scale.
*     -   a zero-dimensional ndarray specifying the exponent of the starting value.
*     -   a zero-dimensional ndarray specifying the exponent of the final value.
*     -   a zero-dimensional ndarray specifying whether to include the `base^stop` value when writing values to the input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var base = scalar2ndarray( 10.0, {
*     'dtype': 'float64'
* });
*
* var strt = scalar2ndarray( 0.0, {
*     'dtype': 'float64'
* });
*
* var stp = scalar2ndarray( 5.0, {
*     'dtype': 'float64'
* });
*
* var endpoint = scalar2ndarray( true, {
*     'dtype': 'bool'
* });
*
* var out = dlogspace( [ x, base, strt, stp, endpoint ] );
* // returns <ndarray>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
*/
declare function dlogspace( arrays: [ float64ndarray, typedndarray<number>, typedndarray<number>, typedndarray<number>, typedndarray<boolean> ] ): float64ndarray;


// EXPORTS //

export = dlogspace;
