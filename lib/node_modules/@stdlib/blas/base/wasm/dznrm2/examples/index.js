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
var Complex128Array = require( '@stdlib/array/complex128' );
var dznrm2 = require( './../lib' );

function main() {
	var xbuf;
	var out;
	var x;
	var N;

	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	// Specify a vector length:
	N = 5;

	// Create an input array:
	xbuf = oneTo( N*2, 'float64' );
	x = new Complex128Array( xbuf.buffer );

	// Perform computation:
	out = dznrm2.ndarray( N, x, 1, 0 );

	// Print the result:
	console.log( out );
}

main();
