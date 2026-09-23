/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Concatenates two strings.
*
* @param {string} str1 - first string
* @param {string} str2 - second string
* @returns {string} concatenated string
*
* @example
* var str = concat( 'beep', 'boop' );
* // returns 'beepboop'
*/
function concat( str1, str2 ) {
	return str1 + str2;
}


// EXPORTS //

module.exports = concat;
