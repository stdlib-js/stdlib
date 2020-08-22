/*
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

// TypeScript Version: 2.0

/**
* Tests if a value is a gzip buffer (or Uint8Array).
*
* ## Notes
*
* -   A gzip buffer is defined as either a Node.js Buffer or Uint8Array which contains a 10-byte header, a body containing the compressed payload, and an 8-byte footer containing a CRC-32 checksum and the length of the original uncompressed data, modulo 2^32.
* -   This function only examines the 10-byte header to ensure the header includes the expected magic number and compression method. The function does not perform an integrity check.
*
* @param value - value to test
* @returns boolean indicating whether a value is a gzip buffer
*
* @example
* var Uint8Array = require( `@stdlib/array/uint8` );
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
* var bool = isgzipBuffer( [] );
* // returns false
*/
declare function isgzipBuffer( value: any ): boolean;


// EXPORTS //

export = isgzipBuffer;
