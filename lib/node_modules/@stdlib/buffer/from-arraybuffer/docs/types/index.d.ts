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

// TypeScript Version: 4.1

/// <reference types="node"/>

import { Buffer } from 'buffer';

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
declare function fromArrayBuffer( buf: ArrayBuffer,  byteOffset?: number, length?: number ): Buffer;


// EXPORTS //

export = fromArrayBuffer;
