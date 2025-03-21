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
* Replaces the substring after the last occurrence of a specified search string.
*
* @param {string} str - input string
* @param {string} search - search string
* @param {string} replacement - replacement string
* @param {integer} fromIndex - index from which to start searching
* @returns {string} string
*
* @example
* var str = 'beep boop';
* var out = replaceAfterLast( str, ' ', 'foo', str.length );
* // returns 'beep foo'
*
* @example
* var str = 'beep boop';
* var out = replaceAfterLast( str, 'p', 'foo', str.length );
* // returns 'beep boopfoo'
*
* @example
* var str = 'Hello World!';
* var out = replaceAfterLast( str, '', 'foo',  str.length );
* // returns 'Hello World!'
*
* @example
* var str = 'Hello World!';
* var out = replaceAfterLast( str, 'xyz', 'foo', str.length );
* // returns 'Hello World!'
*
* @example
* var str = 'beep boop baz';
* var out = replaceAfterLast( str, 'p b', 'foo', str.length );
* // returns 'beep boop bfoo'
*
* @example
* var str = 'beep boop baz';
* var out = replaceAfterLast( str, 'p b', 'foo', 6 );
* // returns 'beep bfoo'
*/
function replaceAfterLast( str, search, replacement, fromIndex ) {
	var idx;
	if ( fromIndex < 0 ) {
		fromIndex += str.length;
		if ( fromIndex < 0 ) {
			return str;
		}
	}
	idx = str.lastIndexOf( search, fromIndex );
	if ( str === '' || search === '' || replacement === '' || idx < 0 ) {
		return str;
	}
	return str.substring( 0, idx + search.length ) + replacement;
}


// EXPORTS //

module.exports = replaceAfterLast;
