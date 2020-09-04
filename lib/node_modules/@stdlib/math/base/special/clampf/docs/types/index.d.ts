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
* Restricts a single-precision floating-point number to a specified range.
*
* @param v - input value
* @param min - minimum value
* @param max - maximum value
* @returns value restricted to a specified range
*
* @example
* var v = clampf( 3.14, 0.0, 5.0 );
* // returns 3.14
*
* v = clampf( -3.14, 0.0, 5.0 );
* // returns 0.0
*
* v = clampf( 10.0, 0.0, 5.0 );
* // returns 5.0
*
* v = clampf( -0.0, 0.0, 5.0 );
* // returns 0.0
*
* v = clampf( 0.0, -0.0, 5.0 );
* // returns 0.0
*
* v = clampf( NaN, 0.0, 5.0 );
* // returns NaN
*
* v = clampf( 0.0, NaN, 5.0 );
* // returns NaN
*
* v = clampf( 3.14, 0.0, NaN );
* // returns NaN
*/
declare function clampf( v: number, min: number, max: number ): number;


// EXPORTS //

export = clampf;
