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
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var zdrot = require( './../lib' );

function main() {
	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	// Specify a vector length:
	var N = 5;

	// Create input arrays:
	var xbuf = oneTo( N*2, 'float64' );
	var zx = new Complex128Array( xbuf.buffer );

	var ybuf = ones( N*2, 'float64' );
	var zy = new Complex128Array( ybuf.buffer );

	// Perform computation:
	zdrot.ndarray( N, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );

	// Print the results:
	console.log( reinterpretComplex128( zx, 0 ) );
	// => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

	console.log( reinterpretComplex128( zy, 0 ) );
	// => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
}

main();
