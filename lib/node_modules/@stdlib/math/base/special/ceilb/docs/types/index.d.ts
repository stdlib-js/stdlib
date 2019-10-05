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
* Rounds a numeric value to the nearest multiple of \\(b^n\\) toward positive infinity.
*
* ## Notes
*
* -   Due to floating-point rounding error, rounding may not be exact.
*
* @param x - input value
* @param n - integer power
* @param b - base
* @returns rounded value
*
* @example
* // Round a value to 4 decimal places:
* var v = ceilb( 3.141592653589793, -4, 10 );
* // returns 3.1416
*
* @example
* // If n = 0 or b = 1, `ceilb` behaves like `ceil`:
* var v = ceilb( 3.141592653589793, 0, 2 );
* // returns 4.0
*
* @example
* // Round a value to the nearest multiple of two toward positive infinity:
* var v = ceilb( 5.0, 1, 2 );
* // returns 6.0
*/
declare function ceilb( x: number, n: number, b: number ): number;


// EXPORTS //

export = ceilb;
