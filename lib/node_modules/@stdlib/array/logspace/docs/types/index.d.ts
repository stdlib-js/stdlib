/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/**
* Generates a logarithmically spaced numeric array.
*
* @param a - exponent of start value
* @param b - exponent of end value
* @param len - length of output array (default: 10)
* @throws third argument must be a nonnegative integer
* @returns logarithmically spaced numeric array
*
* @example
* var arr = logspace( 0, 2, 6 );
* // returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
*/
declare function logspace( x1: number, x2: number, len?: number ): Array<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = logspace;
