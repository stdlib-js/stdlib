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
* Test whether an input value is a supported ndarray complex-valued floating-point data type single letter character abbreviation.
*
* @module @stdlib/ndarray/base/assert/is-complex-floating-point-data-type-char
*
* @example
* var isComplexFloatingPointDataTypeChar = require( '@stdlib/ndarray/base/assert/is-complex-floating-point-data-type-char' );
*
* var bool = isComplexFloatingPointDataTypeChar( 'r' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'c' );
* // returns true
*
* bool = isComplexFloatingPointDataTypeChar( 'z' );
* // returns true
*
* bool = isComplexFloatingPointDataTypeChar( 'f' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'd' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'o' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'k' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'i' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 's' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 't' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'u' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'b' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'a' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
