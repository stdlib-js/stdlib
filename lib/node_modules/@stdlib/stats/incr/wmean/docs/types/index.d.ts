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
* If provided both arguments, returns an updated weighted arithmetic mean; otherwise, returns the current weighted arithmetic mean.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @param w - weight
* @returns weighted arithmetic mean
*/
type accumulator = ( x?: number, w?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a weighted arithmetic mean.
*
* @returns accumulator function
*
* @example
* var accumulator = incrwmean();
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0, 1.0 );
* // returns 2.0
*
* mu = accumulator( 2.0, 0.5 );
* // returns 2.0
*
* mu = accumulator( 3.0, 1.5 );
* // returns 2.5
*
* mu = accumulator();
* // returns 2.5
*/
declare function incrwmean(): accumulator;


// EXPORTS //

export = incrwmean;
