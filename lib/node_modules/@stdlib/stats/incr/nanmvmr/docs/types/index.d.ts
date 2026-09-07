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
* If provided a value, returns an updated moving variance-to-mean ratio; otherwise, returns the current moving variance-to-mean ratio.
*
* ## Notes
*
* -   If provided `NaN`, the accumulated value is not updated (i.e., `NaN` values are ignored).
*
* @param x - value
* @returns accumulated value or null
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving variance-to-mean ratio (VMR) while ignoring `NaN` values.
*
* @param W - window size
* @param mean - mean value
* @throws first argument must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrnanmvmr( 3 );
*
* var F = accumulator();
* // returns null
*
* F = accumulator( 2.0 );
* // returns 0.0
*
* F = accumulator( NaN );
* // returns 0.0
*
* F = accumulator( 1.0 );
* // returns ~0.33
*
* F = accumulator( 3.0 );
* // returns 0.5
*
* F = accumulator( NaN );
* // returns 0.5
*
* F = accumulator( 7.0 );
* // returns ~2.55
*
* F = accumulator();
* // returns ~2.55
*
* @example
* var accumulator = incrnanmvmr( 3, 2.0 );
*/
declare function incrnanmvmr( W: number, mean?: number ): accumulator;


// EXPORTS //

export = incrnanmvmr;
