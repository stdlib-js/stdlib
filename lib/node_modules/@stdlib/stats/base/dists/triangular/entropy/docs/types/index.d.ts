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
* Returns the differential entropy of a triangular distribution.
*
* ## Notes
*
* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
*
* @param a - minimum support
* @param b - maximum support
* @param c - mode
* @returns entropy
*
* @example
* var v = entropy( 0.0, 1.0, 0.5 );
* // returns ~-0.193
*
* @example
* var v = entropy( 4.0, 12.0, 9.0 );
* // returns ~1.886
*
* @example
* var v = entropy( -4.0, 4.0, -1.0 );
* // returns ~1.886
*
* @example
* var v = entropy( 1.0, -0.1, 0.5 );
* // returns NaN
*
* @example
* var v = entropy( 0.0, 1.0, 2.0 );
* // returns NaN
*
* @example
* var v = entropy( NaN, 4.0, 2.0 );
* // returns NaN
*
* @example
* var v = entropy( 0.0, NaN, 2.0 );
* // returns NaN
*
* @example
* var v = entropy( 0.0, 4.0, NaN );
* // returns NaN
*/
declare function entropy( a: number, b: number, c: number ): number;


// EXPORTS //

export = entropy;
