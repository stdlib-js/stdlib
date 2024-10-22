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
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var sdot = require( './../lib' );

function main() {
	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	var mem = new Memory({
		'initial': 10,
		'maximum': 100
	});

	// Create a BLAS routine:
	var mod = new sdot.Module( mem );
	// returns <Module>

	// Initialize the routine:
	mod.initializeSync(); // eslint-disable-line node/no-sync

	// Define a vector data type:
	var dtype = 'float32';

	// Specify a vector length:
	var N = 5;

	// Define pointers (i.e., byte offsets) for storing two vectors:
	var xptr = 0;
	var yptr = N * bytesPerElement( dtype );

	// Write vector values to module memory:
	mod.write( xptr, oneTo( N, dtype ) );
	mod.write( yptr, ones( N, dtype ) );

	// Perform computation:
	var dot = mod.ndarray( N, xptr, 1, 0, yptr, 1, 0 );

	// Print the result:
	console.log( dot );
}

main();
