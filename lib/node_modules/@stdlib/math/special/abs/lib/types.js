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

/*
* NOTE: this file is only for developer convenience. Upon updating this file, run the `scripts/types.js` file to regenerate the compact types representation.
*/

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var dtypes = require( '@stdlib/ndarray/dtypes' );


// MAIN //

// Type signatures...
var types = [
	dtypes.float64.enum, dtypes.float64.enum,
	dtypes.float64.enum, dtypes.generic.enum,

	dtypes.float32.enum, dtypes.float32.enum,
	dtypes.float32.enum, dtypes.float64.enum,
	dtypes.float32.enum, dtypes.generic.enum,

	dtypes.generic.enum, dtypes.generic.enum,

	dtypes.complex128.enum, dtypes.float64.enum,
	dtypes.complex128.enum, dtypes.generic.enum,

	dtypes.complex64.enum, dtypes.float32.enum,
	dtypes.complex64.enum, dtypes.float64.enum,
	dtypes.complex64.enum, dtypes.generic.enum,

	dtypes.int32.enum, dtypes.int32.enum,
	dtypes.int32.enum, dtypes.uint32.enum,
	dtypes.int32.enum, dtypes.float64.enum,
	dtypes.int32.enum, dtypes.generic.enum,

	dtypes.int16.enum, dtypes.int16.enum,
	dtypes.int16.enum, dtypes.int32.enum,
	dtypes.int16.enum, dtypes.uint16.enum,
	dtypes.int16.enum, dtypes.uint32.enum,
	dtypes.int16.enum, dtypes.float32.enum,
	dtypes.int16.enum, dtypes.float64.enum,
	dtypes.int16.enum, dtypes.generic.enum,

	dtypes.int8.enum, dtypes.int8.enum,
	dtypes.int8.enum, dtypes.int16.enum,
	dtypes.int8.enum, dtypes.int32.enum,
	dtypes.int8.enum, dtypes.uint8.enum,
	dtypes.int8.enum, dtypes.uint8c.enum,
	dtypes.int8.enum, dtypes.uint16.enum,
	dtypes.int8.enum, dtypes.uint32.enum,
	dtypes.int8.enum, dtypes.float32.enum,
	dtypes.int8.enum, dtypes.float64.enum,
	dtypes.int8.enum, dtypes.generic.enum,

	dtypes.uint32.enum, dtypes.uint32.enum,
	dtypes.uint32.enum, dtypes.float64.enum,
	dtypes.uint32.enum, dtypes.generic.enum,

	dtypes.uint16.enum, dtypes.int32.enum,
	dtypes.uint16.enum, dtypes.uint16.enum,
	dtypes.uint16.enum, dtypes.uint32.enum,
	dtypes.uint16.enum, dtypes.float32.enum,
	dtypes.uint16.enum, dtypes.float64.enum,
	dtypes.uint16.enum, dtypes.generic.enum,

	dtypes.uint8.enum, dtypes.int16.enum,
	dtypes.uint8.enum, dtypes.int32.enum,
	dtypes.uint8.enum, dtypes.uint8.enum,
	dtypes.uint8.enum, dtypes.uint8c.enum,
	dtypes.uint8.enum, dtypes.uint16.enum,
	dtypes.uint8.enum, dtypes.uint32.enum,
	dtypes.uint8.enum, dtypes.float32.enum,
	dtypes.uint8.enum, dtypes.float64.enum,
	dtypes.uint8.enum, dtypes.generic.enum,

	dtypes.uint8c.enum, dtypes.int16.enum,
	dtypes.uint8c.enum, dtypes.int32.enum,
	dtypes.uint8c.enum, dtypes.uint8.enum,
	dtypes.uint8c.enum, dtypes.uint8c.enum,
	dtypes.uint8c.enum, dtypes.uint16.enum,
	dtypes.uint8c.enum, dtypes.uint32.enum,
	dtypes.uint8c.enum, dtypes.float32.enum,
	dtypes.uint8c.enum, dtypes.float64.enum,
	dtypes.uint8c.enum, dtypes.generic.enum
];


// EXPORTS //

module.exports = types;
