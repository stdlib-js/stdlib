/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Returns a string giving the literal bit representation of a half-precision floating-point number.
*
* @param x - input value
* @returns bit representation
*
* @example
* var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
*
* var str = toBinaryString( toFloat16( 4.0 ) );
* // returns '0100010000000000'
*
* @example
* var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
*
* var str = toBinaryString( toFloat16( 3.1415926 ) );
* // returns '0100001001001000'
*
* @example
* var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
*
* var str = toBinaryString( toFloat16( -1.0e3 ) );
* // returns '1110001111010000'
*
* @example
* var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
*
* var str = toBinaryString( toFloat16( -3.14e-6 ) );
* // returns '1000000000110101'
*
* @example
* var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
*
* var str = toBinaryString( toFloat16( 1.4e-7 ) );
* // returns '0000000000000010'
*
* @example
* var str = toBinaryString( 0.0 );
* // returns '0000000000000000'
*
* @example
* var str = toBinaryString( -0.0 );
* // returns '1000000000000000'
*
* @example
* var str = toBinaryString( NaN );
* // returns '0111111000000000'
*
* @example
* var PINF = require( '@stdlib/constants/float16/pinf' );
*
* var str = toBinaryString( PINF );
* // returns '0111110000000000'
*
* @example
* var NINF = require( '@stdlib/constants/float16/ninf' );
*
* var str = toBinaryString( NINF );
* // returns '1111110000000000'
*/
declare function toBinaryString( x: number ): string;


// EXPORTS //

export = toBinaryString;
