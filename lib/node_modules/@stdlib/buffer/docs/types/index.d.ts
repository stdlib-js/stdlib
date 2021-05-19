/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
import Buffer = require( '@stdlib/buffer/ctor' );
import array2buffer = require( '@stdlib/buffer/from-array' );
import arraybuffer2buffer = require( '@stdlib/buffer/from-arraybuffer' );
import copyBuffer = require( '@stdlib/buffer/from-buffer' );
import string2buffer = require( '@stdlib/buffer/from-string' );
import reviver = require( '@stdlib/buffer/reviver' );
import toJSON = require( '@stdlib/buffer/to-json' );

/**
* Interface describing the `buffer` namespace.
*/
interface Namespace {
	/**
	* Allocates a buffer having a specified number of bytes.
	*
	* ## Notes
	*
	* -   The underlying memory of returned `Buffer` instances is not initialized. Memory contents are unknown and may contain sensitive data.
	* -   When the size is less than half the pool size (specified on the `Buffer` constructor), memory is allocated from the `Buffer` pool for faster allocation of new `Buffer` instances.
	*
	*
	* @param size - number of bytes to allocate
	* @throws must provide a nonnegative integer
	* @returns new `Buffer` instance
	*
	* @example
	* var buf = ns.allocUnsafe( 10 );
	* // returns <Buffer>
	*/
	allocUnsafe: typeof allocUnsafe;

	/**
	* Buffer constructor.
	*
	* @example
	* var ctor = require( `@stdlib/buffer/ctor` );
	*
	* var b = new ctor( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*/
	Buffer: typeof Buffer;

	/**
	* Allocates a buffer using an octet array.
	*
	* @param arr - octet array
	* @returns new `Buffer` instance
	*
	* @example
	* var ns.array2buffer = require( `@stdlib/buffer/from-array` );
	*
	* var buf = ns.array2buffer( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*/
	array2buffer: typeof array2buffer;

	/**
	* Allocates a buffer from an `ArrayBuffer`.
	*
	* ## Notes
	*
	* The behavior of this function varies across Node.js versions due to changes in the underlying Node.js APIs:
	*
	* -   `<6.0.0`: if provided an empty ArrayBuffer, the function returns an empty Buffer which is **not** an ArrayBuffer view.
	* -   otherwise, the function returns a view of an ArrayBuffer without copying the underlying memory.
	*
	*
	* @param buf - ArrayBuffer instance
	* @param byteOffset - index specifying the location of the first buffer byte (default: 0)
	* @param length - number of buffer bytes (default: buf.byteLength)
	* @throws second argument must be a nonnegative integer
	* @throws second argument must not exceed number of bytes in input ArrayBuffer
	* @throws last argument must be a nonnegative integer
	* @throws last argument must not exceed number of bytes in input ArrayBuffer
	* @returns new `Buffer` instance
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	* var ab = new ArrayBuffer( 10 );
	*
	* var buf = ns.arraybuffer2buffer( ab );
	* // returns <Buffer>
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	* var ab = new ArrayBuffer( 10 );
	*
	* var buf = ns.arraybuffer2buffer( ab, 2, 4 );
	* // returns <Buffer>
	*/
	arraybuffer2buffer: typeof arraybuffer2buffer;

	/**
	* Copies buffer data to a new `Buffer` instance.
	*
	* @param buffer - buffer from which to copy
	* @returns new `Buffer` instance
	*
	* @example
	* var fromArray = require( `@stdlib/buffer/from-array` );
	*
	* var b1 = fromArray( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*
	* var b2 = ns.copyBuffer( b1 );
	* // returns <Buffer>
	*/
	copyBuffer: typeof copyBuffer;

	/**
	* Allocates a buffer containing a provided string.
	*
	* @param str - input string
	* @param encoding - character encoding (default: 'utf8')
	* @throws second argument must be a valid encoding
	* @returns new `Buffer` instance
	*
	* @example
	* var buf = ns.string2buffer( 'beep boop' );
	* // returns <Buffer>
	*/
	string2buffer: typeof string2buffer;

	/**
	* Revives a JSON-serialized `Buffer`.
	*
	* @param key - key
	* @param value - value
	* @returns value or Buffer
	*
	* @example
	* var parseJSON = require( `@stdlib/utils/parse-json` );
	*
	* var str = '{"type":"Buffer","data":[5,3]}';
	*
	* var buf = parseJSON( str, ns.reviver );
	* // returns <Buffer>[ 5, 3 ]
	*/
	reviver: typeof reviver;

	/**
	* Returns a JSON representation of a `Buffer`.
	*
	* @param buffer - buffer to serialize
	* @throws first argument must be a `Buffer`
	* @returns JSON representation
	*
	* @example
	* var array2buffer = require( `@stdlib/buffer/from-array` );
	*
	* var buf = array2buffer( [ 1, 2 ] );
	* // returns <Buffer>
	*
	* var json = ns.toJSON( buf );
	* // returns { 'type': 'Buffer', 'data': [ 1, 2 ] }
	*/
	toJSON: typeof toJSON;
}

/**
* Buffer.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
