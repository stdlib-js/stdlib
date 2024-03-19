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
* Computes the cotangent of an angle measured in degrees
*
* @param x - input value (in degrees)
* @returns cotangent
 *
 * @example
 * var v = cotd( 0.0 );
 * // returns Infinity
 *
 * @example
 * var v = cotd( 60.0 );
 * // returns ~0.58
 *
 * @example
 * var v = cotd( 90.0 );
 * // returns 0.0
 *
 * @example
 * var v = cotd( NaN );
 * // returns NaN
*/
declare function cotd( x: number ): number;


// EXPORTS //

export = cotd;
