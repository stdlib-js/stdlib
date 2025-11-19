/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Returns an object mapping supported data type policy strings to enumeration constants.
*
* ## Notes
*
* -   Downstream consumers of this mapping should **not** rely on specific integer values (e.g., `SAME == 0`). Instead, the object should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation of ndarray objects.
*
* @private
* @returns {Object} object mapping supported dtype policies to enumeration constants
*
* @example
* var table = enumeration();
* // returns <Object>
*/
function enumeration() {
	// NOTE: the following should match the C `output_dtype_policies.h` enumeration!!!!
	return {
		'same': 0,
		'promoted': 1,
		'accumulation': 2,
		'boolean': 3,
		'boolean_and_generic': 4,
		'signed_integer': 5,
		'signed_integer_and_generic': 6,
		'unsigned_integer': 7,
		'unsigned_integer_and_generic': 8,
		'integer': 9,
		'integer_and_generic': 10,
		'floating_point': 11,
		'floating_point_and_generic': 12,
		'real_floating_point': 13,
		'real_floating_point_and_generic': 14,
		'complex_floating_point': 15,
		'complex_floating_point_and_generic': 16,
		'real': 17,
		'real_and_generic': 18,
		'numeric': 19,
		'numeric_and_generic': 20,
		'integer_index': 21,
		'integer_index_and_generic': 22,
		'boolean_index': 23,
		'boolean_index_and_generic': 24,
		'mask_index': 25,
		'mask_index_and_generic': 26,
		'default': 27,
		'default_index': 28
	};
}


// EXPORTS //

module.exports = enumeration;
