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
* Return a string giving the literal bit representation of a single-precision floating-point number.
*
* @module @stdlib/number/float32/base/to-binary-string
*
* @example
* var toBinaryStringf = require( '@stdlib/number/float32/base/to-binary-string' );
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
*
* var str = toBinaryStringf( toFloat32( 4.0 ) );
* // returns '01000000100000000000000000000000'
*
* str = toBinaryStringf( toFloat32( 3.141592653589793 ) );
* // returns '01000000010010010000111111011011'
*
* str = toBinaryStringf( toFloat32( -1.0e38 ) );
* // returns '11111110100101100111011010011001'
*
* str = toBinaryStringf( toFloat32( -3.14e-39 ) );
* // returns '10000000001000100011000100001011'
*
* str = toBinaryStringf( toFloat32( 1.4e-45 ) );
* // returns '00000000000000000000000000000001'
*
* str = toBinaryStringf( 0.0 );
* // returns '00000000000000000000000000000000'
*
* str = toBinaryStringf( -0.0 );
* // returns '10000000000000000000000000000000'
*
* str = toBinaryStringf( NaN );
* // returns '01111111110000000000000000000000'
*
* var PINF = require( '@stdlib/constants/float32/pinf' );
* str = toBinaryStringf( PINF );
* // returns '01111111100000000000000000000000'
*
* var NINF = require( '@stdlib/constants/float32/ninf' );
* str = toBinaryStringf( NINF );
* // returns '11111111100000000000000000000000'
*/

// MODULES //

var totoBinaryStringf = require( './main.js' );


// EXPORTS //

module.exports = totoBinaryStringf;
