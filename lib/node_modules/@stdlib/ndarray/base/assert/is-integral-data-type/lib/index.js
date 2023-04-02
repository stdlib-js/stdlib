/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Test whether an input value is a supported ndarray integral data type.
*
* @module @stdlib/ndarray/base/assert/is-integral-data-type
*
* @example
* var isIntegralDataType = require( '@stdlib/ndarray/base/assert/is-integral-data-type' );
*
* var bool = isIntegralDataType( 'binary' );
* // returns false
*
* bool = isIntegralDataType( 'float32' );
* // returns false
*
* bool = isIntegralDataType( 'float64' );
* // returns false
*
* bool = isIntegralDataType( 'generic' );
* // returns false
*
* bool = isIntegralDataType( 'int16' );
* // returns true
*
* bool = isIntegralDataType( 'int32' );
* // returns true
*
* bool = isIntegralDataType( 'int8' );
* // returns true
*
* bool = isIntegralDataType( 'uint16' );
* // returns true
*
* bool = isIntegralDataType( 'uint32' );
* // returns true
*
* bool = isIntegralDataType( 'uint8' );
* // returns true
*
* bool = isIntegralDataType( 'uint8c' );
* // returns true
*
* bool = isIntegralDataType( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
