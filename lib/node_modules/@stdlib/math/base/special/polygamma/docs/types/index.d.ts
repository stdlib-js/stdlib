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
* Evaluates the polygamma function.
*
* ## Notes
*
* -   If `n` is not a nonnegative integer, the function returns `NaN`.
* -   If `x` is zero or a negative integer, the function returns `NaN`.
*
* @param n - order of derivative
* @param x - input value
* @returns (n+1)'th derivative
*
* @example
* var v = polygamma( 3, 1.2 );
* // returns ~3.245
*
* @example
* var v = polygamma( 5, 1.2 );
* // returns ~41.39
*
* @example
* var v = polygamma( 3, -4.9 );
* // returns ~60014.239
*
* @example
* var v = polygamma( 2.5, -1.2 );
* // returns NaN
*
* @example
* var v = polygamma( -1, 5.3 );
* // returns NaN
*
* @example
* var v = polygamma( 2, -2.0 );
* // returns NaN
*
* @example
* var v = polygamma( NaN, 2.1 );
* // returns NaN
*
* @example
* var v = polygamma( 1, NaN );
* // returns NaN
*
* @example
* var v = polygamma( NaN, NaN );
* // returns NaN
*/
declare function polygamma( n: number, x: number ): number;


// EXPORTS //

export = polygamma;
