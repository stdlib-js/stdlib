/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Interface defining function options.
*/
interface Options {
	/**
	* Language code (default: 'en').
	*
	* ## Notes
	*
	* Supported languages:
	*
	* -   **en**: English.
	* -   **es**: Spanish.
	* -   **fin**: Finnish.
	* -   **fr**: French.
	* -   **de**: German.
	* -   **it**: Italian.
	* -   **pt**: Portuguese.
	* -   **swe**: Swedish.
	*/
	lang?: 'en' | 'es' | 'fin' |'fr' | 'de' | 'it' | 'pt' | 'swe';

	/**
	* Boolean indicating whether to return only the suffix (default: false).
	*/
	suffixOnly?: boolean;

	/**
	* Grammatical gender (default: 'masculine').
	*/
	gender?: 'masculine' | 'feminine';
}

/**
* Converts an integer to an ordinal string (e.g., `1st`, `2nd`, etc.).
*
* @param value - string or number to convert
* @param options - options
* @param options.suffixOnly - boolean indicating whether to return only the suffix (default: false)
* @param options.lang - language code (default: 'en')
* @param options.gender - grammatical gender (used if applicable; either 'masculine' or 'feminine'; default: 'masculine')
* @returns ordinal string or suffix
*
* @example
* var out = ordinalize( '1' );
* // returns '1st'
*
* @example
* var out = ordinalize( '2' );
* // returns '2nd'
*
* @example
* var out = ordinalize( '21' );
* // returns '21st'
*
* @example
* var out = ordinalize( '1', { 'lang': 'de' } );
* // returns '1.'
*
* @example
* var out = ordinalize( '7', { 'lang': 'es' } );
* // returns '7ª'
*/
declare function ordinalize( value: string | number, options?: Options ): string;


// EXPORTS //

export = ordinalize;
