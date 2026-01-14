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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/base/uniform' );
var evalrational = require( './../lib' );

// Create two arrays of random coefficients...
var P = discreteUniform( 10, -100, 100 );
var Q = discreteUniform( 10, -100, 100 );

// Evaluate the rational function at random values...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = uniform( 0.0, 100.0 );
	console.log( 'f(%d) = %d', v, evalrational( P, Q, v ) );
}

// Generate an `evalrational` function...
var rational = evalrational.factory( P, Q );
for ( i = 0; i < 100; i++ ) {
	v = uniform( -50.0, 50.0 );
	console.log( 'f(%d) = %d', v, rational( v ) );
}
