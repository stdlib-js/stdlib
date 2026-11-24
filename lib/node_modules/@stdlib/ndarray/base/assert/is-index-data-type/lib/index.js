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

/**
* Test whether an input value is a supported ndarray index data type.
*
* @module @stdlib/ndarray/base/assert/is-index-data-type
*
* @example
* var isIndexDataType = require( '@stdlib/ndarray/base/assert/is-index-data-type' );
*
* var bool = isIndexDataType( 'binary' );
* // returns false
*
* bool = isIndexDataType( 'float32' );
* // returns false
*
* bool = isIndexDataType( 'float64' );
* // returns false
*
* bool = isIndexDataType( 'generic' );
* // returns true
*
* bool = isIndexDataType( 'int16' );
* // returns false
*
* bool = isIndexDataType( 'int32' );
* // returns true
*
* bool = isIndexDataType( 'int8' );
* // returns false
*
* bool = isIndexDataType( 'uint16' );
* // returns false
*
* bool = isIndexDataType( 'uint32' );
* // returns false
*
* bool = isIndexDataType( 'uint8' );
* // returns true
*
* bool = isIndexDataType( 'uint8c' );
* // returns false
*
* bool = isIndexDataType( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
