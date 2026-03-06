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

var sensorData = require( '@stdlib/datasets/suthaharan-single-hop-sensor-network' );
var incrgrubbs = require( './../lib' );

var data;
var opts;
var acc;
var N;
var r;
var i;

// Get a test dataset:
data = sensorData();
N = 0;
for ( i = 0; i < data.length; i++ ) {
	if ( data[ i ].mote_id === 1 ) {
		N += 1;
		data[ i ] = data[ i ].temperature;
	}
}
data.length = N;

// Create a new accumulator which analyzes the last 5 minutes of data:
opts = {
	'alternative': 'two-sided',
	'alpha': 0.001
};
acc = incrgrubbs( 60, opts );

// Update the accumulator:
for ( i = 0; i < data.length; i++ ) {
	r = acc( data[ i ] );
	if ( r && r.rejected ) {
		console.log( 'Index: %d', i );
		console.log( '' );
		console.log( r.print() );
	}
}
