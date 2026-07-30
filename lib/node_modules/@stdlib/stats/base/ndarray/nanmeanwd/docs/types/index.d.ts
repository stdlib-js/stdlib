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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Computes the arithmetic mean of a one-dimensional ndarray, ignoring `NaN` values and using Welford's algorithm.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns arithmetic mean
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var x = vector( [ 1.0, 3.0, NaN, 2.0 ], 'generic' );
*
* var v = nanmeanwd( [ x ] );
* // returns 2.0
*/
declare function nanmeanwd( arrays: [ typedndarray<number> ] ): number;


// EXPORTS //

export = nanmeanwd;
