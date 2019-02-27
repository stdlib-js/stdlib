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
* Returns the median for a Lévy distribution with location `mu` and scale `c`.
*
* ## Notes
*
* -   If provided `c <= 0`, the function returns `NaN`.
*
* @param mu - location parameter
* @param c - scale parameter
* @returns median
*
* @example
* var y = median( 0.0, 1.0 );
* // returns ~2.198
*
* @example
* var y = median( 5.0, 2.0 );
* // returns ~9.396
*
* @example
* var y = median( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = median( 0.0, NaN );
* // returns NaN
*
* @example
* var y = median( 0.0, 0.0 );
* // returns NaN
*/
declare function median( mu: number, c: number ): number;


// EXPORTS //

export = median;
