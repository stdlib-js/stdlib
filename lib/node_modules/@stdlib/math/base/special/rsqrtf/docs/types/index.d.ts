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
* Computes the reciprocal square root of a single-precision floating-point number.
*
* ## Notes
*
* -   For `x < 0`, the reciprocal square root is not defined.
*
* @param x - input value
* @returns reciprocal square root of `x`
*
* @example
* var v = rsqrtf( 4.0 );
* // returns 0.5
*
* @example
* var v = rsqrtf( 0.0 );
* // returns Infinity
*
* @example
* var v = rsqrtf( Infinity );
* // returns 0.0
*
* @example
* var v = rsqrtf( -4.0 );
* // returns NaN
*
* @example
* var v = rsqrtf( NaN );
* // returns NaN
*/
declare function rsqrtf( x: number ): number;


// EXPORTS //

export = rsqrtf;
