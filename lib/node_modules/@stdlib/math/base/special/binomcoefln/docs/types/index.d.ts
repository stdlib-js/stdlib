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
* Computes the natural logarithm of the binomial coefficient of two integers.
*
* ## Notes
*
* -   If `k < 0`, the function returns negative infinity.
* -   The function returns `NaN` for non-integer `n` or `k`.
*
* @param n - input value
* @param k - second input value
* @returns function value
*
* @example
* var v = binomcoefln( 8, 2 );
* // returns ~3.332
*
* @example
* var v = binomcoefln( 0, 0 );
* // returns 0.0
*
* @example
* var v = binomcoefln( -4, 2 );
* // returns ~2.303
*
* @example
* var v = binomcoefln( 88, 3 );
* // returns ~11.606
*
* @example
* var v = binomcoefln( NaN, 3 );
* // returns NaN
*
* @example
* var v = binomcoefln( 5, NaN );
* // returns NaN
*
* @example
* var v = binomcoefln( NaN, NaN );
* // returns NaN
*/
declare function binomcoefln( n: number, k: number ): number;


// EXPORTS //

export = binomcoefln;
