/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var incrmean = require( '@stdlib/stats/incr/mean' );
var dataset = require( './../lib' );

function mean( a, b ) {
	return ( a + b ) / 2.0;
}

function reldiff( a, b ) {
	return 100.0 * ( (a-b)/a );
}

/*
* GOAL: determine whether people avoid giving birth on the 13th of each month.
*
* NOTE: for a more thorough analysis, we'd account for holidays.
*/

// Retrieve the data:
var data = dataset();

// Initialize arrays for storing births for particular day numbers:
var d6or20 = [ [], [], [], [], [], [], [] ];
var d13 = [ [], [], [], [], [], [], [] ];

// Extract the day number data...
var d;
var w;
var i;
for ( i = 0; i < data.length; i++ ) {
	d = data[ i ].date_of_month;
	w = data[ i ].day_of_week;
	if ( d === 6 ) {
		// Average of days 6 and 20 for the same month:
		d6or20[ w-1 ].push( mean( data[ i ].births, data[ i+14 ].births ) );
	} else if ( d === 13 ) {
		d13[ w-1 ].push( data[ i ].births );
	}
}

// Initialize accumulators for computing the average relative difference...
var means = [];
for ( i = 0; i < 7; i++ ) {
	means.push( incrmean() );
}

// Compute the average relative difference between days 6/20 with day 13...
var l1;
var l2;
var mu;
var j;
for ( i = 0; i < 7; i++ ) {
	l1 = d13[ i ];
	l2 = d6or20[ i ];
	mu = means[ i ];
	for ( j = 0; j < l1.length; j++ ) {
		mu( reldiff( l1[ j ], l2[ j ] ) );
	}
}

// Print the results...
for ( i = 0; i < 7; i++ ) {
	console.log( '%d: %d%', i+1, means[ i ]().toFixed( 3 ) );
}
