/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* If provided a value, returns an updated minimum value; otherwise, returns the current minimum value.
*
* @param x - value
* @returns minimum value
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a minimum value, ignoring `NaN` values.
*
* @returns accumulator function
*
* @example
* var accumulator = incrnanmin();
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 3.14 );
* // returns 3.14
*
* m = accumulator( NaN );
* // returns 3.14
*
* m = accumulator( -5.0 );
* // returns -5.0
*
* m = accumulator( 10.1 );
* // returns -5.0
*
* m = accumulator( NaN );
* // returns -5.0
*
* m = accumulator();
* // returns -5.0
*/
declare function incrnanmin(): accumulator;


// EXPORTS //

export = incrnanmin;
