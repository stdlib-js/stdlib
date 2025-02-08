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

var alignFlushRight = require( './align_flush_right.js' );


// MAIN //

/**
* Creates a slide footer line.
*
* @private
* @param {PositiveInteger} width - slide width
* @param {string} fill - fill character
* @param {(string|boolean)} type - footer type
* @param {PositiveInteger} n - slide number
* @param {PositiveInteger} total - total number of slides
* @returns {string} footer line
*/
function footer( width, fill, type, n, total ) {
	var line = n.toString();
	if ( type === 'progress' ) {
		line += '/' + total;
	}
	line += ' ';
	return alignFlushRight( width, line, line.length, fill );
}


// EXPORTS //

module.exports = footer;
