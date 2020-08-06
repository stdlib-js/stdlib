/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Computes the nth Tribonacci number.
*
* ## Notes
*
* -   If `n` is greater than `63`, the function returns `NaN`, as larger Tribonacci numbers cannot be accurately represented due to limitations of double-precision floating-point format.
* -   If not provided a nonnegative integer value, the function returns `NaN`.
*
* @param n - the Tribonacci number to compute
* @returns Tribonacci number
*
* @example
* var y = tribonacci( 0 );
* // returns 0
*
* @example
* var y = tribonacci( 1 );
* // returns 0
*
* @example
* var y = tribonacci( 2 );
* // returns 1
*
* @example
* var y = tribonacci( 3 );
* // returns 1
*
* @example
* var y = tribonacci( 4 );
* // returns 2
*
* @example
* var y = tribonacci( 5 );
* // returns 4
*
* @example
* var y = tribonacci( 6 );
* // returns 7
*
* @example
* var y = tribonacci( NaN );
* // returns NaN
*
* @example
* var y = tribonacci( 3.14 );
* // returns NaN
*
* @example
* var y = tribonacci( -1.0 );
* // returns NaN
*/
declare function tribonacci( n: number ): number;


// EXPORTS //

export = tribonacci;
