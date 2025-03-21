/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Multiplies a single-precision floating-point number by an integer power of two.
*
* ## Notes
*
* -   If `frac` equals positive or negative `zero`, `NaN`, or positive or negative infinity, the function returns a value equal to `frac`.
*
* @param frac - fraction
* @param exp - exponent
* @returns single-precision floating-point number
*
* @example
* var x = ldexpf( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
* // returns 4.0
*
* @example
* var x = ldexpf( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
* // returns 1.0
*
* @example
* var x = ldexpf( 0.0, 20 );
* // returns 0.0
*
* @example
* var x = ldexpf( -0.0, 39 );
* // returns -0.0
*
* @example
* var x = ldexpf( NaN, -101 );
* // returns NaN
*
* @example
* var x = ldexpf( Infinity, 11 );
* // returns Infinity
*
* @example
* var x = ldexpf( -Infinity, -118 );
* // returns -Infinity
*/
declare function ldexpf( frac: number, exp: number ): number;


// EXPORTS //

export = ldexpf;
