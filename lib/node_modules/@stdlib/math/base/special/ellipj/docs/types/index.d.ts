/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Computes the Jacobi elliptic functions sn, cn, and dn.
*
* ## Notes
*
* -   The functions are evaluated using the [complete elliptic integral of the first kind](https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_first_kind) `K`.
*
* -   The `x` argument is converted to double-precision floating-point format.
*
* -   The returned values are exact for `m` values where `|m| < 2**-24`.
*
* -   The functions return `NaN` for `m >= 1`.
*
* -   When `m < 1`, the following relations hold
*
*     ```tex
*     \operatorname{sn}(x+x) = 2\operatorname{sn}(x)\operatorname{cn}(x)
*     \operatorname{cn}(x+x) = 1 - 2\operatorname{sn}(x)^{2}
*     \operatorname{dn}(x+x) = 1 - 2\operatorname{sn}(x)^{2}\operatorname{dn}(x)
*     ```
*
* @param m - parameter
* @param x - argument
* @returns array containing four elements corresponding to the Jacobi elliptic functions and the Jacobi amplitude `am`.
*
* @example
* var v = ellipj( 0.5, 0 );
* // returns [ ~0.479, ~0.878, 1 ]
*
* @example
* var v = ellipj( 0.5, -1.0 );
* // returns [ ~0.497, ~0.868, ~1.117 ]
*
* @example
* var v = ellipj( Infinity, 0.5 );
* // returns [ NaN, NaN, NaN ]
*
* @example
* var v = ellipj( -Infinity );
* // returns [ NaN, NaN, NaN ]
*
* @example
* var v = ellipj( NaN );
* // returns [ NaN, NaN, NaN ]
*/
declare function ellipj( m: number, x?: number ): Array<number>;


// EXPORTS //

export = ellipj;

