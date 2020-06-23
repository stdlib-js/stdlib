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

var incrgrubbs = require( '@stdlib/stats/incr/grubbs' );
var data = require( './../' ).SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK;

var acc;
var d;
var i;
var j;
var k;

// Get the sensor data:
d = data();

// For each mote, test for an outlier temperature measurement...
i = 0;
for ( j = 0; j < 4; j++ ) {
	k = j + 1;

	// Create a new accumulator for performing Grubbs' test:
	acc = incrgrubbs();

	// Update the accumulator with temperature data...
	while ( i < d.length && d[ i ].mote_id === k ) {
		acc( d[ i ].temperature );
		i += 1;
	}
	// Print test results:
	console.log( '' );
	console.log( 'Mote: %d', k );
	console.log( '' );
	console.log( acc().print() );
}
