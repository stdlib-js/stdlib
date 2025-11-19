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

/**
* If provided a value, returns an updated corrected sample standard deviation; otherwise, returns the current corrected sample standard deviation.
*
* @param x - value
* @returns corrected sample standard deviation
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a corrected sample standard deviation, ignoring `NaN` values.
*
* @param mu - known mean
* @returns accumulator function
*
* @example
* var accumulator = incrnanstdev();
*
* var s = accumulator();
* // returns null
*
* s = accumulator( 2.0 );
* // returns 0.0
*
* s = accumulator( -5.0 );
* // returns ~4.95
*
* s = accumulator( NaN );
* // returns ~4.95
*
* s = accumulator();
* // returns ~4.95
*/
declare function incrnanstdev( mu?: number ): accumulator;


// EXPORTS //

export = incrnanstdev;
