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
* Computes the multiplicative inverse of a double-precision floating-point number `x`.
*
* ## Notes
*
* -   The multiplicative inverse is defined as `1/x`.
*
* @param x - input value
* @returns multiplicative inverse
*
* @example
* var v = inv( -1.0 );
* // returns -1.0
*
* @example
* var v = inv( 2.0 );
* // returns 0.5
*
* @example
* var v = inv( 0.0 );
* // returns Infinity
*
* @example
* var v = inv( -0.0 );
* // returns -Infinity
*
* @example
* var v = inv( NaN );
* // returns NaN
*/
declare function inv( x: number ): number;


// EXPORTS //

export = inv;
