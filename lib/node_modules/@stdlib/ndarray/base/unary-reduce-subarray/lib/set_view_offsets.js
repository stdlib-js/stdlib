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
* Sets view offsets according to a list of index offsets.
*
* ## Notes
*
* -   This function skips the second element in the list of index offsets, as that is assumed to correspond to the output ndarray which does not have a corresponding view. Meaning, the list of views is expected to have `N` elements, and the list of index offsets is expected to have `N+1` elements.
* -   This function mutates the provides view objects.
*
* @private
* @param {Array<Object>} views - list of ndarray-like objects representing ndarray views
* @param {NonNegativeIntegerArray} offsets - list of index offsets
* @returns {Array<Object>} updated views
*/
function setViewOffsets( views, offsets ) {
	var i;
	var j;
	for ( i = 0, j = 0; i < offsets.length; i++ ) {
		if ( i === 1 ) { // note: expected to correspond to the output ndarray which does not have a corresponding view
			continue;
		}
		views[ j ].offset = offsets[ i ];
		j += 1;
	}
	return views;
}


// EXPORTS //

module.exports = setViewOffsets;
