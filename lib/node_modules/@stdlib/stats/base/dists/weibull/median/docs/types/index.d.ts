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
* Returns the median of a Weibull distribution.
*
* ## Notes
*
* -   If `k <= 0` or `lambda <= 0`, the function returns `NaN`.
*
* @param k - shape parameter
* @param lambda - scale parameter
* @returns median
*
* @example
* var v = median( 1.0, 1.0 );
* // returns ~0.693
*
* @example
* var v = median( 4.0, 12.0 );
* // returns ~10.949
*
* @example
* var v = median( 8.0, 2.0 );
* // returns ~1.91
*
* @example
* var v = median( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = median( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = median( 2.0, NaN );
* // returns NaN
*
* @example
* var v = median( NaN, 2.0 );
* // returns NaN
*/
declare function median( k: number, lambda: number ): number;


// EXPORTS //

export = median;
