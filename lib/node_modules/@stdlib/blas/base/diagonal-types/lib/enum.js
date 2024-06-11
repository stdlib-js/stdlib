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
* Returns an object mapping supported diagonal types to integer values for purposes of C inter-operation.
*
* ## Notes
*
* -   Downstream consumers of this mapping should **not** rely on specific integer values (e.g., `unit == 132`). Instead, the object should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation of array objects.
*
* @returns {Object} object mapping supported types to integer values
*
* @example
* var table = enumerated();
* // returns <Object>
*/
function enumerated() {
	// NOTE: the following should match the C `diagonal_types.h` enumeration!!!!
	return {
		// Elements along a diagonal are not all equal to one:
		'non-unit': 131,

		// Elements along a diagonal are all equal to one:
		'unit': 132
	};
}


// EXPORTS //

module.exports = enumerated;
