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
* If provided a value, returns an updated minimum value; otherwise, returns the current minimum value.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns minimum value
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving minimum value.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving minimum.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @throws must provide a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmmin( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0 );
* // returns 2.0
*
* m = accumulator( -5.0 );
* // returns -5.0
*
* m = accumulator( 3.0 );
* // returns -5.0
*
* m = accumulator( 5.0 );
* // returns -5.0
*
* m = accumulator();
* // returns -5.0
*/
declare function incrmmin( W: number ): accumulator;


// EXPORTS //

export = incrmmin;
