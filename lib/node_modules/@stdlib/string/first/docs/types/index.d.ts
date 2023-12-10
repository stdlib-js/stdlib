/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/unified-signatures */

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Specifies the type of characters to return (default: 'grapheme').
	*
	* ## Notes
	*
	* -   The following option values are supported:
	*
	*     -   `'grapheme'`: grapheme clusters. Appropriate for strings containing visual characters which can span multiple Unicode code points (e.g., emoji).
	*     -   `'code_point'`: Unicode code points. Appropriate for strings containing visual characters which are comprised of more than one Unicode code unit (e.g., ideographic symbols and punctuation and mathematical alphanumerics).
	*     -   `'code_unit'`: UTF-16 code units. Appropriate for strings containing visual characters drawn from the basic multilingual plane (BMP) (e.g., common characters, such as those from the Latin, Greek, and Cyrillic alphabets).
	*/
	mode?: 'grapheme' | 'code_point' | 'code_unit';
}

/**
* Returns the first `n` characters of a string.
*
* @param str - input string
* @param n - number of characters to return
* @param options - options
* @returns updated string
*
* @example
* var out = first( 'last man standing', 2 );
* // returns 'la'
*
* @example
* var out = first( '🐶🐮🐷🐰🐸', 2, {
*    'mode': 'grapheme'
* });
* // returns '🐶🐮'
*/
declare function first( str: string, n: number, options?: Options ): string;

/**
* Returns the first character of a string.
*
* @param str - input string
* @param options - options
* @returns updated string
*
* @example
* var out = first( 'last man standing', {
*     'mode': 'code_unit'
* });
* // returns 'l'
*
* @example
* var out = first( '🐶🐮🐷🐰🐸', {
*    'mode': 'grapheme'
* });
* // returns '🐶🐮'
*/
declare function first( str: string, options?: Options ): string;

/**
* Returns the first character(s) of a string.
*
* @param str - input string
* @param n - number of characters to return (default: 1)
* @returns updated string
*
* @example
* var out = first( 'last man standing' );
* // returns 'l'
*
* @example
* var out = first( 'presidential election' );
* // returns 'p'
*
* @example
* var out = first( 'javaScript' );
* // returns 'j'
*
* @example
* var out = first( 'Hidden Treasures' );
* // returns 'H'
*
* @example
* var out = first( '🐶🐮🐷🐰🐸', 2 );
* // returns '🐶🐮'
*
* @example
* var out = first( 'foo bar', 5 );
* // returns 'foo b'
*/
declare function first( str: string, n?: number ): string;


// EXPORTS //

export = first;
