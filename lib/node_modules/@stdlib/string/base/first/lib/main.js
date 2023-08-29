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
* Returns the first `n` UTF-16 code units of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} n - number of UTF-16 code units to return
* @returns {string} output string
*
* @example
* var out = first( 'last man standing', 1 );
* // returns 'l'
*
* @example
* var out = first( 'presidential election', 1 );
* // returns 'p'
*
* @example
* var out = first( 'JavaScript', 1 );
* // returns 'J'
*
* @example
* var out = first( 'Hidden Treasures', 1 );
* // returns 'H'
*/
function first( str, n ) {
	return str.substring( 0, n );
}


// EXPORTS //

module.exports = first;
