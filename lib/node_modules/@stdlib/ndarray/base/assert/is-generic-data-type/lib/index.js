/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Test whether an input value is a supported ndarray generic data type.
*
* @module @stdlib/ndarray/base/assert/is-generic-data-type
*
* @example
* var isGenericDataType = require( '@stdlib/ndarray/base/assert/is-generic-data-type' );
*
* var bool = isGenericDataType( 'binary' );
* // returns false
*
* bool = isGenericDataType( 'bool' );
* // returns false
*
* bool = isGenericDataType( 'float32' );
* // returns false
*
* bool = isGenericDataType( 'float64' );
* // returns false
*
* bool = isGenericDataType( 'generic' );
* // returns true
*
* bool = isGenericDataType( 'int16' );
* // returns false
*
* bool = isGenericDataType( 'int32' );
* // returns false
*
* bool = isGenericDataType( 'int8' );
* // returns false
*
* bool = isGenericDataType( 'uint16' );
* // returns false
*
* bool = isGenericDataType( 'uint32' );
* // returns false
*
* bool = isGenericDataType( 'uint8' );
* // returns false
*
* bool = isGenericDataType( 'uint8c' );
* // returns false
*
* bool = isGenericDataType( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
