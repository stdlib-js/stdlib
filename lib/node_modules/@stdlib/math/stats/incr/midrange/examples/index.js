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
var incrmidrange = require( './../lib' );

var accumulator;
var midrange;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmidrange();

// For each simulated datum, update the mid-range...
console.log( '\nValue\tMid-range\n' );
for ( i = 0; i < 100; i++ ) {
	v = randu() * 100.0;
	midrange = accumulator( v );
	console.log( '%d\t%d', v.toFixed( 4 ), midrange.toFixed( 4 ) );
}
console.log( '\nFinal mid-range: %d\n', accumulator() );
