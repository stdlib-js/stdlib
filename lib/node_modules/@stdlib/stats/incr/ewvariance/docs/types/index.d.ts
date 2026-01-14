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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

/**
* If provided a value, the accumulator function returns an updated variance. If not provided a value, the accumulator function returns the current variance.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns variance or null
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes an exponentially weighted variance.
*
* @param alpha - smoothing factor
* @throws must provide a nonnegative number
* @throws must be on the interval `[0,1]`
* @returns accumulator function
*
* @example
* var accumulator = increwvariance( 0.5 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 0.0
*
* v = accumulator( -5.0 );
* // returns 12.25
*
* v = accumulator();
* // returns 12.25
*/
declare function increwvariance( alpha: number ): accumulator;


// EXPORTS //

export = increwvariance;
