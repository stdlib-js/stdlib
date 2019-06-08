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
* Returns the variance of a hypergeometric distribution.
*
* ## Notes
*
* -   If provided a population size `N`, subpopulation size `K` or draws `n` which is not a nonnegative integer, the function returns `NaN`.
* -   If the number of draws `n` or subpopulation size `K` exceed population size `N`, the function returns `NaN`.
*
* @param N - population size
* @param K - subpopulation size
* @param n - number of draws
* @returns variance
*
* @example
* var v = variance( 16, 11, 4 );
* // returns ~0.688
*
* @example
* var v = variance( 2, 1, 1 );
* // returns 0.25
*
* @example
* var v = variance( 10, 5, 12 );
* // returns NaN
*
* @example
* var v = variance( 10.3, 10, 4 );
* // returns NaN
*
* @example
* var v = variance( 10, 5.5, 4 );
* // returns NaN
*
* @example
* var v = variance( 10, 5, 4.5 );
* // returns NaN
*
* @example
* var v = variance( NaN, 10, 4 );
* // returns NaN
*
* @example
* var v = variance( 20, NaN, 4 );
* // returns NaN
*
* @example
* var v = variance( 20, 10, NaN );
* // returns NaN
*/
declare function variance( N: number, K: number, n: number ): number;


// EXPORTS //

export = variance;
