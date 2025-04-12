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
* Determine the minimum ndarray data type for storing a provided signed integer value.
*
* @module @stdlib/ndarray/base/min-signed-integer-dtype
*
* @example
* var minSignedIntegerDataType = require( '@stdlib/ndarray/base/min-signed-integer-dtype' );
*
* var dt = minSignedIntegerDataType( 1280 );
* // returns 'int16'
*
* dt = minSignedIntegerDataType( 3 );
* // returns 'int8'
*/

// MODULES //

var minSignedIntegerDataType = require( './main.js' );


// EXPORTS //

module.exports = minSignedIntegerDataType;
