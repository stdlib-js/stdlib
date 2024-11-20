/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

'use strict';

// MAIN //

/**
* Replaces the substring after the first occurrence of a specified search string.
*
* @param {string} str - input string
* @param {string} search - search string
* @param {string} replacement - replacement string
* @param {integer} fromIndex - index at which to start the search
* @returns {string} - string
*
* @example
* var out = replaceAfter( 'beep boop', ' ', 'foo', 0 );
* // returns 'beep foo'
*
* @example
* var out = replaceAfter( 'beep boop', 'p', 'foo', 5 );
* // returns 'beep boopfoo'
*
* @example
* var out = replaceAfter( 'Hello World!', '', 'foo', 0 );
* // returns 'Hello World!'
*
* @example
* var out = replaceAfter( 'Hello World!', 'xyz', 'foo', 0 );
* // returns 'Hello World!'
*
* @example
* var out = replaceAfter( 'beep boop', ' ', 'foo', 5 );
* // returns 'beep boop'
*
* @example
* var out = replaceAfter( 'beep boop beep baz', 'beep', 'foo', 5 );
* // returns 'beep boop beepfoo'
*/
function replaceAfter( str, search, replacement, fromIndex ) {
	var idx;
	if ( fromIndex < 0 ) {
		fromIndex += str.length;
	} else if ( fromIndex >= str.length ) {
		return str;
	}
	idx = str.indexOf( search, fromIndex );
	if ( str === '' || search === '' || replacement === '' || idx < 0 ) {
		return str;
	}
	return str.substring( 0, idx + search.length ) + replacement;
}


// EXPORTS //

module.exports = replaceAfter;
