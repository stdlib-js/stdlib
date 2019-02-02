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
* Computes the nth negaLucas number.
*
* ## Notes
*
* -   The negaLucas numbers follow the recurrence relation `L_{n-2} = L_{n} - L_{n-1}` with seed values `L_0 = 2` and `L_{-1} = -1`.
* -   If `|n|` is greater than `76`, the function returns `NaN` as larger negaLucas numbers cannot be accurately represented due to limitations of double-precision floating-point format.
* -   If not provided a non-positive integer value, the function returns `NaN`.
*
* @param n - the negaLucas number to compute
* @returns negaLucas number
*
* @example
* var y = negalucas( 0 );
* // returns 2
*
* @example
* var y = negalucas( -1 );
* // returns -1
*
* @example
* var y = negalucas( -2 );
* // returns 3
*
* @example
* var y = negalucas( -3 );
* // returns -4
*
* @example
* var y = negalucas( -4 );
* // returns 7
*
* @example
* var y = negalucas( -5 );
* // returns -11
*
* @example
* var y = negalucas( -6 );
* // returns 18
*
* @example
* var y = negalucas( NaN );
* // returns NaN
*
* @example
* var y = negalucas( -3.14 );
* // returns NaN
*/
declare function negalucas( n: number ): number;


// EXPORTS //

export = negalucas;
