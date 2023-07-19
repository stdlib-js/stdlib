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

var normal = require( '@stdlib/random/base/normal' );
var binomial = require( '@stdlib/random/base/binomial' );
var array = require( '@stdlib/ndarray/array' );
var exp = require( '@stdlib/math/base/special/exp' );
var incrBinaryClassification = require( './../lib' );

// Create a new accumulator:
var acc = incrBinaryClassification( 2, {
	'intercept': true,
	'lambda': 1.0e-3,
	'loss': 'log'
});

// Incrementally update the classification model...
var phat;
var x;
var i;
for ( i = 0; i < 10000; i++ ) {
	x = array( [ normal( 0.0, 1.0 ), normal( 0.0, 1.0 ) ] );
	phat = 1.0 / ( 1.0+exp( -( ( 3.0*x.get(0) ) - ( 2.0*x.get(1) ) + 1.0 ) ) );
	acc( x, ( binomial( 1, phat ) ) ? 1.0 : -1.0 );
}

// Retrieve model coefficients:
var coefs = acc();
console.log( 'Feature coefficients: %d, %d', coefs.get( 0 ), coefs.get( 1 ) );
console.log( 'Intercept: %d', coefs.get( 2 ) );

// Predict new observations...
x = array( [ [ 0.9, 0.1 ], [ 0.1, 0.9 ], [ 0.9, 0.9 ] ] );

var out = acc.predict( x );
console.log( 'x = [%d, %d]; label = %d', x.get( 0, 0 ), x.get( 0, 1 ), out.get( 0 ) );
console.log( 'x = [%d, %d]; label = %d', x.get( 1, 0 ), x.get( 1, 1 ), out.get( 1 ) );
console.log( 'x = [%d, %d]; label = %d', x.get( 2, 0 ), x.get( 2, 1 ), out.get( 2 ) );

out = acc.predict( x, 'probability' );
console.log( 'x = [%d, %d]; P(y=1|x) = %d', x.get( 0, 0 ), x.get( 0, 1 ), out.get( 0 ) );
console.log( 'x = [%d, %d]; P(y=1|x) = %d', x.get( 1, 0 ), x.get( 1, 1 ), out.get( 1 ) );
console.log( 'x = [%d, %d]; P(y=1|x) = %d', x.get( 2, 0 ), x.get( 2, 1 ), out.get( 2 ) );

out = acc.predict( x, 'linear' );
console.log( 'x = [%d, %d]; lp = %d', x.get( 0, 0 ), x.get( 0, 1 ), out.get( 0 ) );
console.log( 'x = [%d, %d]; lp = %d', x.get( 1, 0 ), x.get( 1, 1 ), out.get( 1 ) );
console.log( 'x = [%d, %d]; lp = %d', x.get( 2, 0 ), x.get( 2, 1 ), out.get( 2 ) );
