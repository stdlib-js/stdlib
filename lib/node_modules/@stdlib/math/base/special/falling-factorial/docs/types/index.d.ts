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
* Computes the falling factorial of `x` and `n`.
*
* ## Notes
*
* -   If not provided a nonnegative integer for `n`, the function returns `NaN`.
* -   If provided `NaN` as any argument, the function returns `NaN`.
*
* @param x - first function parameter
* @param n - second function parameter
* @returns function value
*
* @example
* var v = fallingFactorial( 0.9, 5 );
* // returns ~0.644
*
* @example
* var v = fallingFactorial( -9.0, 3 );
* // returns -990.0
*
* @example
* var v = fallingFactorial( 0.0, 2 );
* // returns 0.0
*
* @example
* var v = fallingFactorial( 3.0, -2 );
* // returns NaN
*/
declare function fallingFactorial( x: number, n: number ): number;


// EXPORTS //

export = fallingFactorial;
