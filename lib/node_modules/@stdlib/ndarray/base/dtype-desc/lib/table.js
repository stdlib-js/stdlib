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

'use strict';

// MAIN //

/**
* Returns an object mapping data type strings to descriptions.
*
* @private
* @returns {Object} object mapping data type string to descriptions
*/
function table() {
	return {
		'binary': 'byte',

		'bool': 'boolean',

		'complex64': 'single-precision floating-point complex number',
		'complex128': 'double-precision floating-point complex number',

		'float16': 'half-precision floating-point number',
		'bfloat16': 'brain floating-point number',
		'float32': 'single-precision floating-point number',
		'float64': 'double-precision floating-point number',
		'float128': 'quadruple-precision floating-point number',

		'generic': 'generic array value',

		'int8': 'signed 8-bit integer',
		'int16': 'signed 16-bit integer',
		'int32': 'signed 32-bit integer',
		'int64': 'signed 64-bit integer',
		'int128': 'signed 128-bit integer',
		'int256': 'signed 256-bit integer',

		'uint8': 'unsigned 8-bit integer',
		'uint8c': 'unsigned 8-bit integer (clamped)',
		'uint16': 'unsigned 16-bit integer',
		'uint32': 'unsigned 32-bit integer',
		'uint64': 'unsigned 64-bit integer',
		'uint128': 'unsigned 128-bit integer',
		'uint256': 'unsigned 256-bit integer'
	};
}


// EXPORTS //

module.exports = table;
