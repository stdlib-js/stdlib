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
* Test whether an input value is a supported array unsigned integer data type.
*
* @module @stdlib/array/base/assert/is-unsigned-integer-data-type
*
* @example
* var isUnsignedIntegerDataType = require( '@stdlib/array/base/assert/is-unsigned-integer-data-type' );
*
* var bool = isUnsignedIntegerDataType( 'float32' );
* // returns false
*
* bool = isUnsignedIntegerDataType( 'float64' );
* // returns false
*
* bool = isUnsignedIntegerDataType( 'generic' );
* // returns false
*
* bool = isUnsignedIntegerDataType( 'int16' );
* // returns false
*
* bool = isUnsignedIntegerDataType( 'int32' );
* // returns false
*
* bool = isUnsignedIntegerDataType( 'int8' );
* // returns false
*
* bool = isUnsignedIntegerDataType( 'uint16' );
* // returns true
*
* bool = isUnsignedIntegerDataType( 'uint32' );
* // returns true
*
* bool = isUnsignedIntegerDataType( 'uint8' );
* // returns true
*
* bool = isUnsignedIntegerDataType( 'uint8c' );
* // returns true
*
* bool = isUnsignedIntegerDataType( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
