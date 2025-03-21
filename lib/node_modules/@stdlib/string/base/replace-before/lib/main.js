/**
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

'use strict';

// MAIN //

/**
* Replaces the substring before the first occurrence of a specified search string.
*
* @param {string} str - input string
* @param {string} search - search string
* @param {string} replacement - replacement string
* @param {integer} fromIndex - index at which to start the search
* @returns {string} string
*
* @example
* var out = replaceBefore( 'beep boop', ' ', 'foo', 0 );
* // returns 'foo boop'
*
* @example
* var out = replaceBefore( 'beep boop', 'p', 'foo', 5 );
* // returns 'foop'
*
* @example
* var out = replaceBefore( 'Hello World!', '', 'foo', 0 );
* // returns 'Hello World!'
*
* @example
* var out = replaceBefore( 'Hello World!', 'xyz', 'foo', 0 );
* // returns 'Hello World!'
*/
function replaceBefore( str, search, replacement, fromIndex ) {
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
	return replacement + str.substring( idx );
}


// EXPORTS //

module.exports = replaceBefore;
