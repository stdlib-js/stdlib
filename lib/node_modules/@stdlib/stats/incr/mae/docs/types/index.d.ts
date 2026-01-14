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
* If provided input values, the accumulator function returns an updated mean absolute error. If not provided input values, the accumulator function returns the current mean absolute error.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - input value
* @param y - input value
* @returns mean absolute error or null
*/
type accumulator = ( x?: number, y?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes the mean absolute error.
*
* @returns accumulator function
*
* @example
* var accumulator = incrmae();
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* m = accumulator( -5.0, 2.0 );
* // returns 4.0
*
* m = accumulator();
* // returns 4.0
*/
declare function incrmae(): accumulator;


// EXPORTS //

export = incrmae;
