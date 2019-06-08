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
* Returns an integer corresponding to the unbiased exponent of a single-precision floating-point number.
*
* @param x - single-precision floating-point number
* @returns unbiased exponent
*
* @example
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
* var exp = exponentf( toFloat32( 3.14e34 ) ); // => 2**114 ~ 2.08e34
* // returns 114
*
* @example
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
* var exp = exponentf( toFloat32( 3.14e-34 ) ); // => 2**-112 ~ 1.93e-34
* // returns -112
*
* @example
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
* var exp = exponentf( toFloat32( -3.14 ) );
* // returns 1
*
* @example
* var exp = exponentf( 0.0 );
* // returns -127
*
* @example
* var exp = exponentf( NaN );
* // returns 128
*/
declare function exponentf( x: number ): number;


// EXPORTS //

export = exponentf;
