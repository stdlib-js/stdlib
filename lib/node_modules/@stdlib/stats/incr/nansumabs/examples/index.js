/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var incrnansumabs = require( './../lib' );

var accumulator;
var sum;
var v;
var i;

// Initialize an accumulator:
accumulator = incrnansumabs();

// For each simulated datum, update the sum...
console.log( '\nValue\tSum\n' );
for ( i = 0; i < 100; i++ ) {
	if ( randu() < 0.2 ) {
		v = NaN;
	} else {
		v = ( randu()*100.0 ) - 50.0;
	}
	sum = accumulator( v );
	console.log( '%d\t%d', v.toFixed( 3 ), ( sum === null ) ? NaN : sum.toFixed( 3 ) );
}
console.log( '\nFinal sum: %d\n', accumulator() );
