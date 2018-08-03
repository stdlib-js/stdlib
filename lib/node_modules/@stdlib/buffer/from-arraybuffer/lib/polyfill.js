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

var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var Buffer = require( '@stdlib/buffer/ctor' );
var Uint8Array = require( '@stdlib/array/uint8' );
var fromArray = require( '@stdlib/buffer/from-array' );
var version = require( './node_version.js' );


// MAIN //

/**
* Allocates a buffer from an `ArrayBuffer`.
*
* ## Notes
*
* The behavior of this function varies across Node.js versions due to changes in the underlying Node.js APIs:
*
* -   `<3.0.0`: the function copies ArrayBuffer bytes to a new Buffer instance.
* -   `>=3.0.0`: if provided a byte offset, the function copies `ArrayBuffer` bytes to a new `Buffer` instance; otherwise, the function returns a view of an `ArrayBuffer` without copying the underlying memory.
* -   `<6.0.0`: if provided an empty ArrayBuffer, the function returns an empty Buffer which is **not** an ArrayBuffer view.
*
*
* @param {ArrayBuffer} buf - ArrayBuffer instance
* @param {NonNegativeInteger} [byteOffset=0] - index specifying the location of the first buffer byte
* @param {NonNegativeInteger} [length=buf.byteLength] - number of buffer bytes
* @throws {TypeError} first argument must be an ArrayBuffer
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {RangeError} second argument must not exceed number of bytes in input ArrayBuffer
* @throws {TypeError} last argument must be a nonnegative integer
* @throws {RangeError} last argument must not exceed number of bytes in input ArrayBuffer
* @returns {Buffer} new `Buffer` instance
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var ab = new ArrayBuffer( 10 );
*
* var buf = fromArrayBuffer( ab );
* // returns <Buffer>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var ab = new ArrayBuffer( 10 );
*
* var buf = fromArrayBuffer( ab, 2, 4 );
* // returns <Buffer>
*/
function fromArrayBuffer( buf, byteOffset, length ) {
	var len;
	if ( !isArrayBuffer( buf ) ) {
		throw new TypeError( 'invalid argument. First argument must be an ArrayBuffer. Value: `' + buf + '`' );
	}
	if ( arguments.length > 1 ) {
		if ( !isNonNegativeInteger( byteOffset ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a nonnegative integer. Value: `' + byteOffset + '`.' );
		}
		if ( byteOffset > buf.byteLength ) {
			throw new RangeError( 'invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `' + byteOffset + '`.' );
		}
		if ( arguments.length > 2 ) {
			if ( !isNonNegativeInteger( length ) ) {
				throw new TypeError( 'invalid argument. Last argument must be a nonnegative integer. Value: `' + length + '`.' );
			}
			if ( length > buf.byteLength ) {
				throw new RangeError( 'invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `' + length + '`.' );
			}
			len = length;
		} else {
			len = buf.byteLength - byteOffset;
		}
		return fromArray( new Uint8Array( buf, byteOffset, len ) );
	}
	if ( version < 3 ) {
		return fromArray( new Uint8Array( buf ) );
	}
	// Address Node <= v5.x where providing an empty ArrayBuffer throws an error:
	if ( buf.byteLength === 0 ) {
		return new Buffer( [] ); // eslint-disable-line no-buffer-constructor
	}
	return new Buffer( buf ); // eslint-disable-line no-buffer-constructor
}


// EXPORTS //

module.exports = fromArrayBuffer;
