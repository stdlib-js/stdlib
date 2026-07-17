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
* Returns the differential entropy of an anglit distribution (in nats).
*
* ## Notes
*
* -   If provided `sigma <= 0`, the function returns `NaN`.
* -   If provided `NaN` as any argument, the function returns `NaN`.
*
* @param mu - location parameter
* @param sigma - scale parameter
* @returns entropy
*
* @example
* var v = entropy( 0.0, 1.0 );
* // returns ~0.307
*
* @example
* var v = entropy( 0.0, 2.0 );
* // returns ~1.000
*
* @example
* var v = entropy( 1.0, 0.5 );
* // returns ~-0.386
*
* @example
* var v = entropy( 0.0, -1.0 );
* // returns NaN
*
* @example
* var v = entropy( NaN, 1.0 );
* // returns NaN
*
* @example
* var v = entropy( 0.0, NaN );
* // returns NaN
*/
declare function entropy( mu: number, sigma: number ): number;


// EXPORTS //

export = entropy;
