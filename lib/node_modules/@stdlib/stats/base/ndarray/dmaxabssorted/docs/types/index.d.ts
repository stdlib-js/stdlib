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

import { float64ndarray } from '@stdlib/types/ndarray';

/**
* Computes the maximum absolute value of a sorted one-dimensional double-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns maximum absolute value
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var v = dmaxabssorted( [ x ] );
* // returns 4.0
*/
declare function dmaxabssorted( arrays: [ float64ndarray ] ): number;


// EXPORTS //

export = dmaxabssorted;
