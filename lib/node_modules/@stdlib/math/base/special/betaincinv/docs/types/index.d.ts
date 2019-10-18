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
* Computes the inverse of the lower incomplete beta function.
*
* ## Notes
*
* -   In contrast to a more commonly used definition, the first argument is the probability `p` and the second and third arguments are `a` and `b`, respectively.
* -   By default, the function inverts the lower regularized incomplete beta function. To invert the upper function, set the `upper` argument to `true`.
* -   If provided `NaN` as any argument, the function returns `NaN`.
* -   If provided `p < 0` or `p > 1`, the function returns `NaN`.
* -   If provided `a <= 0` or `b <= 0`, the function returns `NaN`.
*
* @param p - function parameter
* @param a - function parameter
* @param b - function parameter
* @param upper - boolean indicating if the function should return the inverse of the upper tail of the incomplete beta function (default: false)
* @returns function value
*
* @example
* var y = betaincinv( 0.2, 3.0, 3.0 );
* // returns ~0.327
*
* @example
* var y = betaincinv( 0.4, 3.0, 3.0 );
* // returns ~0.446
*
* @example
* var y = betaincinv( 0.4, 3.0, 3.0, true );
* // returns ~0.554
*
* @example
* var y = betaincinv( 0.4, 1.0, 6.0 );
* // returns ~0.082
*
* @example
* var y = betaincinv( 0.8, 1.0, 6.0 );
* // returns ~0.235
*/
declare function betaincinv( p: number, a: number, b: number, upper?: boolean ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = betaincinv;
