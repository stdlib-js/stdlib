/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/* eslint-disable stdlib/capitalized-comments */

'use strict';

// MODULES //

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );


// MAIN //

var data = [
	// NOTE: the following **must** match the order in `./types.json`. The order should be according to likelihood of use (e.g., if `float64` arrays are more likely, then `float64` types/data should come before `uint8`).

	// float64
	sqrt,
	sqrt,

	// float32
	sqrtf,
	sqrt,
	sqrt,

	// generic
	sqrt,

	// int32
	sqrt,
	sqrt,

	// int16
	sqrtf,
	sqrt,
	sqrt,

	// int8
	sqrtf,
	sqrt,
	sqrt,

	// uint32
	sqrt,
	sqrt,

	// uint16
	sqrtf,
	sqrt,
	sqrt,

	// uint8
	sqrtf,
	sqrt,
	sqrt,

	// uint8c
	sqrtf,
	sqrt,
	sqrt
];


// EXPORTS //

module.exports = data;
