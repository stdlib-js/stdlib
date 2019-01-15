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
* Computes the base `b` logarithm of `x`.
*
* @param x - input value
* @param b - base
* @returns logarithm (base `b`)
*
* @example
* var v = log( 100.0, 10.0 );
* // returns 2.0
*
* @example
* var v = log( 16.0, 2.0 );
* // returns 4.0
*
* @example
* var v = log( 5.0, 1.0 );
* // returns Infinity
*
* @example
* var v = log( NaN, 2.0 );
* // returns NaN
*
* @example
* var v = log( 1.0, NaN );
* // returns NaN
*
* @example
* var v = log( -4.0, 2.0 );
* // returns NaN
*
* @example
* var v = log( 4.0, -2.0 );
* // returns NaN
*/
declare function log( x: number, b: number ): number;


// EXPORTS //

export = log;
