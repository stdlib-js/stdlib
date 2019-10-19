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
* If provided a value, returns an updated geometric mean; otherwise, returns the current geometric mean.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
* -   If provided a negative value, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns geometric mean
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving geometric mean.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving geometric mean.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @throws must provide a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmgmean( 3 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 2.0
*
* v = accumulator( 5.0 );
* // returns ~3.16
*
* v = accumulator( 3.0 );
* // returns ~3.11
*
* v = accumulator( 5.0 );
* // returns ~4.22
*
* v = accumulator();
* // returns ~4.22
*/
declare function incrmgmean( W: number ): accumulator;


// EXPORTS //

export = incrmgmean;
