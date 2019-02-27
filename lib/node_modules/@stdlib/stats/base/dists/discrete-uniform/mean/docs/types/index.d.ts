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
* Returns the expected value of a discrete uniform distribution.
*
* ## Notes
*
* -   If `a` or `b` is not an integer value, the function returns `NaN`.
* -   If provided `a >= b`, the function returns `NaN`.
*
* @param a - minimum support
* @param b - maximum support
* @returns expected value
*
* @example
* var v = mean( 0, 1 );
* // returns 0.5
*
* @example
* var v = mean( -4, 4 );
* // returns 0.0
*
* @example
* var v = mean( 0, 10 );
* // returns 5.0
*
* @example
* var v = mean( 1, -0.1 );
* // returns NaN
*
* @example
* var v = mean( -0.1, 1 );
* // returns NaN
*
* @example
* var v = mean( 2, NaN );
* // returns NaN
*
* @example
* var v = mean( NaN, 2 );
* // returns NaN
*/
declare function mean( a: number, b: number ): number;


// EXPORTS //

export = mean;
