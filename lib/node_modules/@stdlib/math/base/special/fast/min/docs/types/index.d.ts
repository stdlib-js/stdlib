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
* Returns the minimum value.
*
* ## Notes
*
* -   The function ignores the sign of `0` and does not check for `NaN` arguments.
*
* @param x - first number
* @param y - second number
* @returns minimum value
*
* @example
* var v = min( 3.14, 4.2 );
* // returns 3.14
*
* @example
* var v = min( 3.14, NaN );
* // returns NaN
*
* @example
* var v = min( NaN, 3.14 );
* // returns 3.14
*
* @example
* var v = min( -0.0, +0.0 );
* // returns +0.0
*
* @example
* var v = min( +0.0, -0.0 );
* // returns -0.0
*/
declare function min( x: number, y: number ): number;


// EXPORTS //

export = min;
