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
var ones = require( '@stdlib/array/ones' );
var srot = require( './../lib' );

function main() {
	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	// Specify a vector length:
	var N = 5;

	// Create two arrays:
	var x = oneTo( N, 'float32' );
	var y = ones( N, 'float32' );

	// Perform computation:
	srot.ndarray( N, x, 1, 0, y, 1, 0, 0.0, 1.0 );

	// Print the results:
	console.log( x );
	// => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]

	console.log( y );
	// => <Float32Array>[ -1.0, -2.0, -3.0, -4,0, -5.0 ]
}

main();
