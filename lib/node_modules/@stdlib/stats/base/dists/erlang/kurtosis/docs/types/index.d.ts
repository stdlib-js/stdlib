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
* Returns the excess kurtosis of an Erlang distribution.
*
* ## Notes
*
* -   If not provided a positive integer for `k`, the function returns `NaN`.
* -   If provided a non-positive value for `lambda`, the function returns `NaN`.
*
* @param k - shape parameter
* @param lambda - rate parameter
* @returns excess kurtosis
*
* @example
* var v = kurtosis( 1, 1.0 );
* // returns 6.0
*
* @example
* var v = kurtosis( 4, 12.0 );
* // returns 1.5
*
* @example
* var v = kurtosis( 8, 2.0 );
* // returns 0.75
*
* @example
* var v = kurtosis( 1.5, 2.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 1, -0.1 );
* // returns NaN
*
* @example
* var v = kurtosis( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 2, NaN );
* // returns NaN
*
* @example
* var v = kurtosis( NaN, 2.0 );
* // returns NaN
*/
declare function kurtosis( k: number, lambda: number ): number;


// EXPORTS //

export = kurtosis;
