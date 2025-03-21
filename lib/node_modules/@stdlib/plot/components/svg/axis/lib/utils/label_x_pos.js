/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/**
* Returns the label `x` coordinate.
*
* @private
* @param {string} orient - axis orientation
* @param {NumericArray} range - scale range
* @returns {number} `x` coordinate
*/
function labelXPos( orient, range ) {
	if ( orient === 'left' || orient === 'right' ) {
		return -range[0] / 2;
	}
	return range[1] / 2;
}


// EXPORTS //

module.exports = labelXPos;
