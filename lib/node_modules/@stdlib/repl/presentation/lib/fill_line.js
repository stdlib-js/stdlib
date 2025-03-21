/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Fills a slide line.
*
* @private
* @param {string} line - line text
* @param {string} fill - fill character
* @param {NonNegativeInteger} left - number of characters to fill left (left "padding")
* @param {NonNegativeInteger} right - number of characters to fill right (right "padding")
* @returns {string} filled line
*/
function fillLine( line, fill, left, right ) {
	var out;
	var i;

	out = '';
	for ( i = 0; i < left; i++ ) {
		out += fill;
	}
	out += line;
	for ( i = 0; i < right; i++ ) {
		out += fill;
	}
	return out;
}


// EXPORTS //

module.exports = fillLine;
