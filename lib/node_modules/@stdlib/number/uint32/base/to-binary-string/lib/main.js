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

// MODULES //

var lpad = require( '@stdlib/string/left-pad' );
var div2 = require( './div2.js' );


// VARIABLES //

var NBITS = 32;


// MAIN //

/**
* Returns a string giving the literal bit representation of an unsigned 32-bit integer.
*
* @param {uinteger32} x - input value
* @returns {BinaryString} bit representation
*
* @example
* var a = new Uint32Array( [ 1 ] );
* var str = toBinaryString( a[0] );
* // returns '00000000000000000000000000000001'
*
* @example
* var a = new Uint32Array( [ 4 ] );
* var str = toBinaryString( a[0] );
* // returns '00000000000000000000000000000100'
*
* @example
* var a = new Uint32Array( [ 9 ] );
* var str = toBinaryString( a[0] );
* // returns '00000000000000000000000000001001'
*/
function toBinaryString( x ) {
	var b;

	// Convert the input value to a bit string:
	b = div2( x );

	// Left pad the bit string to ensure 32 bits are represented:
	b = lpad( b, NBITS, '0' );

	return b;
}


// EXPORTS //

module.exports = toBinaryString;
