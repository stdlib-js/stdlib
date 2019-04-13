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
* If provided a value, the accumulator function returns an updated mean directional accuracy. If not provided a value, the accumulator function returns the current mean directional accuracy.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param f - forecast value
* @param a - actual value
* @returns mean directional accuracy or null
*/
type accumulator = ( f?: number, a?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes the mean directional accuracy.
*
* @returns accumulator function
*
* @example
* var accumulator = incrmda();
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* m = accumulator( -5.0, 4.0 );
* // returns 0.5
*
* m = accumulator();
* // returns 0.5
*/
declare function incrmda(): accumulator;


// EXPORTS //

export = incrmda;
