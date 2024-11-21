/**
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

'use strict';

// MAIN //

/**
* Tests if a string starts with the characters of another string.
*
* @private
* @param {string} str - input string
* @param {string} search - search string
* @param {integer} position - position at which to start searching
* @returns {boolean} boolean indicating if the input string starts with the search string
*
* @example
* var bool = startsWith( 'Remember the story I used to tell you when you were a boy?', 'Remember', 0 );
* // returns true
*
* @example
* var bool = startsWith( 'Remember the story I used to tell you when you were a boy?', 'Remember, remember', 0 );
* // returns false
*
* @example
* var bool = startsWith( 'To be, or not to be, that is the question.', 'To be', 0 );
* // returns true
*
* @example
* var bool = startsWith( 'To be, or not to be, that is the question.', 'to be', 0 );
* // returns false
*
* @example
* var bool = startsWith( 'To be, or not to be, that is the question.', 'to be', 14 );
* // returns true
*
* @example
* var bool = startsWith( 'To be, or not to be, that is the question.', 'quest', -9 );
* // returns true
*/
function startsWith( str, search, position ) {
	var pos;
	var i;
	if ( position < 0 ) {
		pos = str.length + position;
	} else {
		pos = position;
	}
	if ( search.length === 0 ) {
		return true;
	}
	if (
		pos < 0 ||
		pos + search.length > str.length
	) {
		return false;
	}
	for ( i = 0; i < search.length; i++ ) {
		if ( str.charCodeAt( pos + i ) !== search.charCodeAt( i ) ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = startsWith;
