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

// VARIABLES //

// Cache a reference to the built-in to prevent prototype mutation shenanigans:
var sliceString = String.prototype.slice;


// MAIN //

/**
* Slices UTF-16 code units from a string.
*
* @param {string} str - input string
* @param {integer} start - slice start index (inclusive)
* @param {integer} end - slice end index (exclusive)
* @returns {string} input string
*
* @example
* var out = slice( 'last man standing', 1, 17 );
* // returns 'ast man standing'
*
* out = slice( 'Hidden Treasures', 0, 6 );
* // returns 'Hidden'
*/
function slice( str, start, end ) {
	return sliceString.call( str, start, end );
}


// EXPORTS //

module.exports = slice;
