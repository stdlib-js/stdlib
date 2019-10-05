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

/**
* Rounds a numeric value to the nearest multiple of \\(b^n\\) on a linear scale.
*
* ## Notes
*
* -   Due to floating-point rounding error, rounding may not be exact.
*
* @param x - input value
* @param n - integer power
* @param b - positive integer base
* @returns rounded value
*
* @example
* // Round a value to 2 decimal places:
* var v = roundb( 3.141592653589793, -2, 10 );
* // returns 3.14
*
* @example
* // If n = 0 or b = 1, `roundb` behaves like `round`:
* var v = roundb( 3.141592653589793, 0, 2 );
* // returns 3.0
*
* @example
* // Round a value to the nearest multiple of two:
* var v = roundb( 5.0, 1, 2 );
* // returns 6.0
*/
declare function roundb( x: number, n: number, b: number ): number;


// EXPORTS //

export = roundb;
