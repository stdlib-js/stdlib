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
* If provided arguments, returns an updated sum of products; otherwise, returns the current sum of products.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @param y - value
* @returns sum of products
*/
type accumulator = ( x?: number, y?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving sum of products.
*
* ## Notes
*
* -   The `W` parameter defines the number of (x,y) pairs over which to compute the moving sum of products.
* -   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @throws must provide a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmsumprod( 3 );
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0, 3.0 );
* // returns 6.0
*
* sum = accumulator( -5.0, 2.0 );
* // returns -4.0
*
* sum = accumulator( 3.0, -2.0 );
* // returns -10.0
*
* sum = accumulator( 5.0, 3.0 );
* // returns -1.0
*
* sum = accumulator();
* // returns -1.0
*/
declare function incrmsumprod( W: number ): accumulator;


// EXPORTS //

export = incrmsumprod;
