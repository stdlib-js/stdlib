/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* If provided arguments, returns an updated residual sum of squares; otherwise, returns the current residual sum of squares.
*
* ## Notes
*
* -   If provided `NaN`, the value is ignored, and the accumulator function returns the current residual sum of squares.
*
* @param x - value
* @param y - value
* @returns residual sum of squares
*/
type accumulator = ( x?: number, y?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes the residual sum of squares, ignoring `NaN` values.
*
* @returns accumulator function
*
* @example
* var accumulator = incrnanrss();
*
* var r = accumulator();
* // returns null
*
* r = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* r = accumulator( -5.0, 2.0 );
* // returns 50.0
*
* r = accumulator( NaN, 3.0 );
* // returns 50.0
*
* r = accumulator( 5.0, NaN );
* // returns 50.0
*
* r = accumulator();
* // returns 50.0
*/
declare function incrnanrss(): accumulator;


// EXPORTS //

export = incrnanrss;
