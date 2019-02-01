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
* Computes the half-value coversed cosine.
*
* ## Notes
*
* -   The half-value coversed cosine is defined as `(1 + sin(x)) / 2`.
*
* @param x - input value (in radians)
* @returns half-value coversed cosine
*
* @example
* var v = hacovercos( 0.0 );
* // returns 0.5
*
* @example
* var v = hacovercos( 3.141592653589793/2.0 );
* // returns 1.0
*
* @example
* var v = hacovercos( -3.141592653589793/6.0 );
* // returns 0.25
*
* @example
* var v = hacovercos( NaN );
* // returns NaN
*/
declare function hacovercos( x: number ): number;


// EXPORTS //

export = hacovercos;
