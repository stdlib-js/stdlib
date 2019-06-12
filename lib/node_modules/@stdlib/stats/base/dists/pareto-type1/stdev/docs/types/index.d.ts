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
* Returns the standard deviation of a Pareto (Type I) distribution.
*
* ## Notes
*
* -   If `0 < alpha <= 2` and `beta > 0`, the function returns positive infinity.
* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
*
* @param alpha - shape parameter
* @param beta - scale parameter
* @returns standard deviation
*
* @example
* var v = stdev( 4.0, 12.0 );
* // returns ~5.657
*
* @example
* var v = stdev( 8.0, 2.0 );
* // returns ~0.33
*
* @example
* var v = stdev( 1.0, 1.0 );
* // returns Infinity
*
* @example
* var v = stdev( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = stdev( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = stdev( 2.0, NaN );
* // returns NaN
*
* @example
* var v = stdev( NaN, 2.0 );
* // returns NaN
*/
declare function stdev( alpha: number, beta: number ): number;


// EXPORTS //

export = stdev;
