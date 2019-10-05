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
* Computes the least common multiple (lcm).
*
* ## Notes
*
* -   If either `a` or `b` is `0`, the function returns `0`.
* -   Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.
*
* @param a - integer
* @param b - integer
* @returns least common multiple
*
* @example
* var v = lcm( 21, 6 );
* // returns 42
*
* @example
* var v = lcm( 3.14, 6 );
* // returns NaN
*
* @example
* var v = lcm( NaN, 6 );
* // returns NaN
*/
declare function lcm( a: number, b: number ): number;


// EXPORTS //

export = lcm;
