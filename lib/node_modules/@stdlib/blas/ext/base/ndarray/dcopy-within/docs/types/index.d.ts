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

import { typedndarray, float64ndarray } from '@stdlib/types/ndarray';

/**
* Performs an in-place copy of elements within a one-dimensional double-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray specifying a target index.
*     -   a zero-dimensional ndarray specifying a source start index (inclusive).
*     -   a zero-dimensional ndarray specifying a source end index (exclusive).
*     -   a one-dimensional workspace ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var target = scalar2ndarray( 3, {
*    'dtype': 'generic'
* });
* var start = scalar2ndarray( 1, {
*    'dtype': 'generic'
* });
* var end = scalar2ndarray( 4, {
*    'dtype': 'generic'
* });
*
* var w = zeros( [ 6 ], {
*    'dtype': 'float64'
* });
*
* var out = dcopyWithin( [ x, target, start, end, w ] );
* // returns <ndarray>[ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ]
*/
declare function dcopyWithin( arrays: [ float64ndarray, typedndarray<number>, typedndarray<number>, typedndarray<number>, float64ndarray ] ): float64ndarray;


// EXPORTS //

export = dcopyWithin;
