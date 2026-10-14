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

import { float64ndarray } from '@stdlib/types/ndarray';

/**
* Calculates the differences between consecutive elements of a one-dimensional double-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional ndarray containing values to prepend.
*     -   a one-dimensional ndarray containing values to append.
*     -   a one-dimensional output ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
*
* var x = new Float64Vector( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
* var prepend = new Float64Vector( [ 1.0 ] );
* var append = new Float64Vector( [ 11.0 ] );
* var out = new Float64Vector( 6 );
*
* var y = dediff( [ x, prepend, append, out ] );
* // returns <ndarray>[ 1.0, 2.0, 2.0, 2.0, 2.0, 11.0 ]
*/
declare function dediff( arrays: [ float64ndarray, float64ndarray, float64ndarray, float64ndarray ] ): float64ndarray;


// EXPORTS //

export = dediff;
