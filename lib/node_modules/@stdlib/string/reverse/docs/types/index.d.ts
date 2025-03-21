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

// TypeScript Version: 4.1

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Specifies the type of characters to reverse (default: 'grapheme').
	*
	* ## Notes
	*
	* -   The following modes are supported:
	*
	*     -   `'grapheme'`: grapheme clusters. Appropriate for strings containing visual characters which can span multiple Unicode code points (e.g., emoji).
	*     -   `'code_point'`: Unicode code points. Appropriate for strings containing visual characters which are comprised of more than one Unicode code unit (e.g., ideographic symbols and punctuation and mathematical alphanumerics).
	*     -   `'code_unit'`: UTF-16 code units. Appropriate for strings containing visual characters drawn from the basic multilingual plane (BMP) (e.g., common characters, such as those from the Latin, Greek, and Cyrillic alphabets).
	*/
	mode?: 'grapheme' | 'code_point' | 'code_unit';
}

/**
* Reverses a string.
*
* @param str - input string
* @param options - options
* @returns reversed string
*
* @example
* var out = reverseString( 'last man standing', {
*     'mode': 'code_unit'
* });
* // returns 'gnidnats nam tsal'
*
* @example
* var out = reverseString( '🐶🐮🐷🐰🐸', {
*     'mode': 'grapheme'
* });
* // returns '🐸🐰🐷🐮🐶'
*/
declare function reverseString( str: string, options?: Options ): string;


// EXPORTS //

export = reverseString;
