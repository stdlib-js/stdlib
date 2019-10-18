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
* Computes the regularized incomplete gamma function.
*
* ## Notes
*
* -   The `regularized` and `upper` parameters specify whether to evaluate the non-regularized and/or upper incomplete gamma functions, respectively.
* -   If provided `x < 0` or `s <= 0`, the function returns `NaN`.
*
* @param x - function parameter
* @param a - function parameter
* @param regularized - boolean indicating if the function should evaluate the regularized or non-regularized incomplete gamma functions (default: true)
* @param upper - boolean indicating if the function should return the upper tail of the incomplete gamma function (default: false)
* @returns function value
*
* @example
* var y = gammainc( 6.0, 2.0 )
* // returns ~0.9826
* @example
* var y = gammainc( 1.0, 2.0, true, true )
* // returns ~0.7358
* @example
* var y = gammainc( 7.0, 5.0 )
* // returns ~0.8270
* @example
* var y = gammainc( 7.0, 5.0, false )
* // returns ~19.8482
* @example
* var y = gammainc( NaN, 2.0 )
* // returns NaN
* @example
* var y = gammainc( 6.0, NaN )
* // returns NaN
*/
declare function gammainc( x: number, a: number, regularized?: boolean, upper?: boolean ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = gammainc;
