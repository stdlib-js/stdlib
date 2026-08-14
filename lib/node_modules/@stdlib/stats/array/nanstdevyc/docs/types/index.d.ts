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

import { NumericArray, Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Computes the standard deviation of an array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
*
* ## Notes
*
* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
*
* @param x - input array
* @param correction - degrees of freedom adjustment (default: 1.0)
* @returns standard deviation
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanstdevyc( x, 1.0 );
* // returns ~2.0817
*/
declare function nanstdevyc( x: InputArray, correction?: number ): number;


// EXPORTS //

export = nanstdevyc;
