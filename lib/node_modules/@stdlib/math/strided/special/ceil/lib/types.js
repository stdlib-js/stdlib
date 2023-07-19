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

var dtypes = require( '@stdlib/strided/dtypes' );


// MAIN //

var types = [
	dtypes.float64, dtypes.float64,
	dtypes.float64, dtypes.generic,

	dtypes.float32, dtypes.float32,
	dtypes.float32, dtypes.float64,
	dtypes.float32, dtypes.generic,

	dtypes.generic, dtypes.generic,

	dtypes.int32, dtypes.int32,
	dtypes.int32, dtypes.float64,
	dtypes.int32, dtypes.generic,

	dtypes.int16, dtypes.int16,
	dtypes.int16, dtypes.int32,
	dtypes.int16, dtypes.float32,
	dtypes.int16, dtypes.float64,
	dtypes.int16, dtypes.generic,

	dtypes.int8, dtypes.int8,
	dtypes.int8, dtypes.int16,
	dtypes.int8, dtypes.int32,
	dtypes.int8, dtypes.float32,
	dtypes.int8, dtypes.float64,
	dtypes.int8, dtypes.generic,

	dtypes.uint32, dtypes.uint32,
	dtypes.uint32, dtypes.float64,
	dtypes.uint32, dtypes.generic,

	dtypes.uint16, dtypes.int32,
	dtypes.uint16, dtypes.uint16,
	dtypes.uint16, dtypes.uint32,
	dtypes.uint16, dtypes.float32,
	dtypes.uint16, dtypes.float64,
	dtypes.uint16, dtypes.generic,

	dtypes.uint8, dtypes.int16,
	dtypes.uint8, dtypes.int32,
	dtypes.uint8, dtypes.uint8,
	dtypes.uint8, dtypes.uint8c,
	dtypes.uint8, dtypes.uint16,
	dtypes.uint8, dtypes.uint32,
	dtypes.uint8, dtypes.float32,
	dtypes.uint8, dtypes.float64,
	dtypes.uint8, dtypes.generic,

	dtypes.uint8c, dtypes.int16,
	dtypes.uint8c, dtypes.int32,
	dtypes.uint8c, dtypes.uint8,
	dtypes.uint8c, dtypes.uint8c,
	dtypes.uint8c, dtypes.uint16,
	dtypes.uint8c, dtypes.uint32,
	dtypes.uint8c, dtypes.float32,
	dtypes.uint8c, dtypes.float64,
	dtypes.uint8c, dtypes.generic
];


// EXPORTS //

module.exports = types;
