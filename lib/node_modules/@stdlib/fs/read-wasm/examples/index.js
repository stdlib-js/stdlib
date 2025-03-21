/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var join = require( 'path' ).join;
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var readWASM = require( './../lib' );

var fpath = join( __dirname, 'fixtures', 'file.wasm' );
readWASM( fpath, onRead );

function onRead( error, wasm ) {
	var bool;
	if ( error ) {
		throw error;
	}
	bool = hasWebAssemblySupport();

	// If WebAssembly is supported, create a WebAssembly module instance...
	if ( bool ) {
		wasm = new WebAssembly.Module( wasm );
		wasm = new WebAssembly.Instance( wasm, {} );
		console.log( wasm.exports.stdlib_hypot( 5.0, 12.0 ) );
	} else {
		console.log( wasm );
	}
}
