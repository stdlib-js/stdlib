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

/**
* If provided a value, returns an updated unbiased sample variance; otherwise, returns the current unbiased sample variance.
*
* ## Notes
*
* -   If provided `NaN`, the accumulated value is not updated (i.e., `NaN` values are ignored), and the accumulator function returns the current unbiased sample variance.
*
* @param x - value
* @returns unbiased sample variance
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving unbiased sample variance, ignoring `NaN` values.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving unbiased sample variance.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
* -   `NaN` values are ignored.
*
* @param W - window size
* @param mean - mean value
* @throws first argument must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrnanmvariance( 3 );
*
* var s2 = accumulator();
* // returns null
*
* s2 = accumulator( 2.0 );
* // returns 0.0
*
* s2 = accumulator( -5.0 );
* // returns 24.5
*
* s2 = accumulator( NaN );
* // returns 24.5
*
* s2 = accumulator( 3.0 );
* // returns 19.0
*
* s2 = accumulator( 5.0 );
* // returns 28.0
*
* s2 = accumulator();
* // returns 28.0
*
* @example
* var accumulator = incrnanmvariance( 3, -2.0 );
*/
declare function incrnanmvariance( W: number, mean?: number ): accumulator;


// EXPORTS //

export = incrnanmvariance;
