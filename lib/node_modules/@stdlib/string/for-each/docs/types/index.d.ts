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

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Specifies the type of characters over which to iterate (default: 'grapheme').
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
* Callback invoked for each character in a string.
*
* @returns result
*/
type Nullary = () => any;

/**
* Callback invoked for each character in a string.
*
* @param value - character
* @returns result
*/
type Unary = ( value: string ) => any;

/**
* Callback invoked for each character in a string.
*
* @param value - character
* @param index - starting character index
* @returns result
*/
type Binary = ( value: string, index: number ) => any;

/**
* Callback invoked for each character in a string.
*
* @param value - character
* @param index - starting character index
* @param str - input string
* @returns result
*/
type Ternary = ( value: string, index: number, str: string ) => any;

/**
* Callback invoked for each character in a string.
*
* @param value - character
* @param index - starting character index
* @param str - input string
* @returns result
*/
type Callback = Nullary | Unary | Binary | Ternary;

/**
* Invokes a function for each character in a string.
*
* ## Notes
*
* -   When invoked, the provided function is provided three arguments:
*
*     -   **value**: character.
*     -   **index**: starting character index.
*     -   **str**: input string.
*
* @param str - input string
* @param clbk - function to invoke
* @param thisArg - execution context
* @returns input string
*
* @example
* function log( value, index ) {
*     console.log( '%d: %s', index, value );
* }
*
* forEach( 'Hello, World!', log );
*/
declare function forEach( str: string, clbk: Callback, thisArg?: any ): string;

/**
* Invokes a function for each character in a string.
*
* ## Notes
*
* -   When invoked, the provided function is provided three arguments:
*
*     -   **value**: character.
*     -   **index**: starting character index.
*     -   **str**: input string.
*
* @param str - input string
* @param options - options
* @param clbk - function to invoke
* @param thisArg - execution context
* @returns input string
*
* @example
* function log( value, index ) {
*     console.log( '%d: %s', index, value );
* }
*
* var opts = {
*     'mode': 'code_point'
* };
* forEach( 'Hello, World!', opts, log );
*/
declare function forEach( str: string, options: Options, clbk: Callback, thisArg?: any ): string;


// EXPORTS //

export = forEach;
