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

var rnorm = require( '@stdlib/random/base/normal' );
var Float64Array = require( '@stdlib/array/float64' );
var kstest = require( './../lib' );

var table;
var sigma;
var out;
var mu;
var i;
var x;

// Draw random variates from a normal distribution...
mu = 3.0;
sigma = 1.0;
x = new Float64Array( 100 );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = rnorm( mu, sigma );
}

// Test against N(0,1):
out = kstest( x, 'normal', 0.0, sigma );
table = out.print();

console.log( 'Test against N(0,'+sigma+'):' );
console.log( table );

// Test against N(3,1):
out = kstest( x, 'normal', mu, sigma );
table = out.print();

console.log( 'Test against N('+mu+','+sigma+'):' );
console.log( table );
