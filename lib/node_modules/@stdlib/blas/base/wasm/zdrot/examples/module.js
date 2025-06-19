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

var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var Memory = require( '@stdlib/wasm/memory' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var zdrot = require( './../lib' );

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
	var mod = new zdrot.Module( mem );
	// returns <Module>

	// Initialize the routine:
	mod.initializeSync(); // eslint-disable-line node/no-sync

	// Define a vector data type for interleaved real and imaginary components:
	var dtype = 'complex128';

	// Specify a vector length:
	var N = 5;

	// Define pointer (i.e., byte offsets) for storing input vectors:
	var zxptr = 0;
	var zyptr = N * bytesPerElement( dtype );

	// Write vector values to module memory:
	var xbuf = oneTo( N*2, 'float64' );
	var zx = new Complex128Array( xbuf.buffer );
	mod.write( zxptr, zx );

	var ybuf = ones( N*2, 'float64' );
	var zy = new Complex128Array( ybuf.buffer );
	mod.write( zyptr, zy );

	// Perform computation:
	mod.ndarray( N, zxptr, 1, 0, zyptr, 1, 0, 0.8, 0.6 );

	// Read out the results:
	var viewX = zeros( N, dtype );
	var viewY = zeros( N, dtype );
	mod.read( zxptr, viewX );
	mod.read( zyptr, viewY );

	console.log( reinterpretComplex128( viewX, 0 ) );
	// => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

	console.log( reinterpretComplex128( viewY, 0 ) );
	// => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
}

main();
