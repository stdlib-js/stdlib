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
* Returns the index of the first element in a one-dimensional double-precision floating-point ndarray equal to a corresponding element in another one-dimensional double-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   first one-dimensional input ndarray.
*     -   second one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the index from which to begin searching.
*
* -   When comparing elements, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.
*
* @param arrays - array-like object containing ndarrays
* @returns index
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Vector( [ 0.0, 0.0, 3.0, 0.0 ] );
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var idx = dfirstIndexEqual( [ x, y, fromIndex ] );
* // returns 2
*/
declare function dfirstIndexEqual( arrays: [ float64ndarray, float64ndarray, typedndarray<number> ] ): number;


// EXPORTS //

export = dfirstIndexEqual;
