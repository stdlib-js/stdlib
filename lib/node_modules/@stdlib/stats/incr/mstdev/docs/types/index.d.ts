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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

/**
* If provided a value, returns an updated corrected sample standard deviation; otherwise, returns the current corrected sample standard deviation.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns corrected sample standard deviation
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving corrected sample standard deviation.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving sum.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @param mean - mean value
* @throws first argument must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmstdev( 3 );
*
* var s = accumulator();
* // returns null
*
* s = accumulator( 2.0 );
* // returns 0.0
*
* s = accumulator( -5.0 );
* // returns ~4.95
*
* s = accumulator( 3.0 );
* // returns ~4.36
*
* s = accumulator( 5.0 );
* // returns ~5.29
*
* s = accumulator();
* // returns ~5.29
*
* @example
* var accumulator = incrmstdev( 3, 5.0 );
*/
declare function incrmstdev( W: number, mean?: number ): accumulator;


// EXPORTS //

export = incrmstdev;
