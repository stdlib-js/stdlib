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
* Computes the sum of two unsigned 32-bit integers `x` and `y`.
*
* ## Notes
*
* -   The function performs C-like addition of two unsigned 32-bit integers, including wraparound semantics.
*
* @param x - first input value
* @param y - second input value
* @returns sum
*
* @example
* var v = add( 1>>>0, 5>>>0 );
* // returns 6
*
* @example
* var v = add( 2>>>0, 5>>>0 );
* // returns 7
*
* @example
* var v = add( 0>>>0, 5>>>0 );
* // returns 5
*/
declare function add( x: number, y: number ): number;


// EXPORTS //

export = add;
