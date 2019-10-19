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
* If provided input values, the accumulator function returns an updated mean arctangent absolute percentage error. If not provided input values, the accumulator function returns the current mean arctangent absolute percentage error.
*
* ## Notes
*
* -   Note that, unlike the mean absolute percentage error (MAPE), the mean arctangent absolute percentage error is expressed in radians on the interval [0,π/2].
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param f - input value
* @param a - input value
* @returns mean arctangent absolute percentage error or null
*/
type accumulator = ( f?: number, a?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving mean absolute percentage error.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving mean absolute percentage error.
* -   As `W` (f,a) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @throws must provide a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmmape( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns ~33.33
*
* m = accumulator( 5.0, 2.0 );
* // returns ~91.67
*
* m = accumulator( 3.0, 2.0 );
* // returns ~77.78
*
* m = accumulator( 2.0, 5.0 );
* // returns ~86.67
*
* m = accumulator();
* // returns ~86.67
*/
declare function incrmmape( W: number ): accumulator;


// EXPORTS //

export = incrmmape;
