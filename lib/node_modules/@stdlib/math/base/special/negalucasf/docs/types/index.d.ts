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
* Computes the nth negaLucas number in single-precision floating-point format.
*
* ## Notes
*
* -   The negaLucas numbers follow the recurrence relation `L_{n-2} = L_{n} - L_{n-1}` with seed values `L_0 = 2` and `L_{-1} = -1`.
* -   If `|n|` is greater than `34`, the function returns `NaN` as larger negaLucas numbers cannot be accurately represented due to limitations of single-precision floating-point format.
* -   If not provided a non-positive integer value, the function returns `NaN`.
*
* @param n - the negaLucas number to compute
* @returns negaLucas number
*
* @example
* var y = negalucasf( 0 );
* // returns 2
*
* @example
* var y = negalucasf( -1 );
* // returns -1
*
* @example
* var y = negalucasf( -2 );
* // returns 3
*
* @example
* var y = negalucasf( -3 );
* // returns -4
*
* @example
* var y = negalucasf( -4 );
* // returns 7
*
* @example
* var y = negalucasf( -5 );
* // returns -11
*
* @example
* var y = negalucasf( -6 );
* // returns 18
*
* @example
* var y = negalucasf( NaN );
* // returns NaN
*
* @example
* var y = negalucasf( -3.14 );
* // returns NaN
*/
declare function negalucasf( n: number ): number;


// EXPORTS //

export = negalucasf;
