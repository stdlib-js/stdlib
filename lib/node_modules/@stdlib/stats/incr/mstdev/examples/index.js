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
var incrmstdev = require( './../lib' );

var accumulator;
var s;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmstdev( 5 );

// For each simulated datum, update the moving corrected sample standard deviation...
console.log( '\nValue\tSample Stdev\n' );
for ( i = 0; i < 100; i++ ) {
	v = randu() * 100.0;
	s = accumulator( v );
	console.log( '%d\t%d', v.toFixed( 4 ), s.toFixed( 4 ) );
}
