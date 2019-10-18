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
* Inverts the lower gamma function; i.e., computes `xr` such that `P(a,xr) = p`.
*
* ## Notes
*
* -   In contrast to a more commonly used definition, the first argument is the probability `p` and the second argument is the scale factor `a`.
* -   By default, the function inverts the lower regularized incomplete gamma function, `P(x,a)`. To invert the upper function `Q(x,a)`, set the `upper` argument to `true`.
* -   If provided `p < 0` or `p > 1`, the function returns `NaN`.
*
* @param p - probability value
* @param a - scale parameter
* @param upper - boolean indicating if the function should invert the upper tail of the incomplete gamma function instead; i.e., compute `xr` such that `Q(a,xr) = p` (default: false)
* @returns function value of the inverse
*
* @example
* var y = gammaincinv( 0.5, 2.0 );
* // returns ~1.678
* @example
* var y = gammaincinv( 0.1, 10.0 );
* // returns ~6.221
* @example
* var y = gammaincinv( 0.75, 3.0 );
* // returns ~3.92
* @example
* var y = gammaincinv( 0.75, 3.0, true );
* // returns ~1.727
* @example
* var y = gammaincinv( 0.75, NaN );
* // returns NaN
* @example
* var y = gammaincinv( NaN, 3.0 );
* // returns NaN
*/
declare function gammaincinv( p: number, a: number, upper?: boolean ): number;


// EXPORTS //

export = gammaincinv;
