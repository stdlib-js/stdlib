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

/// <reference types="@stdlib/types"/>

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Custom stop words.
	*/
	stopwords?: Array<string>;
}

/**
* Generates an acronym for a given string.
*
* @param str - input string
* @param options - function options
* @param options.stopwords - custom stop words
* @returns generated acronym
*
* @example
* var out = acronym( 'the quick brown fox' );
* // returns 'QBF'
*
* @example
* var out = acronym( 'Hard-boiled eggs' );
* // returns 'HBE'
*
* @example
* var out = acronym( 'National Association of Securities Dealers Automated Quotation' );
* // returns 'NASDAQ'
*/
declare function acronym( str: string, options?: Options ): string;


// EXPORTS //

export = acronym;
