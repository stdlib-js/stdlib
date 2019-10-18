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
* Evaluates the incomplete beta function.
*
* ## Notes
*
* -   The `regularized` and `upper` parameters specify whether to evaluate the non-regularized and/or upper incomplete beta functions, respectively.
* -   If provided `x < 0` or `x > 1`, the function returns `NaN`.
* -   If provided `a < 0` or `b < 0`, the function returns `NaN`.
*
* @param x - function parameter
* @param a - function parameter
* @param b - function parameter
* @param regularized - boolean indicating if the function should evaluate the regularized or non-regularized incomplete beta function (default: true)
* @param upper - boolean indicating if the function should return the upper tail of the incomplete beta function (default: false)
* @returns function value
*
* @example
* var y = betainc( 0.5, 2.0, 2.0 );
* // returns 0.5
*
* @example
* var y = betainc( 0.5, 2.0, 2.0, false );
* // returns ~0.083
*
* @example
* var y = betainc( 0.2, 1.0, 2.0 );
* // returns 0.36
*/
declare function betainc( x: number, a: number, b: number, regularized?: boolean, upper?: boolean ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = betainc;
