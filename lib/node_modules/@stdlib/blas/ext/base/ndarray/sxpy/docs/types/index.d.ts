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

import { float32ndarray } from '@stdlib/types/ndarray';

/**
* Adds elements of a one-dimensional single-precision floating-point ndarray to the corresponding elements of a second one-dimensional single-precision floating-point ndarray and assigns the results to the second ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Vector( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = sxpy( [ x, y ] );
* // returns <ndarray>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
declare function sxpy( arrays: [ float32ndarray, float32ndarray ] ): float32ndarray;


// EXPORTS //

export = sxpy;
