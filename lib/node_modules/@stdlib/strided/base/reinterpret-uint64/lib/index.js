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
* Reinterpret a `Uint64Array` as a `Uint32Array` of interleaved high and low words.
*
* @module @stdlib/strided/base/reinterpret-uint64
*
* @example
* var Uint64Array = require( '@stdlib/array/uint64' );
* var reinterpret = require( '@stdlib/strided/base/reinterpret-uint64' );
*
* var x = new Uint64Array( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Uint32Array>
*
* var bool = ( out.buffer === x.buffer );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
