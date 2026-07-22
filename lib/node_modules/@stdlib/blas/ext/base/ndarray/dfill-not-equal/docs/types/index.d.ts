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
* Replaces elements in a one-dimensional double-precision floating-point ndarray not equal to a provided search element with a specified scalar constant.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the search element.
*     -   a zero-dimensional ndarray containing the scalar constant.
*
* -   When comparing elements, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct (i.e., as `NaN !== NaN` always evaluates to `true`, `NaN` elements are always replaced), and `-0` and `+0` are considered the same.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float64Vector( [ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ] );
*
* var searchElement = scalar2ndarray( 0.0, {
*     'dtype': 'float64'
* });
*
* var alpha = scalar2ndarray( 5.0, {
*     'dtype': 'float64'
* });
*
* var out = dfillNotEqual( [ x, searchElement, alpha ] );
* // returns <ndarray>[ 0.0, 5.0, 5.0, 0.0, 5.0, 5.0 ]
*/
declare function dfillNotEqual( arrays: [ float64ndarray, typedndarray<number>, typedndarray<number> ] ): float64ndarray;


// EXPORTS //

export = dfillNotEqual;
