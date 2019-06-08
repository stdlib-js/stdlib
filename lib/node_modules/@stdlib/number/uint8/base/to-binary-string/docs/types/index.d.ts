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

/**
* Returns a string giving the literal bit representation of an unsigned 8-bit integer.
*
* ## Notes
*
* -   Except for typed arrays, JavaScript does not provide native user support for unsigned 8-bit integers. According to the ECMAScript standard, `number` values correspond to double-precision floating-point numbers. While this function is intended for unsigned 8-bit integers, the function will accept floating-point values and represent the values as if they are unsigned 8-bit integers. Accordingly, care should be taken to ensure that only nonnegative integer values less than `256` (`2^8`) are provided.
*
* @param x - input value
* @returns bit representation
*
* @example
* var a = new Uint8Array( [ 1 ] );
* var str = toBinaryString( a[0] );
* // returns '00000001'
*
* @example
* var a = new Uint8Array( [ 4 ] );
* var str = toBinaryString( a[0] );
* // returns '00000100'
*
* @example
* var a = new Uint8Array( [ 9 ] );
* var str = toBinaryString( a[0] );
* // returns '00001001'
*/
declare function toBinaryString( x: number ): string;


// EXPORTS //

export = toBinaryString;
