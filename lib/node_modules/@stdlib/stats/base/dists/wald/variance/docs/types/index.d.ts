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
* Returns the variance for a Wald distribution with mean `mu` and shape parameter `lambda`.
*
* ## Notes
*
* -   If provided `mu <= 0` or `lambda <= 0`, the function returns `NaN`.
*
* @param mu - mean
* @param lambda - shape parameter
* @returns variance
*
* @example
* var y = variance( 2.0, 1.0 );
* // returns 8.0
*
* @example
* var y = variance( 4.0, 2.0 );
* // returns 32.0
*
* @example
* var y = variance( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = variance( 1.0, NaN );
* // returns NaN
*
* @example
* var y = variance( 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = variance( 1.0, 0.0 );
* // returns NaN
*/
declare function variance( mu: number, lambda: number ): number;


// EXPORTS //

export = variance;
