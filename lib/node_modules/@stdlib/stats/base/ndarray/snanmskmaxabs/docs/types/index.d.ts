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

import { float32ndarray, uint8ndarray } from '@stdlib/types/ndarray';

/**
* Computes the maximum absolute value of a one-dimensional single-precision floating-point ndarray according to a mask, ignoring `NaN` values.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional mask ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns maximum absolute value
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var Uint8Vector = require( '@stdlib/ndarray/vector/uint8' );
*
* var x = new Float32Vector( [ 1.0, -2.0, 4.0, 2.0 ] );
* var mask = new Uint8Vector( [ 0, 0, 1, 0 ] );
*
* var v = snanmskmaxabs( [ x, mask ] );
* // returns 2.0
*/
declare function snanmskmaxabs( arrays: [ float32ndarray, uint8ndarray ] ): number;


// EXPORTS //

export = snanmskmaxabs;
