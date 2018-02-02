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
var pow = require( '@stdlib/math/base/special/pow' );
var BIAS = require( '@stdlib/constants/math/float64-exponent-bias' );
var frexp = require( './../lib' );

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

// Generate random numbers and break each into a normalized fraction and an integer power of two...
for ( i = 0; i < 100; i++ ) {
	if ( randu() < 0.5 ) {
		sign = -1.0;
	} else {
		sign = 1.0;
	}
	frac = randu() * 10.0;
	exp = round( randu()*616.0 ) - 308;
	x = sign * frac * pow( 10.0, exp );
	f = frexp( x );
	if ( f[ 1 ] > BIAS ) {
		v = f[ 0 ] * pow( 2.0, f[1]-BIAS ) * pow( 2.0, BIAS );
	} else {
		v = f[ 0 ] * pow( 2.0, f[ 1 ] );
	}
	console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
}
