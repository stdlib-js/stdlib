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
* If provided arguments, returns an updated moving unbiased sample covariance; otherwise, returns the current moving unbiased sample covariance.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @param y - value
* @returns moving unbiased sample covariance
*/
type accumulator = ( x?: number, y?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving unbiased sample covariance.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving unbiased sample covariance.
* -   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @param meanx - mean value
* @param meany - mean value
* @throws first argument must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmcovariance( 3, -2.0, 10.0 );
*/
declare function incrmcovariance( W: number, meanx: number, meany: number ): accumulator; // tslint-disable-line max-line-length

/**
* Returns an accumulator function which incrementally computes a moving unbiased sample covariance.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving unbiased sample covariance.
* -   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @throws first argument must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmcovariance( 3 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0, 1.0 );
* // returns 0.0
*
* v = accumulator( -5.0, 3.14 );
* // returns ~-7.49
*
* v = accumulator( 3.0, -1.0 );
* // returns -8.35
*
* v = accumulator( 5.0, -9.5 );
* // returns -29.42
*
* v = accumulator();
* // returns -29.42
*/
declare function incrmcovariance( W: number ): accumulator;


// EXPORTS //

export = incrmcovariance;
