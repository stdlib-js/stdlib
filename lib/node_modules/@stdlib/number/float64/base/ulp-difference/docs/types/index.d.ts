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
* Computes the number of representable double-precision floating-point values that separate two double-precision floating-point numbers along the real number line.
*
* ## Notes
*
* -   Adjacent double-precision floating-point numbers differ by 1 ulp (unit in the last place).
* -   Signed zeros differ only in the sign bit but are considered numerically equal, and thus their ULP difference is 0.
*
* @param x - first input value
* @param y - second input value
* @returns result
*
* @example
* var EPS = require( '@stdlib/constants/float64/eps' );
*
* var d = ulpdiff( 1.0, 1.0+EPS );
* // returns 1.0
*
* d = ulpdiff( 1.0+EPS, 1.0 );
* // returns 1.0
*
* d = ulpdiff( 1.0, 1.0+EPS+EPS );
* // returns 2.0
*
* d = ulpdiff( 1.0, NaN );
* // returns NaN
*
* d = ulpdiff( NaN, 1.0 );
* // returns NaN
*
* d = ulpdiff( NaN, NaN );
* // returns NaN
*/
declare function ulpdiff( x: number, y: number ): number;


// EXPORTS //

export = ulpdiff;
