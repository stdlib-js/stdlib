/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* If provided a value, returns an updated count; otherwise, returns the current count.
*
* @param x - value
* @returns count
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a count, ignoring `NaN` values.
*
* @returns accumulator function
*
* @example
* var accumulator = incrnancount();
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 1
*
* v = accumulator( -5.0 );
* // returns 2
*
* v = accumulator();
* // returns 2
*/
declare function incrnancount(): accumulator;


// EXPORTS //

export = incrnancount;
