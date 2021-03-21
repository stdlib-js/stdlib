/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable stdlib/empty-line-before-comment */

'use strict';

// MAIN //

/**
* Returns an object mapping supported dtypes to integer values for purposes of C inter-operation.
*
* ## Notes
*
* -   Downstream consumers of this mapping should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the object should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation of ndarray objects. While certain dtypes, such as "generic" and "binary", have special behavior in JavaScript, they do not have a direct complement in C.
*
* @returns {Object} object mapping supported dtypes to integer values
*
* @example
* var table = enumerated();
* // returns <Object>
*/
function enumerated() {
	// NOTE: the following should match the C `dtypes.h` enumeration!!!!
	return {
		// Boolean data types:
		'bool': 0,

		// Integer data types:
		'int8': 1,
		'uint8': 2,
		'uint8c': 3,
		'int16': 4,
		'uint16': 5,
		'int32': 6,
		'uint32': 7,
		'int64': 8,
		'uint64': 9,
		// 'int128': 10, // uncomment once supported
		// 'uint128': 11,
		// 'int256': 12,
		// 'uint256': 13,

		// Floating-point data types:
		// 'float16': 14,
		// 'bfloat16': 15,
		'float32': 10,
		'float64': 11,
		// 'float128': 18, // uncomment once supported

		// Complex floating-point number data types:
		'complex64': 12,
		'complex128': 13,

		// Data type for "binary" data (i.e., data stored in a Node.js `Buffer` object):
		'binary': 14,

		// Data type for "generic" JavaScript values (objects):
		'generic': 15,

		// Define a signaling value which is guaranteed not to be a valid type enumeration value:
		'notype': 17,

		// Indicate the start of user defined type numbers (leaving room for type growth above):
		'userdefined_type': 256
	};
}


// EXPORTS //

module.exports = enumerated;
