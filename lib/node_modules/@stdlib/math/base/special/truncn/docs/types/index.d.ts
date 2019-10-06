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
* Rounds a numeric value to the nearest multiple of `10^n` toward zero.
*
* ## Notes
*
* -   When operating on floating-point numbers in bases other than `2`, rounding to specified digits can be inexact.
*
* @param x - input value
* @param n - integer power of `10`
* @returns rounded value
*
* @example
* // Round a value to 4 decimal places:
* var v = truncn( 3.141592653589793, -4 );
* // returns 3.1415
*
* @example
* // If n = 0, `truncn` behaves like `trunc`:
* var v = truncn( 3.141592653589793, 0 );
* // returns 3.0
*
* @example
* // Round a value to the nearest thousand:
* var v = truncn( 12368.0, 3 );
* // returns 12000.0
*/
declare function truncn( x: number, n: number ): number;


// EXPORTS //

export = truncn;
