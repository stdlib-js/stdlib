/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Evaluates the exponential function given a signed 32-bit integer exponent.
*
* ## Notes
*
* -   This function is not recommended for high-precision applications due to error accumulation.
*
* -   If provided a negative exponent, the function first computes the reciprocal of the base and then evaluates the exponential function. This can introduce significant error.
*
* @param x - base
* @param y - 32-bit integer exponent
* @returns function value
*
* @example
* var v = pow( 2.0, 3 );
* // returns 8.0
*
* @example
* var v = pow( 3.14, 0 );
* // returns 1.0
*
* @example
* var v = pow( 2.0, -2 );
* // returns 0.25
*
* @example
* var v = pow( 0.0, 0 );
* // returns 1.0
*
* @example
* var v = pow( -3.14, 1 );
* // returns -3.14
*
* @example
* var v = pow( NaN, 0 );
* // returns NaN
*/
declare function pow( x: number, y: number ): number;


// EXPORTS //

export = pow;
