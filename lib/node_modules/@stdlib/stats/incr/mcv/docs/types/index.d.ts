/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/**
* If provided a value, returns an updated moving coefficient of variation; otherwise, returns the current moving coefficient of variation.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns moving coefficient of variation
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving coefficient of variation (CV).
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving coefficient of variation.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @param mean - mean value
* @throws first argument must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmcv( 3 );
*
* var cv = accumulator();
* // returns null
*
* cv = accumulator( 2.0 );
* // returns 0.0
*
* cv = accumulator( 1.0 );
* // returns ~0.47
*
* cv = accumulator( 3.0 );
* // returns 0.5
*
* cv = accumulator( 7.0 );
* // returns ~0.83
*
* cv = accumulator();
* // returns ~0.83
*
* @example
* var accumulator = incrmcv( 3, 2.0 );
*/
declare function incrmcv( W: number, mean?: number ): accumulator;


// EXPORTS //

export = incrmcv;
