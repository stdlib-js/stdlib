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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/base/uniform' );
var evalpolyf = require( './../lib' );

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

// Create an array of random coefficients:
var coef = discreteUniform( 10, -100, 100, {
	'dtype': 'float32'
});

// Generate a polynomial equation:
var eqn = toStr( coef );
console.log( 'f(x) = %s', eqn );

// Evaluate the polynomial at random values:
var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = uniform( 0.0, 100.0 );
	console.log( 'f(%d) = %d', v, evalpolyf( coef, v ) );
}

// Generate an `evalpolyf` function:
var polyval = evalpolyf.factory( coef );
console.log( '\nf(x) = %s', eqn );
for ( i = 0; i < 100; i++ ) {
	v = uniform( -50.0, 50.0 );
	console.log( 'f(%d) = %d', v, polyval( v ) );
}
