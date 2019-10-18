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
* Converts a UTF-16 encoded string to an array of integers using UTF-8 encoding.
*
* ## Notes
*
* -   The following byte sequences are used to represent a character. The sequence depends on the code point:
*
*     0x00000000 - 0x0000007F:
*          0xxxxxxx
*
*      0x00000080 - 0x000007FF:
*          110xxxxx 10xxxxxx
*
*      0x00000800 - 0x0000FFFF:
*          1110xxxx 10xxxxxx 10xxxxxx
*
*      0x00010000 - 0x001FFFFF:
*          11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
*
* -   The `x` bit positions correspond to code point bits.
* -   Only the shortest possible multi-byte sequence which can represent a code point is used.
*
* @param str - string to convert
* @returns array of integers
* @see [UTF-8]{@link https://en.wikipedia.org/wiki/UTF-8}
* @see [Stack Overflow]{@link https://stackoverflow.com/questions/6240055/manually-converting-unicode-codepoints-into-utf-8-and-utf-16}
*
* @example
* var str = '☃';
* var out = utf16ToUTF8Array( str );
* // returns [ 226, 152, 131 ]
*/
declare function utf16ToUTF8Array( str: string ): Array<number>;


// EXPORTS //

export = utf16ToUTF8Array;
