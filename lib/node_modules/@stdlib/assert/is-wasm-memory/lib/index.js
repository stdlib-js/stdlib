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
* Test if a value is a WebAssembly memory instance.
*
* @module @stdlib/assert/is-wasm-memory
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var isWebAssemblyMemory = require( '@stdlib/assert/is-wasm-memory' );
*
* var mem = new Memory({
*     'initial': 0
* });
* var bool = isWebAssemblyMemory( mem );
* // returns true
*
* bool = isWebAssemblyMemory( [] );
* // returns false
*/

// MODULES //

var isWebAssemblyMemory = require( './main.js' );


// EXPORTS //

module.exports = isWebAssemblyMemory;
