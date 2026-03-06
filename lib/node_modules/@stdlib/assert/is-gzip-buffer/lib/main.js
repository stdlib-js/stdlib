/**
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

'use strict';

// MODULES //

var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var isBuffer = require( '@stdlib/assert/is-buffer' );


// MAIN //

/**
* Tests if a value is a gzip buffer (or Uint8Array).
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is a gzip buffer
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var buf = new Uint8Array( 20 );
* buf[ 0 ] = 31;  // 0x1f => magic number
* buf[ 1 ] = 139; // 0x8b
* buf[ 2 ] = 8;   // 0x08 => compression method
*
* var bool = isgzipBuffer( buf );
* // returns true
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var bool = isgzipBuffer( new Uint8Array( 20 ) );
* // returns false
*
* @example
* var bool = isgzipBuffer( [] );
* // returns false
*/
function isgzipBuffer( value ) {
	if ( !isUint8Array( value ) && !isBuffer( value ) ) {
		return false;
	}
	if ( value.length < 19 ) { // 10-byte header + 8-byte footer + payload
		return false;
	}
	return (
		// Check for expected magic number:
		value[ 0 ] === 0x1F &&
		value[ 1 ] === 0x8B &&

		// Check for expected compression method:
		value[ 2 ] === 0x08
	);
}


// EXPORTS //

module.exports = isgzipBuffer;
