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
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Float32Array = require( '@stdlib/array/float32' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var cscal = require( './../lib' );

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
	var mod = new cscal.Module( mem );
	// returns <Module>

	// Initialize the routine:
	mod.initializeSync(); // eslint-disable-line node/no-sync

	// Define a vector data type for interleaved real and imaginary components:
	var dtype = 'complex64';

	// Specify a vector length:
	var N = 5;

	// Define a pointer (i.e., byte offset) for storing the input vector:
	var xptr = 0;

	// Define a pointer for storing a complex number:
	var zptr = N * bytesPerElement( dtype );

	// Write vector values to module memory:
	var xbuf = oneTo( N*2, 'float32' );
	var x = new Complex64Array( xbuf.buffer );
	mod.write( xptr, x );

	// Write complex number components to module memory:
	mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );

	// Perform computation:
	mod.ndarray( N, zptr, xptr, 1, 0 );

	// Read out the results:
	var view = zeros( N, dtype );
	mod.read( xptr, view );

	console.log( reinterpretComplex64( view, 0 ) );
	// => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
}

main();
