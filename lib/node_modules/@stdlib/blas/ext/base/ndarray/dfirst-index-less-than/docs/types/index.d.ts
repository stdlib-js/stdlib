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
* Returns the index of the first element in a one-dimensional double-precision floating-point ndarray which is less than a corresponding element in another one-dimensional double-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   first one-dimensional input ndarray.
*     -   second one-dimensional input ndarray.
*
* -   When comparing elements, the function checks whether an element in the first one-dimensional input ndarray is less than a corresponding element in the second one-dimensional input ndarray using the less-than operator `<`. As a consequence, comparisons involving `NaN` always evaluate to `false`.
*
* @param arrays - array-like object containing ndarrays
* @returns index
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
*
* var x = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new Float64Vector( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* var idx = dfirstIndexLessThan( [ x, y ] );
* // returns 2
*/
declare function dfirstIndexLessThan( arrays: [ float64ndarray, float64ndarray ] ): number;


// EXPORTS //

export = dfirstIndexLessThan;
