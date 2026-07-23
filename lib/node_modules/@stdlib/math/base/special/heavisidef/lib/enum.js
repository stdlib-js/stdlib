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
* Returns an object mapping supported function continuity type strings to enumeration constants.
*
* @private
* @returns {Object} object mapping supported function continuity types to enumeration constants
*
* @example
* var table = enumeration();
* // returns <Object>
*/
function enumeration() {
	return {
		// Half-maximum:
		'half-maximum': 0,

		// Left-continuous:
		'left-continuous': 1,

		// Right-continuous:
		'right-continuous': 2,

		// Discontinuous:
		'discontinuous': 3
	};
}


// EXPORTS //

module.exports = enumeration;
