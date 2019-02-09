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
* Returns the differential entropy of a Rayleigh distribution.
*
* ## Notes
*
* -   If provided `σ < 0`, the function returns `NaN`.
*
* @param sigma - scale parameter
* @returns entropy
*
* @example
* var v = entropy( 9.0 );
* // returns ~3.139
*
* @example
* var v = entropy( 2.0 );
* // returns ~1.635
*
* @example
* var v = entropy( -0.2 );
* // returns NaN
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
declare function entropy( sigma: number ): number;


// EXPORTS //

export = entropy;
