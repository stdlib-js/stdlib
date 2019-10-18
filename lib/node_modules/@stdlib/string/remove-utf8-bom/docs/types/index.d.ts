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
* Removes a UTF-8 byte order mark (BOM) from the beginning of a string.
*
* ## Notes
*
* -   A UTF-8 byte order mark ([BOM][1]) is the byte sequence `0xEF,0xBB,0xBF`.
* -   To convert a UTF-8 encoded `Buffer` to a `string`, the `Buffer` must be converted to [UTF-16][2]. The BOM thus gets converted to the single 16-bit code point `'\ufeff'` (UTF-16 BOM).
*
* [1]: https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8
* [2]: http://es5.github.io/#x4.3.16
*
* @param str - input string
* @returns string with BOM removed
*
* @example
* var str = removeUTF8BOM( '\ufeffbeep' );
* // returns 'beep'
*/
declare function removeUTF8BOM( str: string ): string;


// EXPORTS //

export = removeUTF8BOM;
