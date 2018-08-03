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

var pow = require( '@stdlib/math/base/special/pow' );


// VARIABLES //

var NBITS = 8;


// MAIN //

/**
* Creates an unsigned 8-bit integer from a literal bit representation.
*
* @param {BinaryString} bstr - string which is a literal bit representation
* @throws {Error} must provide a string with a length equal to `8`
* @returns {uinteger8} unsigned 8-bit integer
*
* @example
* var bstr = '01010101';
* var val = fromBinaryStringUint8( bstr );
* // returns 85
*
* @example
* var bstr = '00000000';
* var val = fromBinaryStringUint8( bstr );
* // returns 0
*
* @example
* var bstr = '00000010';
* var val = fromBinaryStringUint8( bstr );
* // returns 2
*
* @example
* var bstr = '11111111';
* var val = fromBinaryStringUint8( bstr );
* // returns 255
*/
function fromBinaryStringUint8( bstr ) {
	var sum;
	var i;
	if ( bstr.length !== NBITS ) {
		throw new Error( 'invalid argument. Input string must have a length equal to '+NBITS+'. Value: `'+bstr+'`.' );
	}
	sum = 0;
	for ( i = 0; i < bstr.length; i++ ) {
		if ( bstr[ i ] === '1' ) {
			sum += pow( 2, (NBITS-i-1) );
		}
	}
	return sum;
}


// EXPORTS //

module.exports = fromBinaryStringUint8;
