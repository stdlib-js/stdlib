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
var toBinaryString = require( '@stdlib/number/float64/base/to-binary-string' );
var fromBinaryString = require( './../lib' );

var frac;
var sign;
var exp;
var b;
var x;
var y;
var i;

// Convert random numbers to literal bit representations and then convert them back...
for ( i = 0; i < 100; i++ ) {
	if ( randu() < 0.5 ) {
		sign = -1.0;
	} else {
		sign = 1.0;
	}
	frac = randu() * 10.0;
	exp = round( randu()*100.0 );
	if ( randu() < 0.5 ) {
		exp = -exp;
	}
	x = sign * frac * pow( 2.0, exp );
	b = toBinaryString( x );
	y = fromBinaryString( b );
	console.log( '%d => %s => %d', x, b, y );
	console.log( x === y );
}
