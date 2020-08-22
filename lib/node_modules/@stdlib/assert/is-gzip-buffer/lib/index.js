/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Test if a value is a gzip buffer (or Uint8Array).
*
* @module @stdlib/assert/is-gzip-buffer
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
* var isgzipBuffer = require( '@stdlib/assert/is-gzip-buffer' );
*
* var buf = new Uint8Array( 20 );
* buf[ 0 ] = 31;  // 0x1f => magic number
* buf[ 1 ] = 139; // 0x8b
* buf[ 2 ] = 8;   // 0x08 => compression method
*
* var bool = isgzipBuffer( buf );
* // returns true
*
* bool = isgzipBuffer( new Uint8Array( 20 ) );
* // returns false
*
* bool = isgzipBuffer( [] );
* // returns false
*/

// MODULES //

var isgzipBuffer = require( './main.js' );


// EXPORTS //

module.exports = isgzipBuffer;
