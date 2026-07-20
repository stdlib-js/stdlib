/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var uniform = require( '@stdlib/random/base/uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var incrnanmeanabs = require( './../lib' );

// Initialize an accumulator:
var accumulator = incrnanmeanabs();

// For each simulated datum, update the mean...
console.log( '\nValue\tMean\n' );
var mu;
var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = ( bernoulli( 0.8 ) < 1 ) ? NaN : uniform( -100.0, 100.0 );
	mu = accumulator( v );
	console.log( '%d\t%d', v.toFixed( 3 ), ( mu === null ) ? NaN : mu.toFixed( 3 ) );
}
console.log( '\nFinal mean: %d\n', accumulator() );
