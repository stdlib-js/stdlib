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
* Computes the squared absolute value of a single-precision floating-point number `x`.
*
* @param x - input value
* @returns squared absolute value
*
* @example
* var v = abs2f( -1.0 );
* // returns 1.0
*
* @example
* var v = abs2f( 2.0 );
* // returns 4.0
*
* @example
* var v = abs2f( 0.0 );
* // returns 0.0
*
* @example
* var v = abs2f( -0.0 );
* // returns 0.0
*
* @example
* var v = abs2f( NaN );
* // returns NaN
*/
declare function abs2f( x: number ): number;


// EXPORTS //

export = abs2f;
