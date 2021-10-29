/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import { ArrayLike } from '@stdlib/types/array';

/**
* Performs multiplication of two signed 32-bit integers and returns an array of two signed 32-bit integers which represents the signed 64-bit integer product.
*
* ## Notes
*
* -   When computing the product of 32-bit integer values in double-precision floating-point format (the default JavaScript numeric data type), computing the double word product is necessary in order to avoid exceeding the maximum safe double-precision floating-point integer value.
*
* @param out - output array
* @param a - integer
* @param b - integer
* @returns output array
*
* @example
* var v = imuldw( 0xAAAAAAAA, 0x55555555 );
* // returns [ -477218589, 1908874354 ]
*/
declare function imuldw( out: ArrayLike<number>, a: number, b: number ): ArrayLike<number>; // tslint-disable-line max-line-length

/**
* Performs multiplication of two signed 32-bit integers and returns an array of two signed 32-bit integers which represents the signed 64-bit integer product.
*
* ## Notes
*
* -   When computing the product of 32-bit integer values in double-precision floating-point format (the default JavaScript numeric data type), computing the double word product is necessary in order to avoid exceeding the maximum safe double-precision floating-point integer value.
*
* @param a - integer
* @param b - integer
* @returns output array
*
* @example
* var v = imuldw( 0xAAAAAAAA, 0x55555555 );
* // returns [ -477218589, 1908874354 ]
*/
declare function imuldw( a: number, b: number ): ArrayLike<number>;


// EXPORTS //

export = imuldw;
