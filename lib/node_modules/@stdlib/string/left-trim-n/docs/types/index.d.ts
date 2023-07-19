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

/**
* Trims `n` characters from the beginning of a string.
*
* @param str - input string
* @param n - number of characters to trim
* @param chars - characters to trim (default: whitespace characters)
* @returns trimmed string
*
* @example
* var str = '   abc   ';
* var out = ltrimN( str, 2 );
* // returns ' abc   '
*
* @example
* var str = '   abc   ';
* var out = ltrimN( str, str.length );
* // returns 'abc   '
*
* @example
* var str = '~~abc!~~';
* var out = ltrimN( str, str.length, [ '~', '!' ] );
* // returns 'abc!~~'
*
* @example
* var str = '🤖👨🏼‍🎨🤖👨🏼‍🎨🤖👨🏼‍🎨';
* var out = ltrimN( str, str.length, '👨🏼‍🎨🤖' );
* // returns ''
*/
declare function ltrimN( str: string, n: number, chars?: string | Array<string> ): string; // tslint:disable-line:max-line-length


// EXPORTS //

export = ltrimN;
