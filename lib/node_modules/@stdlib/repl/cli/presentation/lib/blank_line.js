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

var repeat = require( '@stdlib/string/repeat' );


// MAIN //

/**
* Returns a blank slide line.
*
* @private
* @param {PositiveInteger} width - slide width
* @param {string} fill - fill character
* @param {string} borderLeft - left border
* @param {string} borderRight - right border
* @returns {string} blank slide line
*/
function blankLine( width, fill, borderLeft, borderRight ) {
	var line;
	if ( borderRight.length === 0 ) {
		line = '';
	} else {
		line = repeat( fill, width );
	}
	return borderLeft + line + borderRight;
}


// EXPORTS //

module.exports = blankLine;
