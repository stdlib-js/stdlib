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
* Computes the tangent of a number on `[-π/4, π/4]`.
*
* ## Notes
*
* -   For increased accuracy, the number for which the tangent should be evaluated can be supplied as a double-double number (i.e., a non-evaluated sum of two double-precision floating-point numbers `x` and `y`).
* -   The numbers `x` and `y` must satisfy `|y| < 0.5 * ulp( x )`.
* -   If either `x` or `y` is `NaN`, the function returns `NaN`.
*
* @param x - input value (in radians, assumed to be bounded by ~π/4 in magnitude)
* @param y - tail of `x`
* @param k - indicates whether tan (if k = 1) or -1/tan (if k = -1) is returned
* @returns tangent
*
* @example
* var out = kernelTan( 3.141592653589793/4.0, 0.0, 1 );
* // returns ~1.0
*
* @example
* var out = kernelTan( 3.141592653589793/4.0, 0.0, -1 );
* // returns ~-1.0
*
* @example
* var out = kernelTan( 3.141592653589793/6.0, 0.0, 1 );
* // returns ~0.577
*
* @example
* var out = kernelTan( 0.664, 5.288e-17, 1 );
* // returns ~0.783
*
* @example
* var out = kernelTan( NaN, 0.0, 1 );
* // returns NaN
*
* @example
* var out = kernelTan( 3.0, NaN, 1 );
* // returns NaN
*
* @example
* var out = kernelTan( NaN, NaN, 1 );
* // returns NaN
*/
declare function kernelTan( x: number, y: number, k: -1 | 1 ): number;


// EXPORTS //

export = kernelTan;
