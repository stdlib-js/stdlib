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
* If provided a value, the accumulator function returns an updated accumulated value. If not provided a value, the accumulator function returns the current accumulated value.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns accumulated value or null
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a variance-to-mean ratio (VMR).
*
* @param mean - mean value
* @returns accumulator function
*
* @example
* var accumulator = incrvmr();
*
* var D = accumulator();
* // returns null
*
* D = accumulator( 2.0 );
* // returns 0.0
*
* D = accumulator( 1.0 );
* // returns ~0.33
*
* D = accumulator();
* // returns ~0.33
*
* @example
* var accumulator = incrvmr( 3.14 );
*/
declare function incrvmr( mean?: number ): accumulator;


// EXPORTS //

export = incrvmr;
