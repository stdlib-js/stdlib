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
* Computes the sine of a number on \\( \[-\pi/4, \pi/4] \\) in single-precision floating-point format, where \\( \pi/4 \approx 0.785398164 \\).
*
* @param x - input value (in radians, assumed to be bounded by ~pi/4 in magnitude)
* @returns sine
*
* @example
* var v = kernelSinf( 0.0 );
* // returns ~0.0
*
* @example
* var v = kernelSinf( 3.141592653589793/6.0 );
* // returns ~0.5
*
* @example
* var v = kernelSinf( 0.619 );
* // returns ~0.580
*
* @example
* var v = kernelSinf( NaN );
* // returns NaN
*/
declare function kernelSinf( x: number ): number;


// EXPORTS //

export = kernelSinf;
