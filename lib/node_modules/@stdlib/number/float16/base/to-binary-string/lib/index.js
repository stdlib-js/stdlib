/**
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

'use strict';

/**
* Return a string giving the literal bit representation of a half-precision floating-point number.
*
* @module @stdlib/number/float16/base/to-binary-string
*
* @example
* var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
* var PINF = require( '@stdlib/constants/float16/pinf' );
* var NINF = require( '@stdlib/constants/float16/ninf' );
* var toBinaryString = require( '@stdlib/number/float16/base/to-binary-string' );
*
* var str = toBinaryString( toFloat16( 4.0 ) );
* // returns '0100010000000000'
*
* str = toBinaryString( toFloat16( 3.1415926 ) );
* // returns '0100001001001000'
*
* str = toBinaryString( toFloat16( -1.0e3 ) );
* // returns '1110001111010000'
*
* str = toBinaryString( toFloat16( -3.14e-6 ) );
* // returns '1000000000110101'
*
* str = toBinaryString( toFloat16( 1.4e-7 ) );
* // returns '0000000000000010'
*
* str = toBinaryString( 0.0 );
* // returns '0000000000000000'
*
* str = toBinaryString( -0.0 );
* // returns '1000000000000000'
*
* str = toBinaryString( NaN );
* // returns '0111111000000000'
*
* str = toBinaryString( PINF );
* // returns '0111110000000000'
*
* str = toBinaryString( NINF );
* // returns '1111110000000000'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
