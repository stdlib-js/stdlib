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
* Returns a string giving the literal bit representation of a single-precision floating-point number.
*
* @param x - input value
* @returns bit representation
*
* @example
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
* var str = toBinaryStringf( toFloat32( 4.0 ) );
* // returns '01000000100000000000000000000000'
*
* @example
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
* var str = toBinaryStringf( toFloat32( 3.141592653589793 ) );
* // returns '01000000010010010000111111011011'
*
* @example
* var str = toBinaryStringf( toFloat32( -1e38 ) );
* // returns '11111110100101100111011010011001'
*
* @example
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
* var str = toBinaryStringf( toFloat32( -3.14e-39 ) );
* // returns '10000000001000100011000100001011'
*
* @example
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
* var str = toBinaryStringf( toFloat32( 1.4e-45 ) );
* // returns '00000000000000000000000000000001'
*
* @example
* var str = toBinaryStringf( 0.0 );
* // returns '00000000000000000000000000000000'
*
* @example
* var str = toBinaryStringf( -0.0 );
* // returns '10000000000000000000000000000000'
*
* @example
* var str = toBinaryStringf( NaN );
* // returns '01111111110000000000000000000000'
*
* @example
* var PINF = require( `@stdlib/constants/float32/pinf` );
* var str = toBinaryStringf( PINF );
* // returns '01111111100000000000000000000000'
*
* @example
* var NINF = require( `@stdlib/constants/float32/ninf` );
* var str = toBinaryStringf( NINF );
* // returns '11111111100000000000000000000000'
*/
declare function toBinaryStringf( x: number ): string;


// EXPORTS //

export = toBinaryStringf;
