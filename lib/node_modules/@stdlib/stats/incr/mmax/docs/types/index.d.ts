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
* If provided a value, returns an updated maximum value; otherwise, returns the current maximum value.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns maximum value
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving maximum value.
*
* @param W - window size
* @throws must provide a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmmax( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0 );
* // returns 2.0
*
* m = accumulator( -5.0 );
* // returns 2.0
*
* m = accumulator( 3.0 );
* // returns 3.0
*
* m = accumulator( 5.0 );
* // returns 5.0
*
* m = accumulator();
* // returns 5.0
*/
declare function incrmmax( W: number ): accumulator;


// EXPORTS //

export = incrmmax;
