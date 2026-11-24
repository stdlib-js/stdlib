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
* Returns the standard deviation of a half-normal distribution.
*
* ## Notes
*
* -   If provided `σ <= 0`, the function returns `NaN`.
*
* @param sigma - scale parameter
* @returns standard deviation
*
* @example
* var v = stdev( 9.0 );
* // returns ~5.425
*
* @example
* var v = stdev( 2.0 );
* // returns ~1.2056
*
* @example
* var v = stdev( -0.2 );
* // returns NaN
*
* @example
* var v = stdev( NaN );
* // returns NaN
*/
declare function stdev( sigma: number ): number;


// EXPORTS //

export = stdev;
