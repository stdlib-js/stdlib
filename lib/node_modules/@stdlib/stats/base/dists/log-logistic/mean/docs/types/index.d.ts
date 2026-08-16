/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Returns the expected value of a log-logistic distribution with scale parameter `alpha` and shape parameter `beta`.
*
* ## Notes
*
* -   If provided `alpha <= 0`, the function returns `NaN`.
* -   If provided `beta <= 1`, the function returns `NaN`.
*
* @param alpha - scale parameter
* @param beta - shape parameter
* @returns expected value
*
* @example
* var y = mean( 1.0, 2.0 );
* // returns ~1.571
*
* @example
* var y = mean( 4.0, 3.0 );
* // returns ~4.837
*
* @example
* var y = mean( 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = mean( NaN, 2.0 );
* // returns NaN
*
* @example
* var y = mean( 2.0, NaN );
* // returns NaN
*
* @example
* var y = mean( -1.0, 2.0 );
* // returns NaN
*
* @example
* var y = mean( 2.0, -1.0 );
* // returns NaN
*/
declare function mean( alpha: number, beta: number ): number;


// EXPORTS //

export = mean;
