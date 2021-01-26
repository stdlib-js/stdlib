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
* Interface defining function options.
*/
interface Options {
	/**
	* Controls whether to wrap a regular expression matching white space characters with a capture group.
	*/
	capture?: boolean;

	/**
	* Regular expression flags.
	*/
	flags?: string;
}

/**
* Interface for a regular expression to match white space characters.
*/
interface ReWhitespace {
	/**
	* Returns a regular expression to match a white space character.
	*
	* @param options - function options
	* @param options.flags - regular expression flags (default: '')
	* @param options.capture - boolean indicating whether to wrap a regular expression matching a white space character with a capture group (default: false)
	* @returns regular expression
	*
	* @example
	* var RE_WHITESPACE = reWhitespace();
	*
	* var bool = RE_WHITESPACE.test( ' ' );
	* // returns true
*
	* @example
	* var RE_WHITESPACE = reWhitespace({
	*     'flags': 'gm'
	* });
	*
	* var bool = RE_WHITESPACE.test( '\t' );
	* // returns true
	*/
	( options?: Options ): RegExp;

	/**
	* Regular expression to match a white space character.
	*
	* @example
	* var bool = reWhitespace.REGEXP.test( 'a' );
	* // returns false
	*/
	REGEXP: RegExp;

	/**
	* Regular expression to capture white space characters.
	*
	* @example
	* var bool = reWhitespace.REGEXP_CAPTURE.test( 'a' );
	* // returns false
	*/
	REGEXP_CAPTURE: RegExp;
}

/**
* Returns a regular expression to match a white space character.
*
* @param options - function options
* @param options.flags - regular expression flags (default: '')
* @param options.capture - boolean indicating whether to wrap the regular expression matching a white space character with a capture group (default: false)
* @returns regular expression
*
* @example
* var RE_WHITESPACE = reWhitespace();
*
* var bool = RE_WHITESPACE.test( ' ' );
* // returns true
*
* @example
* var RE_WHITESPACE = reWhitespace({
*     'flags': 'gm'
* });
*
* var bool = RE_WHITESPACE.test( '\t' );
* // returns true
*
* @example
* var bool = reWhitespace.REGEXP.test( 'a' );
* // returns false
*/
declare var reWhitespace: ReWhitespace;


// EXPORTS //

export = reWhitespace;
