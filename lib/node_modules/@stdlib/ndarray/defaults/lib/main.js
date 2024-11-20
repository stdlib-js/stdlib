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
* Returns default ndarray settings.
*
* @returns {Object} defaults
*
* @example
* var o = defaults();
* // returns {...}
*/
function defaults() {
	return {
		// Data types:
		'dtypes': {
			'default': 'float64',
			'numeric': 'float64',
			'real': 'float64',
			'floating_point': 'float64',
			'real_floating_point': 'float64',
			'complex_floating_point': 'complex128',
			'integer': 'int32',
			'signed_integer': 'int32',
			'unsigned_integer': 'uint32',
			'boolean': 'bool'
		},

		// Memory layout:
		'order': 'row-major',

		// Casting mode:
		'casting': 'safe',

		// Index mode:
		'index_mode': 'throw'
	};
}


// EXPORTS //

module.exports = defaults;
