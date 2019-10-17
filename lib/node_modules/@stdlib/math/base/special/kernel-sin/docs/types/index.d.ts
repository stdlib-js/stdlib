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
* Computes the sine of a number on `[-π/4, π/4]`.
*
* ## Notes
*
* -   For increased accuracy, the number for which the cosine should be evaluated can be supplied as a double-double number (i.e., a non-evaluated sum of two double-precision floating-point numbers `x` and `y`).
* -   The two numbers must satisfy `|y| < 0.5 * ulp( x )`.
*
* @param x - input value (in radians, assumed to be bounded by `~pi/4` in magnitude)
* @param y - tail of `x`
* @returns sine
*
* @example
* var v = kernelSin( 0.0, 0.0 );
* // returns ~0.0
*
* @example
* var v = kernelSin( 3.141592653589793/6.0, 0.0 );
* // returns ~0.5
*
* @example
* var v = kernelSin( 0.619, 9.279e-18 );
* // returns ~0.58
*
* @example
* var v = kernelSin( NaN, 0.0 );
* // returns NaN
*
* @example
* var v = kernelSin( 3.0, NaN );
* // returns NaN
*
* @example
* var v = kernelSin( NaN, NaN );
* // returns NaN
*/
declare function kernelSin( x: number, y: number ): number;


// EXPORTS //

export = kernelSin;
