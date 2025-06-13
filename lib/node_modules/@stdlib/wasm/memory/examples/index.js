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

var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var DataView = require( '@stdlib/array/dataview' );
var Memory = require( './../lib' );

function main() {
	var view;
	var mem;
	var v;
	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	mem = new Memory({
		'initial': 1
	});
	view = new DataView( mem.buffer );

	view.setFloat64( 0, 3.14 );

	// ...

	v = view.getFloat64( 0 );
	console.log( v );
	// => 3.14
}

main();
