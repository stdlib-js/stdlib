/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// Mapping from array constructors to data types...
var ctor2dtypes = {
	'Float32Array': 'float32',
	'Float64Array': 'float64',
	'Array': 'generic',
	'Int16Array': 'int16',
	'Int32Array': 'int32',
	'Int8Array': 'int8',
	'Uint16Array': 'uint16',
	'Uint32Array': 'uint32',
	'Uint8Array': 'uint8',
	'Uint8ClampedArray': 'uint8c'
};


// EXPORTS //

module.exports = ctor2dtypes;
