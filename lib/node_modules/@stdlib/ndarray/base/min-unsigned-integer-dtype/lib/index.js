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

/**
* Determine the minimum ndarray data type for storing a provided unsigned integer value.
*
* @module @stdlib/ndarray/base/min-unsigned-integer-dtype
*
* @example
* var minUnsignedIntegerDataType = require( '@stdlib/ndarray/base/min-unsigned-integer-dtype' );
*
* var dt = minUnsignedIntegerDataType( 1280 );
* // returns 'uint16'
*
* dt = minUnsignedIntegerDataType( 3 );
* // returns 'uint8'
*/

// MODULES //

var minUnsignedIntegerDataType = require( './main.js' ); // eslint-disable-line id-length


// EXPORTS //

module.exports = minUnsignedIntegerDataType;
