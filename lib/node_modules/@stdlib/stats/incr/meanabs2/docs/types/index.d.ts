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
* If provided a value, returns an updated arithmetic mean; otherwise, returns the current arithmetic mean.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns arithmetic mean of squared absolute values
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes an arithmetic mean of squared absolute values.
*
* @returns accumulator function
*
* @example
* var accumulator = incrmeanabs2();
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0 );
* // returns 4.0
*
* mu = accumulator( -5.0 );
* // returns 14.5
*
* mu = accumulator();
* // returns 14.5
*/
declare function incrmeanabs2(): accumulator;


// EXPORTS //

export = incrmeanabs2;
