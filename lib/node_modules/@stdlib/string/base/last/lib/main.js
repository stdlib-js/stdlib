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
* Returns the last `n` UTF-16 code units of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} n - number of UTF-16 code units to return
* @returns {string} output string
*
* @example
* var s = last( 'hello world', 1 );
* // returns 'd'
*
* @example
* var s = last( 'this is stdlib', 1 );
* // returns 'b'
*
* @example
* var out = last( 'JavaScript', 6 );
* // returns 'Script'
*
* @example
* var out = last( 'New', 6 );
* // returns 'New'
*/
function last( str, n ) {
	var len = str.length;
	return str.substring( len - n, len );
}


// EXPORTS //

module.exports = last;
