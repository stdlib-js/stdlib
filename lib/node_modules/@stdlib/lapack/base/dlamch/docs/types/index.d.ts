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

// TypeScript Version: 4.1

/**
* Parameter type.
*/
type CMACH = 'E' | 'e' | 'S' | 's' | 'B' | 'b' | 'P' | 'p' | 'N' | 'n' | 'R' | 'r' | 'M' | 'm' | 'U' | 'u' | 'L' | 'l' | 'O' | 'o';

/**
* Determines double-precision floating-point machine parameters.
*
* ## Notes
*
* -   The `cmach` parameter is a string which specifies the double-precision machine parameter to be returned. The function recognizes the following characters:
*
*     -   `'E'`/`'e'`: (eps) relative machine precision.
*     -   `'S'`/`'s'`: (sfmin) safe minimum such that `1/sfmin` does not overflow.
*     -   `'B'`/`'b'`: (base) base of the machine (also known as the floating-point radix).
*     -   `'P'`/`'p'`: (prec) `eps*base`.
*     -   `'N'`/`'n'`: (t) number of (base) digits in the mantissa.
*     -   `'R'`/`'r'`: (rnd) `1.0` when rounding occurs in addition and `0.0` otherwise.
*     -   `'M'`/`'m'`: (emin) minimum exponent before (gradual) underflow.
*     -   `'U'`/`'u'`: (rmin) underflow threshold.
*     -   `'L'`/`'l'`: (emax) largest exponent before overflow.
*     -   `'O'`/`'o'`: (rmax) overflow threshold.
*
* @param cmach - specifies the value to be returned
* @returns machine parameter
*
* @example
* var out = dlamch( 'E' );
* // returns ~1.1102230246251565E-016
*
* out = dlamch( 'S' );
* // returns ~2.2250738585072014E-308
*
* out = dlamch( 'B' );
* // returns 2.0
*/
declare function dlamch( cmach: CMACH | string ): number;


// EXPORTS //

export = dlamch;
