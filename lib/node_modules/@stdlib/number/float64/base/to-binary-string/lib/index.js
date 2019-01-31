/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Return a string giving the literal bit representation of a double-precision floating-point number.
*
* @module @stdlib/number/float64/base/to-binary-string
*
* @example
* var toBinaryString = require( '@stdlib/number/float64/base/to-binary-string' );
*
* var str = toBinaryString( 4.0 );
* // returns '0100000000010000000000000000000000000000000000000000000000000000'
*
* str = toBinaryString( 3.141592653589793 );
* // returns '0100000000001001001000011111101101010100010001000010110100011000'
*
* str = toBinaryString( -1.0e308 );
* // returns '1111111111100001110011001111001110000101111010111100100010100000'
*
* str = toBinaryString( -3.14e-320 );
* // returns '1000000000000000000000000000000000000000000000000001100011010011'
*
* str = toBinaryString( 5.0e-324 );
* // returns '0000000000000000000000000000000000000000000000000000000000000001'
*
* str = toBinaryString( 0.0 );
* // returns '0000000000000000000000000000000000000000000000000000000000000000'
*
* str = toBinaryString( -0.0 );
* // returns '1000000000000000000000000000000000000000000000000000000000000000'
*
* str = toBinaryString( NaN );
* // returns '0111111111111000000000000000000000000000000000000000000000000000'
*
* str = toBinaryString( Infinity );
* // returns '0111111111110000000000000000000000000000000000000000000000000000'
*
* str = toBinaryString( -Infinity );
* // returns '1111111111110000000000000000000000000000000000000000000000000000'
*/

// MODULES //

var toBinaryString = require( './main.js' );


// EXPORTS //

module.exports = toBinaryString;
