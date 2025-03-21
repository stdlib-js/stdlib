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
* Aligns a line of slide text against the right margin.
*
* @private
* @param {PositiveInteger} width - slide width
* @param {string} line - line text
* @param {NonNegativeInteger} len - effective line length
* @param {string} fill - fill character
* @returns {string} aligned text
*/
function alignFlushRight( width, line, len, fill ) {
	var left = width - len;
	return fillLine( line, fill, left, 0 );
}


// EXPORTS //

module.exports = alignFlushRight;
