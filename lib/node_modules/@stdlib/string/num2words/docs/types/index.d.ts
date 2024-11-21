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
	* -   **de**: German.
	*/
	lang?: 'en' | 'de';
}


/**
* Converts a number to a word representation.
*
* @param num - number to convert
* @param options - options
* @param options.lang - language code (default: 'en')
* @returns string representation of a number
*
* @example
* var out = num2words( 12 );
* // returns 'twelve'
*
* @example
* var out = num2words( 21.8 );
* // returns 'twenty-one point eight'
*
* @example
* var out = num2words( 1234 );
* // returns 'one thousand two hundred thirty-four'
*
* @example
* var out = num2words( 100381 );
* // returns 'one hundred thousand three hundred eighty-one'
*/
declare function num2words( num: number, options?: Options ): string;


// EXPORTS //

export = num2words;
