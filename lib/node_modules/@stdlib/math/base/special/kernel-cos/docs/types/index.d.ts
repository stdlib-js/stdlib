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
* Computes the cosine of a number on `[-π/4, π/4]`.
*
* ## Notes
*
* -   For increased accuracy, the number for which the cosine should be evaluated can be supplied as a double-double number (i.e., a non-evaluated sum of two double-precision floating-point numbers `x` and `y`).
* -   The two numbers must satisfy `|y| < 0.5 * ulp( x )`.
*
* @param x - input value (in radians, assumed to be bounded by ~pi/4 in magnitude)
* @param y - tail of `x`
* @returns cosine
*
* @example
* var v = kernelCos( 0.0, 0.0 );
* // returns ~1.0
*
* @example
* var v = kernelCos( 3.141592653589793/6.0, 0.0 );
* // returns ~0.866
*
* @example
* var v = kernelCos( 0.785, -1.144e-17 );
* // returns ~0.707
*
* @example
* var v = kernelCos( NaN, 0.0 );
* // returns NaN
*/
declare function kernelCos( x: number, y: number ): number;


// EXPORTS //

export = kernelCos;
