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
* Returns the standard deviation of a binomial distribution.
*
* ## Notes
*
* -   If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.
* -   If `p < 0` or `p > 1`, the function returns `NaN`.
*
* @param n - number of trials
* @param p - success probability
* @returns standard deviation
*
* @example
* var v = stdev( 100, 0.1 );
* // returns 3.0
*
* @example
* var v = stdev( 20, 0.5 );
* // returns ~2.236
*
* @example
* var v = stdev( 10.3, 0.5 );
* // returns NaN
*
* @example
* var v = stdev( 20, 1.1 );
* // returns NaN
*
* @example
* var v = stdev( 20, NaN );
* // returns NaN
*/
declare function stdev( n: number, p: number ): number;


// EXPORTS //

export = stdev;
