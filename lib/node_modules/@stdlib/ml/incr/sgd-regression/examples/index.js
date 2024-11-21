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
var normal = require( '@stdlib/random/base/normal' );
var incrSGDRegression = require( './../lib' );

var accumulator;
var rnorm;
var x1;
var x2;
var y;
var i;

rnorm = normal.factory( 0.0, 1.0 );

// Create model:
accumulator = incrSGDRegression({
	'lambda': 1e-7,
	'loss': 'squaredError',
	'intercept': true
});

// Update model as data comes in...
for ( i = 0; i < 10000; i++ ) {
	x1 = randu();
	x2 = randu();
	y = (3.0 * x1) + (-3.0 * x2) + 2.0 + rnorm();
	accumulator( [ x1, x2 ], y );
}

// Extract model coefficients:
console.log( accumulator.coefs );

// Predict new observations:
console.log( 'y_hat = %d; x1 = %d; x2 = %d', accumulator.predict( [0.9, 0.1] ), 0.9, 0.1 );
console.log( 'y_hat = %d; x1 = %d; x2 = %d', accumulator.predict( [0.1, 0.9] ), 0.1, 0.9 );
console.log( 'y_hat = %d; x1 = %d; x2 = %d', accumulator.predict( [0.9, 0.9] ), 0.9, 0.9 );
