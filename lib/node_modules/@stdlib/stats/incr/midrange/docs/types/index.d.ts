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
* If provided a value, returns an updated mid-range; otherwise, returns the current mid-range.
*
* ## Notes
*
* -   The mid-range is the arithmetic mean of maximum and minimum values. Accordingly, the mid-range is the midpoint of the range and a measure of central tendency.
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns mid-range
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a mid-range.
*
* @returns accumulator function
*
* @example
* var accumulator = incrmidrange();
*
* var midrange = accumulator();
* // returns null
*
* midrange = accumulator( 3.14 );
* // returns 3.14
*
* midrange = accumulator( -5.0 );
* // returns ~-0.93
*
* midrange = accumulator( 10.1 );
* // returns 2.55
*
* midrange = accumulator();
* // returns 2.55
*/
declare function incrmidrange(): accumulator;


// EXPORTS //

export = incrmidrange;
