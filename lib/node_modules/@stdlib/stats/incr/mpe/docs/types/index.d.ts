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
* If provided input values, the accumulator function returns an updated mean percentage error. If not provided input values, the accumulator function returns the current mean percentage error.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param f - input value
* @param a - input value
* @returns mean percentage error or null
*/
type accumulator = ( f?: number, a?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes the mean percentage error.
*
* @returns accumulator function
*
* @example
* var accumulator = incrmpe();
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns ~33.33
*
* m = accumulator( 5.0, 2.0 );
* // returns ~-58.33
*
* m = accumulator();
* // returns ~-58.33
*/
declare function incrmpe(): accumulator;


// EXPORTS //

export = incrmpe;
