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
* If provided a value, returns an updated maximum absolute value; otherwise, returns the current maximum absolute value.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns maximum absolute value
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a maximum absolute value.
*
* @returns accumulator function
*
* @example
* var accumulator = incrmaxabs();
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 2.0
*
* v = accumulator( -3.0 );
* // returns 3.0
*
* v = accumulator( 1.0 );
* // returns 3.0
*
* v = accumulator();
* // returns 3.0
*/
declare function incrmaxabs(): accumulator;


// EXPORTS //

export = incrmaxabs;
