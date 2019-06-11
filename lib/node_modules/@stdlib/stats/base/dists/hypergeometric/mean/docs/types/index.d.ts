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
* Returns the expected value of a hypergeometric distribution.
*
* ## Notes
*
* -   If provided a population size `N`, subpopulation size `K` or draws `n` which is not a nonnegative integer, the function returns `NaN`.
* -   If the number of draws `n` or subpopulation size `K` exceed population size `N`, the function returns `NaN`.
*
* @param N - population size
* @param K - subpopulation size
* @param n - number of draws
* @returns expected value
*
* @example
* var v = mean( 16, 11, 4 );
* // returns 2.75
*
* @example
* var v = mean( 2, 1, 1 );
* // returns 0.5
*
* @example
* var v = mean( 10, 5, 12 );
* // returns NaN
*
* @example
* var v = mean( 10.3, 10, 4 );
* // returns NaN
*
* @example
* var v = mean( 10, 5.5, 4 );
* // returns NaN
*
* @example
* var v = mean( 10, 5, 4.5 );
* // returns NaN
*
* @example
* var v = mean( NaN, 10, 4 );
* // returns NaN
*
* @example
* var v = mean( 20, NaN, 4 );
* // returns NaN
*
* @example
* var v = mean( 20, 10, NaN );
* // returns NaN
*/
declare function mean( N: number, K: number, n: number ): number;


// EXPORTS //

export = mean;
