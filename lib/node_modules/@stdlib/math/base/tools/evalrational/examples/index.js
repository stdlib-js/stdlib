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

var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var evalrational = require( './../lib' );

var rational;
var sign;
var len;
var P;
var Q;
var v;
var i;

// Create two arrays of random coefficients...
len = 10;
P = new Float64Array( len );
Q = new Float64Array( len );
for ( i = 0; i < len; i++ ) {
	if ( randu() < 0.5 ) {
		sign = -1.0;
	} else {
		sign = 1.0;
	}
	P[ i ] = sign * round( randu()*100.0 );
	Q[ i ] = sign * round( randu()*100.0 );
}

// Evaluate the rational function at random values...
for ( i = 0; i < 100; i++ ) {
	v = randu() * 100.0;
	console.log( 'f(%d) = %d', v, evalrational( P, Q, v ) );
}

// Generate an `evalrational` function...
rational = evalrational.factory( P, Q );
for ( i = 0; i < 100; i++ ) {
	v = (randu()*100.0) - 50.0;
	console.log( 'f(%d) = %d', v, rational( v ) );
}
