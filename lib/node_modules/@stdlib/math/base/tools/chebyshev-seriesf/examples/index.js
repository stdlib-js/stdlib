/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var chebyshevSeriesf = require( './../lib' );

// Create an array of random coefficients:
var coef = discreteUniform( 10, -100, 100, {
	'dtype': 'float32'
});

// Evaluate the series at random values using the direct function:
var v = uniform( 100, -2.0, 2.0, {
	'dtype': 'float32'
});
var i;
console.log( 'Direct evaluation:' );
for ( i = 0; i < v.length; i++ ) {
	console.log( 'f(%0.4f) = %0.4f', v[ i ], chebyshevSeriesf( v[ i ], coef ) );
}

// Generate a chebyshev series evaluation function:
var evaluate = chebyshevSeriesf.factory( coef );
var x = uniform( 100, -2.0, 2.0, {
	'dtype': 'float32'
});
logEachMap( 'f(%0.4f) = %0.4f', x, evaluate );
