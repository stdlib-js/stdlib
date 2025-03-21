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
* Replaces the substring before the last occurrence of a specified search string.
*
* @param {string} str - input string
* @param {string} search - search string
* @param {string} replacement - replacement string
* @param {integer} fromIndex - index from which to start searching
* @returns {string} string
*
* @example
* var str = 'beep boop';
* var out = replaceBeforeLast( str, ' ', 'foo', str.length );
* // returns 'foo boop'
*
* @example
* var str = 'beep boop';
* var out = replaceBeforeLast( str, 'p', 'foo', str.length );
* // returns 'foop'
*
* @example
* var str = 'Hello World!';
* var out = replaceBeforeLast( str, '', 'foo',  str.length );
* // returns 'Hello World!'
*
* @example
* var str = 'Hello World!';
* var out = replaceBeforeLast( str, 'xyz', 'foo', str.length );
* // returns 'Hello World!'
*
* @example
* var str = 'beep boop baz';
* var out = replaceBeforeLast( str, 'p b', 'foo', str.length );
* // returns 'foop baz'
*
* @example
* var str = 'beep boop baz';
* var out = replaceBeforeLast( str, 'p b', 'foo', 6 );
* // returns 'foop boop baz'
*/
function replaceBeforeLast( str, search, replacement, fromIndex ) {
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
	return replacement + str.substring( idx );
}


// EXPORTS //

module.exports = replaceBeforeLast;
