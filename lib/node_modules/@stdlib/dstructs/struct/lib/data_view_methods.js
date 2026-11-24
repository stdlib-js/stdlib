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

var DATA_VIEW_METHODS = {
	'int8': {
		'get': 'getInt8',
		'set': 'setInt8'
	},
	'int16': {
		'get': 'getInt16',
		'set': 'setInt16'
	},
	'int32': {
		'get': 'getInt32',
		'set': 'setInt32'
	},
	'int64': {
		'get': 'getBigInt64',
		'set': 'setBigInt64'
	},
	'uint8': {
		'get': 'getUint8',
		'set': 'setUint8'
	},
	'uint16': {
		'get': 'getUint16',
		'set': 'setUint16'
	},
	'uint32': {
		'get': 'getUint32',
		'set': 'setUint32'
	},
	'uint64': {
		'get': 'getBigUint64',
		'set': 'setBigUint64'
	},
	'float16': {
		'get': 'getFloat16',
		'set': 'setFloat16'
	},
	'float32': {
		'get': 'getFloat32',
		'set': 'setFloat32'
	},
	'float64': {
		'get': 'getFloat64',
		'set': 'setFloat64'
	},
	'complex32': {
		'get': 'getFloat16',
		'set': 'setFloat16'
	},
	'complex64': {
		'get': 'getFloat32',
		'set': 'setFloat32'
	},
	'complex128': {
		'get': 'getFloat64',
		'set': 'setFloat64'
	},
	'bool': {
		'get': 'getUint8',
		'set': 'setUint8'
	}
};


// EXPORTS //

module.exports = DATA_VIEW_METHODS;
