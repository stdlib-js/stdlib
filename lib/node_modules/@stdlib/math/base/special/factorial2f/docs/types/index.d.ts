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
* Evaluates the double factorial of `n` as a single-precision floating-point number.
*
* ## Notes
*
* -   If `n` is greater than `56`, the function returns `NaN`, as larger double factorial values cannot be accurately represented due to limitations of single-precision floating-point format.
* -   If not provided a nonnegative integer value, the function returns `NaN`.
*
* @param n - input value
* @returns double factorial
*
* @example
* var v = factorial2f( 3 );
* // returns 3
*
* @example
* var v = factorial2f( 4 );
* // returns 8
*
* @example
* var v = factorial2f( 57 );
* // returns Infinity
*
* @example
* var v = factorial2f( -10 );
* // returns NaN
*
* @example
* var v = factorial2f( NaN );
* // returns NaN
*/
declare function factorial2f( n: number ): number;


// EXPORTS //

export = factorial2f;

