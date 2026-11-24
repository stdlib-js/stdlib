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
* Tests if two double-precision floating-point numbers are approximately equal within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   The function returns `false` if either input value is `NaN`.
* -   The function does not distinguish between `-0` and `+0`, treating them as equal.
*
* @param a - first input value
* @param b - second input value
* @param maxULP - maximum allowed ULP difference
* @returns boolean indicating whether two double-precision floating-point numbers are approximately equal within a specified number of ULPs
*
* @example
* var EPS = require( '@stdlib/constants/float64/eps' );
*
* var bool = isAlmostEqual( 1.0, 1.0+EPS, 1 );
* // returns true
*
* bool = isAlmostEqual( 1.0+EPS, 1.0, 1 );
* // returns true
*
* bool = isAlmostEqual( 1.0, 1.0+EPS+EPS, 1 );
* // returns false
*
* bool = isAlmostEqual( 1.0, 1.0+EPS, 0 );
* // returns false
*
* bool = isAlmostEqual( 0.0, -0.0, 0 );
* // returns true
*
* bool = isAlmostEqual( 1.0, NaN, 1 );
* // returns false
*
* bool = isAlmostEqual( NaN, NaN, 1 );
* // returns false
*/
declare function isAlmostEqual( a: number, b: number, maxULP: number ): boolean;


// EXPORTS //

export = isAlmostEqual;
