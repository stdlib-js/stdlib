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
* Returns an object mapping data type strings to alignments (in bytes).
*
* @private
* @returns {Object} object mapping data type string to alignments (in bytes)
*/
function table() {
	return {
		'binary': 1,

		'bool': 1,

		'complex32': 2,  // same as float16
		'complex64': 4,  // same as float32
		'complex128': 8, // same as float64

		'float16': 2,
		'bfloat16': 2,
		'float32': 4,
		'float64': 8,
		'float128': 16,

		'generic': null,

		'int8': 1,
		'int16': 2,
		'int32': 4,
		'int64': 8,
		'int128': 16,
		'int256': 32,

		'uint8': 1,
		'uint8c': 1,
		'uint16': 2,
		'uint32': 4,
		'uint64': 8,
		'uint128': 16,
		'uint256': 32
	};
}


// EXPORTS //

module.exports = table;
