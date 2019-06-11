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
* Returns the skewness for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* ## Notes
*
* -   If provided `0 < alpha <= 3` and `s > 0`, the function returns positive infinity.
* -   If provided `alpha <= 0` or `s <= 0`, the function returns `NaN`.
*
* @param alpha - shape parameter
* @param s - scale parameter
* @param m - location parameter
* @returns skewness
*
* @example
* var y = skewness( 5.0, 2.0, 0.0 );
* // returns ~3.535
*
* @example
* var y = skewness( 5.0, 2.0, -5.0 );
* // returns ~3.535
*
* @example
* var y = skewness( 1.0, 1.0, 0.0 );
* // returns Infinity
*
* @example
* var y = skewness( NaN, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = skewness( 1.0, NaN, 0.0 );
* // returns NaN
*
* @example
* var y = skewness( 1.0, 1.0, NaN );
* // returns NaN
*/
declare function skewness( alpha: number, s: number, m: number ): number;


// EXPORTS //

export = skewness;
