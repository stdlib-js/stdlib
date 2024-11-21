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
var pdf = require( './../lib' );

var sigma;
var mu;
var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
	a = ( randu() * 80.0 ) - 40.0;
	b = a + ( randu() * 80.0 );
	x = ( randu() * 40.0 ) + a;
	mu = ( randu() * 20.0 ) - 10.0;
	sigma = ( randu() * 10.0 ) + 2.0;
	y = pdf( x, a, b, mu, sigma );
	console.log( 'x: %d, a: %d, b: %d, mu: %d, sigma: %d, f(x;a,b,mu,sigma): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
