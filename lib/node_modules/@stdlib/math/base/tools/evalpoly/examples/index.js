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
var evalpoly = require( './../lib' );

var polyval;
var coef;
var sign;
var eqn;
var v;
var i;

// Create an array of random coefficients...
coef = new Float64Array( 10 );
for ( i = 0; i < coef.length; i++ ) {
	if ( randu() < 0.5 ) {
		sign = -1.0;
	} else {
		sign = 1.0;
	}
	coef[ i ] = sign * round( randu()*100.0 );
}
eqn = toStr( coef );
console.log( 'f(x) = %s', eqn );

// Evaluate the polynomial at random values...
for ( i = 0; i < 100; i++ ) {
	v = randu() * 100.0;
	console.log( 'f(%d) = %d', v, evalpoly( coef, v ) );
}

// Generate an `evalpoly` function...
polyval = evalpoly.factory( coef );

console.log( '\nf(x) = %s', eqn );
for ( i = 0; i < 100; i++ ) {
	v = (randu()*100.0) - 50.0;
	console.log( 'f(%d) = %d', v, polyval( v ) );
}

function toStr( coef ) {
	var str;
	var c;
	var n;
	var i;

	n = coef.length;
	str = coef[ n-1 ] + 'x^' + n;
	for ( i = n-2; i >= 0; i-- ) {
		c = coef[ i ];
		if ( c < 0 ) {
			c = -c;
			str += ' - ';
		} else {
			str += ' + ';
		}
		str += c + 'x^' + i;
	}
	return str;
}
