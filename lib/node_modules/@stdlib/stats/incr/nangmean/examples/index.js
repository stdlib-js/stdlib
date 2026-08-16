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

var bernoulli = require( '@stdlib/random/base/bernoulli' );
var uniform = require( '@stdlib/random/base/uniform' );
var incrnangmean = require( './../lib' );

// Initialize an accumulator:
var accumulator = incrnangmean();

// For each simulated value, update the geometric mean...
console.log( '\nValue\tGeometric mean\n' );
var prod;
var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = ( bernoulli( 0.2 ) ) ? NaN : uniform( 0.0, 100.0 );
	prod = accumulator( v );
	console.log( '%s\t%s', ( v === v ) ? v.toFixed( 4 ) : 'NaN', ( prod === null ) ? 'null' : prod.toFixed( 4 ) );
}
console.log( '\nFinal geometric mean: %d\n', accumulator() );
