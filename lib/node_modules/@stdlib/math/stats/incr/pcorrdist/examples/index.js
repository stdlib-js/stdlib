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
var incrpcorrdist = require( './../lib' );

var accumulator;
var d;
var x;
var y;
var i;

// Initialize an accumulator:
accumulator = incrpcorrdist();

// For each simulated datum, update the sample Pearson correlation distance...
console.log( '\nx\ty\tCorrelation Distance\n' );
for ( i = 0; i < 100; i++ ) {
	x = randu() * 100.0;
	y = randu() * 100.0;
	d = accumulator( x, y );
	console.log( '%d\t%d\t%d', x.toFixed( 4 ), y.toFixed( 4 ), d.toFixed( 4 ) );
}
console.log( '\nFinal 1-r: %d\n', accumulator() );
