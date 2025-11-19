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
* Multiplies two unsigned 8-bit integers `x` and `y`.
*
* ## Notes
*
* -   The function performs C-like multiplication of two unsigned 8-bit integers, including wraparound semantics.
*
* @param x - first input value
* @param y - second input value
* @returns result
*
* @example
* var v = mul( 5, 1 );
* // returns 5
*
* @example
* var v = mul( 5, 2 );
* // returns 10
*
* @example
* var v = mul( 5, 0 );
* // returns 0
*/
declare function mul( x: number, y: number ): number;


// EXPORTS //

export = mul;
