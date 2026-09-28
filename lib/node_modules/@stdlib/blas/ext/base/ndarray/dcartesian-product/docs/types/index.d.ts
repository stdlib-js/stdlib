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
* Computes the Cartesian product for two double-precision floating-point ndarrays.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional input ndarray.
*     -   a two-dimensional output ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = new Float64Vector( [ 1.0, 2.0 ] );
* var y = new Float64Vector( [ 3.0, 4.0 ] );
* var out = zeros( [ 4, 2 ], {
*     'dtype': 'float64'
* });
*
* var v = dcartesianProduct( [ x, y, out ] );
* // returns <ndarray>[ [ 1.0, 3.0 ], [ 1.0, 4.0 ], [ 2.0, 3.0 ], [ 2.0, 4.0 ] ]
*
* var bool = ( v === out );
* // returns true
*/
declare function dcartesianProduct( arrays: [ float64ndarray, float64ndarray, float64ndarray ] ): float64ndarray;


// EXPORTS //

export = dcartesianProduct;
