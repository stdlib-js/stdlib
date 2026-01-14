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
* Test whether an input value is a supported array real-valued data type.
*
* @module @stdlib/array/base/assert/is-real-data-type
*
* @example
* var isRealDataType = require( '@stdlib/array/base/assert/is-real-data-type' );
*
* var bool = isRealDataType( 'float32' );
* // returns true
*
* bool = isRealDataType( 'float64' );
* // returns true
*
* bool = isRealDataType( 'complex128' );
* // returns false
*
* bool = isRealDataType( 'generic' );
* // returns false
*
* bool = isRealDataType( 'int16' );
* // returns true
*
* bool = isRealDataType( 'int32' );
* // returns true
*
* bool = isRealDataType( 'int8' );
* // returns true
*
* bool = isRealDataType( 'uint16' );
* // returns true
*
* bool = isRealDataType( 'uint32' );
* // returns true
*
* bool = isRealDataType( 'uint8' );
* // returns true
*
* bool = isRealDataType( 'uint8c' );
* // returns true
*
* bool = isRealDataType( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
