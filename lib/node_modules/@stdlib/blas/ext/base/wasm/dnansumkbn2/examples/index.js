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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var dnansumkbn2 = require( './../lib' );

function clbk() {
	if ( bernoulli( 0.7 ) > 0 ) {
		return discreteUniform( 0, 100 );
	}
	return NaN;
}

function main() {
	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	// Specify a vector length:
	var N = 4;

	// Create an input array:
	var x = filledarrayBy( 4, 'float64', clbk );

	// Perform computation:
	var sum = dnansumkbn2.ndarray( N, x, 1, 0 );

	// Print the result:
	console.log( sum );
}

main();
