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

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';

/**
* Serializes ndarray meta data.
*
* ## Notes
*
* -   Serialization is performed according to host byte order (endianness).
*
* -   Meta data format:
*
*     ```text
*     | <endianness> (1 byte) | <dtype> (2 bytes) | <ndims> (8 bytes) | <shape> (ndims*8 bytes) | <strides> (ndims*8 bytes) | <offset> (8 bytes) | <order> (1 byte) | <mode> (1 byte) | <nsubmodes> (8 bytes) | <submodes> (nsubmodes*1 bytes) |
*     ```
*
*     which translates to the following `ArrayBuffer` layout:
*
*     ```text
*     ArrayBuffer[
*         <endianness>[int8],
*         <dtype>[int16],
*         <ndims>[int64],
*         <shape>[ndims*int64],
*         <strides>[ndims*int64],
*         <offset>[int64],
*         <order>[int8],
*         <mode>[int8],
*         <nsubmodes>[int64],
*         <submodes>[nsubmodes*int8]
*     ]
*     ```
*
*     where `strides` and `offset` are in units of bytes.
*
* -   If the endianness is `1`, the byte order is little endian. If the endianness is `0`, the byte order is big endian.
*
* -   Buffer length:
*
*     ```text
*     1 + 2 + 8 + (ndims*8) + (ndims*8) + 8 + 1 + 1 + 8 + (nsubmodes*1) = 29 + (ndims*16) + nsubmodes
*     ```
*
*     For example, consider a three-dimensional ndarray with one subscript index mode (submode):
*
*     ```text
*     29 + (3*16) + 1 = 78 bytes
*     ```
*
* -   Views:
*
*     -   endianness: `Int8Array( buf, 0, 1 )`
*     -   dtype: `Int16Array( buf, 1, 1 )`
*     -   ndims: `Int64Array( buf, 3, 1 )`
*     -   shape: `Int64Array( buf, 11, ndims )`
*     -   strides: `Int64Array( buf, 11+(ndims*8), ndims )`
*     -   offset: `Int64Array( buf, 11+(ndims*16), 1 )`
*     -   order: `Int8Array( buf, 19+(ndims*16), 1 )`
*     -   mode: `Int8Array( buf, 20+(ndims*16), 1 )`
*     -   nsubmodes: `Int64Array( buf, 21+(ndims*16), 1 )`
*     -   submodes: `Int8Array( buf, 29+(ndims*16), nsubmodes )`
*
* @param x - input ndarray
* @returns serialized meta data
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
*
* var dv = serialize( x );
* // returns <DataView>
*/
declare function serialize( x: ndarray ): DataView;


// EXPORTS //

export = serialize;
