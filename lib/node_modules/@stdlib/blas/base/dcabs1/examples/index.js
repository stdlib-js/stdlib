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

var Complex128 = require( '@stdlib/complex/float64/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var dcabs1 = require( './../lib' );

// Create a PRNG to generate uniformly distributed pseudorandom integers:
var rand = discreteUniform( -5, 5 );

// Compute the sum of the absolute values of real and imaginary components for a set of complex numbers...
var z;
var i;
for ( i = 0; i < 100; i++ ) {
	z = new Complex128( rand(), rand() );
	console.log( 'dcabs1(%s) = %d', z.toString(), dcabs1( z ) );
}
