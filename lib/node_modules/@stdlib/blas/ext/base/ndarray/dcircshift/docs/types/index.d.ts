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
* Circularly shifts the elements of a one-dimensional double-precision floating-point ndarray by a specified number of positions.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray specifying the number of positions to shift.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var k = scalar2ndarray( 2, {
*    'dtype': 'generic'
* });
*
* var out = dcircshift( [ x, k ] );
* // returns <ndarray>[ 4.0, 5.0, 1.0, 2.0, 3.0 ]
*/
declare function dcircshift( arrays: [ float64ndarray, typedndarray<number> ] ): float64ndarray;


// EXPORTS //

export = dcircshift;
