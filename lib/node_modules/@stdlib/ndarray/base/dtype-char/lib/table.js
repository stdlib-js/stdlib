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
* Returns an object mapping data type strings to single letter abbreviations.
*
* @private
* @returns {Object} object mapping data type string to single letter abbreviations
*/
function table() {
	return {
		'binary': 'r',

		'bool': 'x',

		'complex64': 'c',
		'complex128': 'z',

		'float16': 'h',
		'bfloat16': 'e',
		'float32': 'f',
		'float64': 'd',
		'float128': 'g',

		'generic': 'o',

		'int8': 's',
		'int16': 'k',
		'int32': 'i',
		'int64': 'l',
		'int128': 'm',
		'int256': 'n',

		'uint8': 'b',
		'uint8c': 'a',
		'uint16': 't',
		'uint32': 'u',
		'uint64': 'v',
		'uint128': 'w',
		'uint256': 'y'
	};
}


// EXPORTS //

module.exports = table;
