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
* Test if a value is a Float16Array.
*
* @module @stdlib/assert/is-float16array
*
* @example
* var Float16Array = require( '@stdlib/array/float16' );
* var isFloat16Array = require( '@stdlib/assert/is-float16array' );
*
* var bool = isFloat16Array( new Float16Array( 10 ) );
* // returns true
*
* bool = isFloat16Array( [] );
* // returns false
*/

// MODULES //

var isFloat16Array = require( './main.js' );


// EXPORTS //

module.exports = isFloat16Array;
