/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Evaluates the signum function for a single-precision floating-point number.
*
* ## Notes
*
* -   Table of results:
*
*     | Value | Sign  |
*     | ----- | ----- |
*     | x > 0 |    +1 |
*     | x < 0 |    -1 |
*     |     0 |     0 |
*     |    -0 |    -0 |
*     |   NaN |   NaN |
*
* @param x - input value
* @returns function value
*
* @example
* var sign = signumf( -5.0 );
* // returns -1.0
*
* @example
* var sign = signumf( 5.0 );
* // returns 1.0
*
* @example
* var sign = signumf( -0.0 );
* // returns -0.0
*
* @example
* var sign = signumf( 0.0 );
* // returns 0.0
*
* @example
* var sign = signumf( NaN );
* // returns NaN
*/
declare function signumf( x: number ): number;


// EXPORTS //

export = signumf;
