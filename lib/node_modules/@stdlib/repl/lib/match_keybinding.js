/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Matches a list of possible input keybindings against a list of accepted keybindings.
*
* @private
* @param {Array<Object>} inputKeys - list of possible input keys
* @param {Array<Object>} acceptedKeys - list of accepted keys
* @returns {boolean} boolean indicating whether the input keys match the accepted keys
*/
function matchKeybindings( inputKeys, acceptedKeys ) {
	var i;
	var j;

	for ( i = 0; i < acceptedKeys.length; i++ ) {
		for ( j = 0; j < inputKeys.length; j++ ) {
			if (
				acceptedKeys[ i ].name === inputKeys[ j ].name &&
				acceptedKeys[ i ].ctrl === inputKeys[ j ].ctrl &&
				acceptedKeys[ i ].shift === inputKeys[ j ].shift &&
				acceptedKeys[ i ].meta === inputKeys[ j ].meta
			) {
				return true;
			}
		}
	}
	return false;
}


// EXPORTS //

module.exports = matchKeybindings;
