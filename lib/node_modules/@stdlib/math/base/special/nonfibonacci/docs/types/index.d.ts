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
* Computes the nth non-Fibonacci number.
*
* ## Notes
*
* -   If not provided a nonnegative integer value, the function returns `NaN`.
*
* @param n - the non-Fibonacci number to compute
* @returns non-Fibonacci number
*
* @example
* var v = nonfibonacci( 1 );
* // returns 4
*
* @example
* var v = nonfibonacci( 2 );
* // returns 6
*
* @example
* var v = nonfibonacci( 3 );
* // returns 7
*
* @example
* var v = nonfibonacci( NaN );
* // returns NaN
*
* @example
* var v = nonfibonacci( 3.14 );
* // returns NaN
*
* @example
* var v = nonfibonacci( -1 );
* // returns NaN
*/
declare function nonfibonacci( n: number ): number;


// EXPORTS //

export = nonfibonacci;
