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
* If provided input values, the accumulator function returns an updated root mean squared error. If not provided input values, the accumulator function returns the current root mean squared error.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - input value
* @param y - input value
* @returns root mean squared error or null
*/
type accumulator = ( x?: number, y?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving root mean squared error.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving root mean squared error.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @throws must provide a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmrmse( 3 );
*
* var r = accumulator();
* // returns null
*
* r = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* r = accumulator( -5.0, 2.0 );
* // returns 5.0
*
* r = accumulator( 3.0, 2.0 );
* // returns ~4.12
*
* r = accumulator( 5.0, -2.0 );
* // returns ~5.74
*
* r = accumulator();
* // returns ~5.74
*/
declare function incrmrmse( W: number ): accumulator;


// EXPORTS //

export = incrmrmse;
