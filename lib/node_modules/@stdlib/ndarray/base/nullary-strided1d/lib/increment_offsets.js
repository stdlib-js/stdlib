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
* Increments index offsets according to a list of increments.
*
* ## Notes
*
* -   This function mutates the list of index offsets.
*
* @private
* @param {NonNegativeIntegerArray} offsets - list of index offsets
* @param {NonNegativeIntegerArray} inc - list of increments
* @returns {NonNegativeIntegerArray} updated offsets
*/
function incrementOffsets( offsets, inc ) {
	var i;
	for ( i = 0; i < offsets.length; i++ ) {
		offsets[ i ] += inc[ i ];
	}
	return offsets;
}


// EXPORTS //

module.exports = incrementOffsets;
