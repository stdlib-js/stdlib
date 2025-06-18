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
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var cswap = require( './../lib' );

function main() {
	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	// Specify a vector length:
	var N = 5;

	// Create input arrays:
	var xbuf = oneTo( N*2, 'float32' );
	var x = new Complex64Array( xbuf.buffer );

	var ybuf = zeros( N*2, 'float32' );
	var y = new Complex64Array( ybuf.buffer );

	// Perform computation:
	cswap.ndarray( N, x, 1, 0, y, 1, 0 );

	// Print the results:
	console.log( reinterpretComplex64( x, 0 ) );
	// => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]

	console.log( reinterpretComplex64( y, 0 ) );
	// => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
}

main();
