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
* Computes the principal square root of the product of π and a positive single-precision floating-point number.
*
* ## Notes
*
* -   For `x < 0`, the principal square root is not defined.
*
* @param x - input value
* @returns result
*
* @example
* var v = sqrtpif( 4.0 );
* // returns ~3.5449
*
* @example
* var v = sqrtpif( 10.0 );
* // returns ~5.60499
*
* @example
* var v = sqrtpif( 0.0 );
* // returns 0.0
*
* @example
* var v = sqrtpif( -4.0 );
* // returns NaN
*
* @example
* var v = sqrtpif( NaN );
* // returns NaN
*/
declare function sqrtpif( x: number ): number;


// EXPORTS //

export = sqrtpif;
