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
* Computes the nth negaFibonacci number as a single-precision floating-point number.
*
* ## Notes
*
* -   The negaFibonacci numbers follow the recurrence relation `F_{n-2} = F_{n} - F_{n-1}` with seed values `F_0 = 0` and `F_{-1} = 1`.
* -   If `|n|` is greater than `36`, the function returns `NaN` as larger negaFibonacci numbers cannot be accurately represented due to limitations of single-precision floating-point format.
* -   If not provided a non-positive integer value, the function returns `NaN`.
*
* @param n - the negaFibonacci number to compute
* @returns negaFibonacci number
*
* @example
* var y = negafibonaccif( 0 );
* // returns 0
*
* @example
* var y = negafibonaccif( -1 );
* // returns 1
*
* @example
* var y = negafibonaccif( -2 );
* // returns -1
*
* @example
* var y = negafibonaccif( -3 );
* // returns 2
*
* @example
* var y = negafibonaccif( -4 );
* // returns -3
*
* @example
* var y = negafibonaccif( -5 );
* // returns 5
*
* @example
* var y = negafibonaccif( -6 );
* // returns -8
*
* @example
* var y = negafibonaccif( NaN );
* // returns NaN
*
* @example
* var y = negafibonaccif( -3.14 );
* // returns NaN
*/
declare function negafibonaccif( n: number ): number;


// EXPORTS //

export = negafibonaccif;
