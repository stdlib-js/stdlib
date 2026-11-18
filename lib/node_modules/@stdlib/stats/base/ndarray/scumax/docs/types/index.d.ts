/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Computes the cumulative maximum value of a one-dimensional single-precision floating-point ndarray.
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
* var x = new Float32Vector( [ 1.0, 3.0, 4.0, 2.0 ] );
* var y = new Float32Vector( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var v = scumax( [ x, y ] );
* // returns <ndarray>[ 1.0, 3.0, 4.0, 4.0 ]
*
* var bool = ( v === y );
* // returns true
*/
declare function scumax( arrays: [ float32ndarray, float32ndarray ] ): float32ndarray;


// EXPORTS //

export = scumax;
