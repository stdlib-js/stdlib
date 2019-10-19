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
* If provided a value, returns an updated unbiased sample variance; otherwise, returns the current unbiased sample variance.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns unbiased sample variance
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving unbiased sample variance.
*
* @param W - window size
* @param mean - mean value
* @throws first argument must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmvariance( 3 );
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
* var accumulator = incrmvariance( 3, -2.0 );
*/
declare function incrmvariance( W: number, mean?: number ): accumulator;


// EXPORTS //

export = incrmvariance;
