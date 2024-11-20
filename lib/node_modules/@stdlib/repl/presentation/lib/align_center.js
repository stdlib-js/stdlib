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

// MODULES //

var fillLine = require( './fill_line.js' );


// MAIN //

/**
* Center aligns a line of slide text.
*
* ## Notes
*
* -   If provided a line of text with an odd number of characters, the aligned text is offset by one character to the left and thus not perfectly balanced.
*
* @private
* @param {PositiveInteger} width - slide width
* @param {string} line - line text
* @param {NonNegativeInteger} len - effective line length
* @param {string} fill - fill character
* @returns {string} aligned text
*/
function alignCenter( width, line, len, fill ) {
	var space = width - len;
	var left = (space/2)|0;
	return fillLine( line, fill, left, space-left );
}


// EXPORTS //

module.exports = alignCenter;
