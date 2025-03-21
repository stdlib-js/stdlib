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
* Create an uninitialized array having a specified length.
*
* @module @stdlib/array/empty
*
* @example
* var empty = require( '@stdlib/array/empty' );
*
* var arr = empty( 2 );
* // returns <Float64Array>
*
* @example
* var empty = require( '@stdlib/array/empty' );
*
* var arr = empty( 2, 'float32' );
* // returns <Float32Array>
*/

// MODULES //

var isBufferUint8Array = require( './is_buffer_uint8array.js' );
var main = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var empty;
if ( isBufferUint8Array() ) {
	empty = main;
} else {
	empty = polyfill;
}


// EXPORTS //

module.exports = empty;
