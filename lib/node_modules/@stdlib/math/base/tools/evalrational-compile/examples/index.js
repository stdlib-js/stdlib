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

var resolve = require( 'path' ).resolve;
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var tryRequire = require( '@stdlib/utils/try-require' );

var compile = tryRequire( resolve( __dirname, '..', 'lib' ) );
if ( compile instanceof Error ) {
	console.log( 'Unable to run example. Unsupported environment.' );
} else {
	main();
}

function main() {
	// Create arrays of random coefficients:
	var P = discreteUniform( 10, -100, 100 );
	var Q = discreteUniform( 10, -100, 100 );

	// Compile a module for evaluating a rational function:
	var str = compile( P, Q );
	console.log( str );
}
