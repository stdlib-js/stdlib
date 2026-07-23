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

// MODULES //

var Memory = require( '@stdlib/wasm/memory' );
var nativeClass = require( '@stdlib/utils/native-class' );


// VARIABLES //

var hasWasmMemory = ( typeof Memory === 'function' );


// MAIN //

/**
* Tests if a value is a WebAssembly memory instance.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether the value is a WebAssembly memory instance
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
*
* var mem = new Memory({
*     'initial': 0
* });
* var bool = isWebAssemblyMemory( mem );
* // returns true
*
* @example
* var bool = isWebAssemblyMemory( [] );
* // returns false
*
* @example
* var bool = isWebAssemblyMemory( 123 );
* // returns false
*/
function isWebAssemblyMemory( value ) {
	return (
		( hasWasmMemory && value instanceof Memory ) ||
		nativeClass( value ) === '[object WebAssembly.Memory]'
	);
}


// EXPORTS //

module.exports = isWebAssemblyMemory;
