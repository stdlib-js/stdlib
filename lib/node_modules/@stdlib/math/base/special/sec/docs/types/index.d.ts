/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Computes the secant of a number.
*
* @param x - input value (in radians)
* @returns secant
*
* @example
* var v = sec( 0.0 );
* // returns 1.0
*
* @example
* var v = sec( 3.141592653589793/2.0 );
* // returns 16331239353195370.0
*
* @example
* var v = sec( -3.141592653589793/3.0 );
* // returns ~1.9999999999999996
*
* @example
* var v = sec( NaN );
* // returns NaN
*/
declare function sec( x: number ): number;


// EXPORTS //

export = sec;
