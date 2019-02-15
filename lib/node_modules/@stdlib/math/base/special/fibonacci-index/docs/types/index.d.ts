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
* Computes the Fibonacci number index.
*
* ## Notes
*
* -   If not provided a nonnegative integer value, the function returns `NaN`.
* -   If provided `F <= 1` or `NaN`, the function returns `NaN`.
*
* @param F - Fibonacci number
* @returns Fibonacci number index
*
* @example
* var n = fibonacciIndex( 0 );
* // returns NaN
*
* @example
* var n = fibonacciIndex( 1 );
* // returns NaN
*
* @example
* var n = fibonacciIndex( 2 );
* // returns 3
*
* @example
* var n = fibonacciIndex( 3 );
* // returns 4
*
* @example
* var n = fibonacciIndex( 5 );
* // returns 5
*
* @example
* var n = fibonacciIndex( 8 );
* // returns 6
*
* @example
* var n = fibonacciIndex( NaN );
* // returns NaN
*
* @example
* var n = fibonacciIndex( 3.14 );
* // returns NaN
*
* @example
* var n = fibonacciIndex( -1 );
* // returns NaN
*/
declare function fibonacciIndex( F: number ): number;


// EXPORTS //

export = fibonacciIndex;
