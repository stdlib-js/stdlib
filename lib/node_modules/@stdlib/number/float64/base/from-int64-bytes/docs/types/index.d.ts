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

import { NumericArray } from '@stdlib/types/array';

/**
* Converts a signed 64-bit integer byte array to a double-precision floating-point number.
*
* ## Notes
*
* -   The function assumes host byte order (endianness).
*
* @param bytes - byte array
* @param stride - index stride
* @param offset - index offset
* @returns double-precision floating-point number
*
* @example
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
* var x = fromInt64Bytes( bytes, 1, 0 );
* // returns -1.0
*/
declare function fromInt64Bytes( bytes: NumericArray, stride: number, offset: number ): number; // tslint:disable-line:max-line-length


// EXPORTS //

export = fromInt64Bytes;
