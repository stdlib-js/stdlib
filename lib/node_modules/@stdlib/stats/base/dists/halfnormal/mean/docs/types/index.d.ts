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
* Returns the expected value for a half-normal distribution with scale parameter `sigma`.
*
* ## Notes
*
* -   If provided `sigma <= 0`, the function returns `NaN`.
*
* @param sigma - scale parameter
* @returns expected value
*
* @example
* var y = mean( 1.0 );
* // returns ~0.79788
*
* @example
* var y = mean( 5.0 );
* // returns ~3.98942
*
* @example
* var y = mean( NaN );
* // returns NaN
*
* @example
* var y = mean( 0.0 );
* // returns NaN
*/
declare function mean( sigma: number ): number;


// EXPORTS //

export = mean;
