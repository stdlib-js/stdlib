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
var Int8Array = require( '@stdlib/array/int8' );
var stdout = require( '@stdlib/streams/node/stdout' );
var updown = require( './../lib' );

var chart;
var data;
var id;
var i;

function datum() {
	var d = randu();
	if ( d > 0.75 ) {
		d = 1;
	} else {
		d = -1;
	}
	return d;
}

// Generate some random data...
data = new Int8Array( 50 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = datum();
}

// Create a new up/down chart:
chart = updown( data );

// Hide the terminal cursor:
stdout.write( '\u001b[?25l' );

// Render the chart in the terminal:
stdout.write( chart.render() );

// Configure the chart to support streaming data:
chart.bufferSize = data.length;

// Update the terminal chart with new data every second:
id = setInterval( update, 1000 );

// After some time, stop updating and close:
setTimeout( stop, 20000 );

function update() {
	// Update the chart with new data:
	chart.push( datum() );

	// Clear the terminal line and render the chart:
	stdout.write( '\r\u001b[2K' + chart.render() );
}

function stop() { // eslint-disable-line stdlib/no-redeclare
	clearInterval( id );

	// Restore the terminal cursor:
	stdout.write( '\u001b[?25h' );

	stdout.write( '\n' );
}
