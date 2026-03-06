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
* Returns the excess kurtosis for a half-normal distribution with scale parameter `sigma`.
*
* ## Notes
*
* -   If provided `sigma <= 0`, the function returns `NaN`.
*
* @param sigma - scale parameter
* @returns excess kurtosis
*
* @example
* var y = kurtosis( 1.0 );
* // returns ~0.869
*
* @example
* var y = kurtosis( 3.0 );
* // returns ~0.869
*
* @example
* var y = kurtosis( NaN );
* // returns NaN
*
* @example
* var y = kurtosis( 0.0 );
* // returns NaN
*/
declare function kurtosis( sigma: number ): number;


// EXPORTS //

export = kurtosis;
