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

import { float64ndarray, uint8ndarray } from '@stdlib/types/ndarray';

/**
* Calculates the range of a one-dimensional double-precision floating-point ndarray according to a mask.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional mask ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns range
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var Uint8Vector = require( '@stdlib/ndarray/vector/uint8' );
*
* var x = new Float64Vector( [ 1.0, -2.0, 4.0, 2.0 ] );
* var mask = new Uint8Vector( [ 0, 0, 1, 0 ] );
*
* var v = dmskrange( [ x, mask ] );
* // returns 4.0
*/
declare function dmskrange( arrays: [ float64ndarray, uint8ndarray ] ): number;


// EXPORTS //

export = dmskrange;
