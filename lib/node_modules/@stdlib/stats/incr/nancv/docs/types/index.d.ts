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
* If provided a value, the accumulator function returns an updated accumulated value. If not provided a value, the accumulator function returns the current accumulated value.
*
* @param x - value
* @returns accumulated value or null
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes the coefficient of variation (CV), ignoring `NaN` values.
*
* @param mean - known mean
* @returns accumulator function
*
* @example
* var accumulator = incrnancv();
*
* var cv = accumulator();
* // returns null
*
* cv = accumulator( 2.0 );
* // returns 0.0
*
* cv = accumulator( 1.0 );
* // returns ~0.47
*
* cv = accumulator( NaN );
* // returns ~0.47
*
* cv = accumulator();
* // returns ~0.47
*
* @example
* var accumulator = incrnancv( 3.14 );
*/
declare function incrnancv( mean?: number ): accumulator;


// EXPORTS //

export = incrnancv;
