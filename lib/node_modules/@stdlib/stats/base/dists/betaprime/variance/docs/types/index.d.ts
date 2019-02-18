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
* Returns the variance of a beta prime distribution.
*
* ## Notes
*
* -   If `alpha <= 0` or `beta <= 2`, the function returns `NaN`.
*
* @param alpha - first shape parameter
* @param beta - second shape parameter
* @returns variance
*
* @example
* var v = variance( 1.0, 3.0 );
* // returns ~0.75
*
* @example
* var v = variance( 4.0, 12.0 );
* // returns ~0.05
*
* @example
* var v = variance( 8.0, 2.5 );
* // returns ~67.556
*
* @example
* var v = variance( 8.0, 2.0 );
* // returns NaN
*
* @example
* var v = variance( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = variance( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = variance( 2.0, NaN );
* // returns NaN
*
* @example
* var v = variance( NaN, 2.0 );
* // returns NaN
*/
declare function variance( alpha: number, beta: number ): number;


// EXPORTS //

export = variance;
